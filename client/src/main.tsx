import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import "./index.css";
import "./i18n/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Home } from "./pages/Home";
import { Stories } from "./pages/Stories";
import { Story } from "./pages/Story";
import { Members } from "./pages/Members";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { Cookie } from "./pages/CookieNotice";
import { Accessibility } from "./pages/Accessibility";


function Router() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [location, setLocation] = useLocation();

  React.useEffect(() => {
    // Handle initial redirect
    if (location === '/') {
      setLocation(`/${currentLanguage}`);
    }
  }, [location, currentLanguage, setLocation]);

  return (
    <Switch>
      <Route path="/:lang/stories/:storyId" component={Story} />
      <Route path="/:lang/stories" component={Stories} />
      <Route path="/:lang/members" component={Members} />
      <Route path="/:lang/about" component={About} />
      <Route path="/:lang/contact" component={Contact} />
      <Route path="/:lang/terms" component={Terms} />
      <Route path="/:lang/accessibility" component={Accessibility} />
      <Route path="/:lang/privacy" component={Privacy} />
      <Route path="/:lang/cookienotice" component={Cookie} />
      <Route path="/:lang" component={Home} />
      <Route path="/">
        <div>Redirecting...</div>
      </Route>
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">404 Page Not Found</h1>
        </div>
      </Route>
    </Switch>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="pet-fraud-theme">
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);