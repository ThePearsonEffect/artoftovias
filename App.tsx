import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import { ArtByToviasHome } from "./src/pages/ArtByTovias/ArtByToviasHome";
import { ArtByToviasBooks } from "./src/pages/ArtByTovias/ArtByToviasBooks";
import { LankyBoisHome } from "./src/pages/LankyBois/LankyBoisHome";
import { LankyBoisShop } from "./src/pages/LankyBois/LankyBoisShop";
import { TribeLifeHome } from "./src/pages/TribeLife/TribeLifeHome";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            
            {/* Art By Tovias Routes */}
            <Route path="/art-by-tovias" element={<ArtByToviasHome />} />
            <Route path="/art-by-tovias/books" element={<ArtByToviasBooks />} />
            
            {/* Lanky Bois Routes */}
            <Route path="/lanky-bois" element={<LankyBoisHome />} />
            <Route path="/lanky-bois/shop" element={<LankyBoisShop />} />
            
            {/* Tribe Life Routes */}
            <Route path="/tribe-life" element={<TribeLifeHome />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
