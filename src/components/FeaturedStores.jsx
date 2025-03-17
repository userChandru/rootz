import React from "react";
import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stores = [
  {
    id: 1,
    name: "Fresh Market",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    deliveryTime: "15-30 min",
    distance: "1.2 km",
    tags: ["Organic", "Local"],
  },
  {
    id: 2,
    name: "City Groce",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    deliveryTime: "20-35 min",
    distance: "1.8 km",
    tags: ["Wholesale", "Imported"],
  },
  {
    id: 3,
    name: "Green Basket",
    image:
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    deliveryTime: "10-25 min",
    distance: "0.8 km",
    tags: ["Organic", "Vegan"],
  },
  {
    id: 4,
    name: "Metro Mart",
    image:
      "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=600&auto=format&fit=crop",
    rating: 4.5,
    deliveryTime: "25-40 min",
    distance: "2.3 km",
    tags: ["Bulk", "Discount"],
  },
  {
    id: 5,
    name: "Nature's Bounty",
    image:
      "https://images.unsplash.com/photo-1579113800032-c38bd7635818?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    deliveryTime: "15-30 min",
    distance: "1.5 km",
    tags: ["Organic", "Farm Fresh"],
  },
];

export function FeaturedStores() {
  return (
    <section className="py-12 w-full bg-muted/50">
      <div className="w-full px-0 sm:px-2">
        <div className="flex items-center justify-between mb-6 px-4">
          <h2 className="text-2xl font-bold">Featured Stores</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative px-4"
        >
          <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
            <CarouselPrevious className="h-16 w-8 md:h-16 md:w-10 bg-white/80 text-primary hover:text-primary/80 hover:border hover:border-primary hover:bg-white hover:scale-110 transition-all duration-300 ease-in-out shadow-md" />
          </div>
          <CarouselContent className="-ml-2 md:-ml-4">
            {stores.map((store) => (
              <CarouselItem
                key={store.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-1">
                        {store.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-background/80 backdrop-blur-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {store.name}
                      </h3>
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
                      <Button className="w-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out">
                        Shop Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
            <CarouselNext className="h-16 w-8 md:h-16 md:w-10 bg-white/80 text-primary hover:text-primary/80 hover:border hover:border-primary hover:bg-white hover:scale-110 transition-all duration-300 ease-in-out shadow-md" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
