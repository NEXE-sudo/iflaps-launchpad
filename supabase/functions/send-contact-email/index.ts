
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import express, { Request, Response } from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

app.options("/", (req, res) => {
  res.sendStatus(204);
});

app.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message }: ContactEmailRequest = req.body;

    console.log("Processing contact form submission:", { name, email, subject });

    // Send email to the business owner
    const ownerEmailResponse = await resend.emails.send({
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
    });

    console.log("Owner email sent successfully:", ownerEmailResponse);

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
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
            <a href="${process.env.SUPABASE_URL || 'https://your-site.com'}" 
               style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Visit Our Website
            </a>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
            Best regards,<br>
            <strong>The iFLAPS Education Team</strong><br>
            Email: support@iflaps.education<br>
            Website: www.iflaps.education
          </p>
        </div>
      `,
    });

    console.log("User confirmation email sent successfully:", userEmailResponse);

    res.status(200).json({
      success: true,
      message: "Emails sent successfully",
      ownerEmailId: ownerEmailResponse.data?.id,
      userEmailId: userEmailResponse.data?.id
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    res.status(500).json({
      error: error.message,
      success: false
    });
  }
});

// If running standalone, start the server
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}