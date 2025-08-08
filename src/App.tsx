import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Rendezvous from "./pages/Rendezvous";
import ResearchClub from "./pages/rendezvous/ResearchClub";
import TechnologyClub from "./pages/rendezvous/TechnologyClub";
import HindiClub from "./pages/rendezvous/HindiClub";
import TheatreClub from "./pages/rendezvous/TheatreClub";
import DebateClub from "./pages/rendezvous/DebateClub";
import FinancialLiteracyClub from "./pages/rendezvous/FinancialLiteracyClub";
import ArtCraftClub from "./pages/rendezvous/ArtCraftClub";
import CommunityServiceDepartment from "./pages/rendezvous/CommunityServiceDepartment";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/rendezvous" element={<Rendezvous />} />
                <Route path="/rendezvous/research" element={<ResearchClub />} />
                <Route path="/rendezvous/tech" element={<TechnologyClub />} />
                <Route path="/rendezvous/hindi" element={<HindiClub />} />
                <Route path="/rendezvous/theatre" element={<TheatreClub />} />
                <Route path="/rendezvous/debate" element={<DebateClub />} />
                <Route path="/rendezvous/financial" element={<FinancialLiteracyClub />} />
                <Route path="/rendezvous/art" element={<ArtCraftClub />} />
                <Route path="/rendezvous/community" element={<CommunityServiceDepartment />} />
                <Route path="/auth" element={<Auth />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
