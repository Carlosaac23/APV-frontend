import '@/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import App from '@/App.jsx';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='flex min-h-screen flex-col'>
        <Toaster richColors={true} />
        <Header />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
