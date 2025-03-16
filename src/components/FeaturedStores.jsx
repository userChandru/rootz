import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function FeaturedStores() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const stores = [
    {
      id: 1,
      name: "Fresh Market",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
      rating: 4.8,
      deliveryTime: "15-30 min",
      distance: "1.2 km",
      tags: ["Organic", "Local"]
    },
    {
      id: 2,
      name: "City Grocers",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&auto=format&fit=crop",
      rating: 4.6,
      deliveryTime: "20-35 min",
      distance: "1.8 km",
      tags: ["Wholesale", "Imported"]
    },
    {
      id: 3,
      name: "Green Basket",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=600&auto=format&fit=crop",
      rating: 4.9,
      deliveryTime: "10-25 min",
      distance: "0.8 km",
      tags: ["Organic", "Vegan"]
    },
    {
      id: 4,
      name: "Metro Mart",
      image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=600&auto=format&fit=crop",
      rating: 4.5,
      deliveryTime: "25-40 min",
      distance: "2.3 km",
      tags: ["Bulk", "Discount"]
    },
    {
      id: 5,
      name: "Nature's Bounty",
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?q=80&w=600&auto=format&fit=crop",
      rating: 4.7,
      deliveryTime: "15-30 min",
      distance: "1.5 km",
      tags: ["Organic", "Farm Fresh"]
    },
  ];
  
  const visibleStores = 3;
  const maxIndex = Math.max(0, stores.length - visibleStores);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Stores</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="hidden md:flex hover:bg-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <ChevronLeft className="h-4 w-4 text-primary" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="hidden md:flex hover:bg-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <ChevronRight className="h-4 w-4 text-primary" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.slice(currentIndex, currentIndex + visibleStores).map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={store.image} 
                    alt={store.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    {store.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      <span>{store.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{store.deliveryTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{store.distance}</span>
                    </div>
                  </div>
                  <Button className="w-full">Shop Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 gap-1 md:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-primary" : "bg-primary/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}