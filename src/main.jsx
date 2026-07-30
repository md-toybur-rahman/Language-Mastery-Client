import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Structure/Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ScrollToTop from './Structure/Pages/ScrollToTop/ScrollToTop.jsx';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Elements stripe={stripePromise}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AuthProvider>
      </Elements>
    </HelmetProvider>
  </React.StrictMode>,
)
