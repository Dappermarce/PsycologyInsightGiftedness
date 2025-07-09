import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import InteractiveBrainMap from "@/components/interactive-brain-map"; // Usa esta si el archivo está en /components
// o: import InteractiveBrainMap from "@/pages/interactive-brain-maps"; // si está en /pages

function Router() {
  return (
    <Switch>
      <Route path="/" component={InteractiveBrainMap} />
      <Route path="/2d" component={InteractiveBrainMap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
