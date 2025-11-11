import "./index.css";

import { MILLISECONDS_IN_SECOND, STALE_TIME_SECONDS } from "./constants.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MILLISECONDS_IN_SECOND * STALE_TIME_SECONDS
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
