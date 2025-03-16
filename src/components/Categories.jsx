import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight,
  Apple,
  Milk,
  Croissant,
  Beef,
  Snowflake,
  Popcorn,
  Coffee,
  Lamp  
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Dock and DockIcon components
const Dock = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "flex h-24 items-end justify-center gap-6 rounded-xl bg-background/80 px-8 pb-2 backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const DockIcon = ({ children, ...props }) => {
  return (
    <div
      className="group flex items-end justify-center transition-all duration-300 ease-in-out px-2"
      {...props}
    >
      <div className="scale-100 transition-all duration-300 ease-in-out group-hover:scale-150">
        {children}
      </div>
    </div>
  );
};

export function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const categories = [
    { id: 'fruits', name: 'Fruits & Vegetables', icon: Apple, color: 'bg-green-100 dark:bg-green-900/30' },
    { id: 'dairy', name: 'Dairy & Eggs', icon: Milk, color: 'bg-blue-100 dark:bg-blue-900/30' },
    { id: 'bakery', name: 'Bakery', icon: Croissant, color: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { id: 'meat', name: 'Meat & Seafood', icon: Beef, color: 'bg-red-100 dark:bg-red-900/30' },
    { id: 'frozen', name: 'Frozen Foods', icon: Snowflake, color: 'bg-cyan-100 dark:bg-cyan-900/30' },
    { id: 'snacks', name: 'Snacks', icon: Popcorn, color: 'bg-orange-100 dark:bg-orange-900/30' },
    { id: 'beverages', name: 'Beverages', icon: Coffee, color: 'bg-purple-100 dark:bg-purple-900/30' },
    { id: 'household', name: 'Household', icon: Lamp  , color: 'bg-gray-100 dark:bg-gray-800' },
  ];
  
  const scrollLeft = () => {
    const container = document.getElementById('categories-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    const container = document.getElementById('categories-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-12 bg-primary w-full">
      <div className="w-full px-4">
        <div className="flex items-center justify-between mb-6 px-8">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              className="hidden md:flex hover:bg-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <ChevronLeft className="h-4 w-4 text-primary" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              className="hidden md:flex hover:bg-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <ChevronRight className="h-4 w-4 text-primary" />
            </Button>
          </div>
        </div>
        
        <div 
          id="categories-container"
          className="flex overflow-x-auto scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <TooltipProvider delayDuration={100}>
            <Dock className="h-auto py-6 mx-auto bg-transparent justify-evenly">
              {categories.map((category) => (
                <DockIcon key={category.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
                        className={cn(
                          "flex flex-col items-center p-4 rounded-xl transition-all duration-300 min-w-[80px] h-[80px] justify-center",
                          category.color,
                          category.id === activeCategory ? "ring-2 ring-primary ring-offset-2" : ""
                        )}
                      >
                        <category.icon className="h-8 w-8 text-primary-foreground" strokeWidth={1.5} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      align="center"
                      className="bg-white/90 text-primary border-none px-4 py-2 font-medium rounded-lg shadow-lg backdrop-blur-sm"
                      sideOffset={5}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <p className="text-sm">{category.name}</p>
                        {/* <span className="text-xs text-white/70">Click to browse</span> */}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
            </Dock>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}