import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Connect from "./pages/Connect.tsx";
import Lume from "./pages/Lume.tsx";

const queryClient = new QueryClient();
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

// Direktverbindung: auf lume.* wird die Lume-Seite als Startseite ausgeliefert
const isLumeHost =
  typeof window !== "undefined" &&
  /^lume\./i.test(window.location.hostname);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route path="/" element={isLumeHost ? <Lume /> : <Index />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/hi" element={<Connect />} />
          <Route path="/lume" element={<Lume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
