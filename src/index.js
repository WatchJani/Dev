import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/global.css"
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('app'));

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
