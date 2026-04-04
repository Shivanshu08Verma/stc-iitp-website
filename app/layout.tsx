import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 

// 1. We just need the basic font initialization now
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 2. Apply the font directly to the body using .className */}
      <body className={`${spaceGrotesk.className} flex min-h-screen flex-col bg-[#1A2238] text-white`}>
        
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}