import React from 'react';
import { Switch, Route } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import "@fontsource/inter";

import HomePage from './pages/HomePage';
import PosterPage from './pages/PosterPage';
import PresentationPage from './pages/PresentationPage';
import NotFound from './pages/not-found';

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <title>ClearDrop — מערכת סינון מים אפורים</title>
          <meta name="description" content="ClearDrop - מערכת סינון מים אפורים זולה ובטוחה להשקיית צמחים. הופך טיפות מבוזבזות לצמיחה ירוקה." />
          <meta name="keywords" content="מים אפורים, סינון מים, השקיה, אקולוגי, מיחזור מים, ישראל" />
          <meta property="og:title" content="ClearDrop — מערכת סינון מים אפורים" />
          <meta property="og:description" content="מערכת סינון זולה ובטוחה שממחזרת מים אפורים להשקיה" />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Helmet>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/poster" component={PosterPage} />
          <Route path="/presentation" component={PresentationPage} />
          <Route component={NotFound} />
        </Switch>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
