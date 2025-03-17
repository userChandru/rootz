import { useState, useEffect } from 'react';
import { ShinyButton } from './magicui/shiny-button';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import { motion } from 'framer-motion';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Fresh Groceries Delivered to Your Door",
      description: "Get fresh fruits, vegetables, and groceries delivered from local stores to your doorstep in minutes.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop",
      color: "from-green-500/20 to-transparent"
    },
    {
      title: "Save Time with Fast Delivery",
      description: "No more waiting in lines. Get your groceries delivered in under 30 minutes.",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1920&auto=format&fit=crop",
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Support Local Businesses",
      description: "Order from your favorite local stores and support your community.",
      image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=1920&auto=format&fit=crop",
      color: "from-orange-500/20 to-transparent"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
        </div>
      ))}
      
      <div className="w-full px-4 py-20 md:py-32 relative z-10 bg-gradient-to-r from-black/70 to-transparent">
        <div className="max-w-2xl ml-8 md:ml-16 lg:ml-24">
          <motion.h1 
            key={`title-${currentSlide}`}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          <motion.p 
            key={`desc-${currentSlide}`}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-lg drop-shadow-md text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            {slides[currentSlide].description}
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <InteractiveHoverButton size="lg" className="bg-primary rounded-md hover:bg-primary/90">
              Order Now
            </InteractiveHoverButton>
            <ShinyButton size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              Download App
            </ShinyButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}