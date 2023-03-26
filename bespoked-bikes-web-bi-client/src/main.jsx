import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "./context/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "../public/css/tailwind.css";
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <App />
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
