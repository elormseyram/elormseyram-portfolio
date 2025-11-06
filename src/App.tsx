import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingGame from "./pages/LandingGame";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import BeyondCode from "./pages/BeyondCode";
import MilAutoDrive from "./components/projects/MilAutoDrive";
import EPunch from "./components/projects/EPunch";
import YFEssentials from "./components/projects/YFEssentials";
import Workbook from "./components/projects/Workbook";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<LandingGame />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/beyond-code" element={<BeyondCode />} />
          <Route path="/projects/milauto-drive" element={<MilAutoDrive />} />
          <Route path="/projects/epunch" element={<EPunch />} />
          <Route path="/projects/yf-essentials" element={<YFEssentials />} />
          <Route path="/projects/workbook" element={<Workbook />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
