import "./index.css";

import { MILLISECONDS_IN_SECOND, STALE_TIME_SECONDS } from "./constants.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { ThemeProvider } from "use-theme-hook";
import { createRoot } from "react-dom/client";
import { store } from "./store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MILLISECONDS_IN_SECOND * STALE_TIME_SECONDS
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider allowSystemTheme={false}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
