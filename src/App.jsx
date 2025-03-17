import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { FeaturedStores } from '@/components/FeaturedStores';
import { HowItWorks } from '@/components/HowItWorks';
import { PopularItems } from '@/components/PopularItems';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <CartProvider>
      <div className="min-h-screen w-screen bg-primary text-white">
      {/* <header className="sticky top-0 z-10 bg-primary2 shadow-sm">
            <div className="container py-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-inherit text-white">Rootz</h1>
            </div>
          </header> */}
          
          <main className="w-full">
          <ScrollProgress className="top-[65px]" />
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Hero />
            <div className="w-full">
              <Categories />
              <div className="w-full px-4 md:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto">
                <FeaturedStores />
                <HowItWorks />
                <PopularItems />
              </div>
            </div>
          </main>
          <Footer />
          <Toaster />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;