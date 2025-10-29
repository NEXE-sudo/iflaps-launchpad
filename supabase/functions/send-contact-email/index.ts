// supabase/functions/send-contact-email/index.ts

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { name, email, subject });

    // Validate input
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send email to business owner
    const ownerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "iFLAPS Education <onboarding@resend.dev>",
        to: ["amishgandhi316@gmail.com"],
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
              <div style="background: white; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px; text-align: center;">
              This email was sent from the iFLAPS Education website contact form.
            </p>
          </div>
        `,
      }),
    });

    const ownerEmailData = await ownerEmailResponse.json();
    console.log("Owner email response:", ownerEmailData);

    if (!ownerEmailResponse.ok) {
      throw new Error(`Failed to send owner email: ${JSON.stringify(ownerEmailData)}`);
    }

    // Send confirmation email to user
    const userEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "iFLAPS Education <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting iFLAPS Education",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin-bottom: 10px;">iFLAPS Education</h1>
              <p style="color: #6b7280;">Excellence in Learning</p>
            </div>
            
            <h2 style="color: #374151;">Thank you for contacting us, ${name}!</h2>
            
            <p style="color: #4b5563; line-height: 1.6;">
              We have received your message regarding "<strong>${subject}</strong>" and appreciate you reaching out to us.
            </p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <p style="color: #1e40af; margin: 0; font-weight: 500;">
                Our team will review your inquiry and get back to you within 24-48 hours.
              </p>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6;">
              In the meantime, feel free to explore our courses and educational resources on our website.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://nnfrbvsbziossxbtkadz.supabase.co" 
                 style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
              Best regards,<br>
              <strong>The iFLAPS Education Team</strong><br>
              Email: amishgandhi316@gmail.com<br>
              Phone: +91 98765 43210
            </p>
          </div>
        `,
      }),
    });

    const userEmailData = await userEmailResponse.json();
    console.log("User email response:", userEmailData);

    if (!userEmailResponse.ok) {
      console.error("Failed to send user confirmation email:", userEmailData);
      // Don't fail the whole request if user email fails
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails sent successfully",
        ownerEmailId: ownerEmailData.id,
        userEmailId: userEmailData.id,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
        success: false,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});