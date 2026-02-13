import '@/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App.jsx';
import Footer from '@/components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex min-h-screen flex-col'>
      <App />
      <Footer />
    </div>
  </StrictMode>
);
