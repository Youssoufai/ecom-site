import './globals.css';


import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Your App',
  description: 'E-commerce App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <CartProvider>
          <AuthProvider>

            <Navbar />
            {children}
            <Footer />

          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}
