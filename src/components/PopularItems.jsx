import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export function PopularItems() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('all');
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  
  const products = [
    {
      id: 1,
      name: "Organic Bananas",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=300&auto=format&fit=crop",
      category: "fruits",
      unit: "bunch",
      isNew: true
    },
    {
      id: 2,
      name: "Fresh Milk",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=300&auto=format&fit=crop",
      category: "dairy",
      unit: "1 liter"
    },
    {
      id: 3,
      name: "Whole Wheat Bread",
      price: 3.29,
      originalPrice: 3.99,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop",
      category: "bakery",
      unit: "loaf",
      isSale: true
    },
    {
      id: 4,
      name: "Avocado",
      price: 1.49,
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=300&auto=format&fit=crop",
      category: "fruits",
      unit: "each"
    },
    {
      id: 5,
      name: "Free-Range Eggs",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=300&auto=format&fit=crop",
      category: "dairy",
      unit: "dozen"
    },
    {
      id: 6,
      name: "Frozen Pizza",
      price: 5.99,
      originalPrice: 7.49,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&auto=format&fit=crop",
      category: "frozen",
      unit: "each",
      isSale: true
    },
    {
      id: 7,
      name: "Potato Chips",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=300&auto=format&fit=crop",
      category: "snacks",
      unit: "200g"
    },
    {
      id: 8,
      name: "Sparkling Water",
      price: 1.29,
      image: "https://images.unsplash.com/photo-1606168094336-48f555bb58f8?q=80&w=300&auto=format&fit=crop",
      category: "beverages",
      unit: "500ml",
      isNew: true
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'fruits', name: 'Fruits & Vegetables' },
    { id: 'dairy', name: 'Dairy & Eggs' },
    { id: 'bakery', name: 'Bakery' },
    { id: 'frozen', name: 'Frozen Foods' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'beverages', name: 'Beverages' }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  const handleQuantityChange = (id, change) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const newQuantity = Math.max(0, current + change);
      
      return {
        ...prev,
        [id]: newQuantity
      };
    });
  };
  
  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
    
    // Show toast
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    });
  };

  return (
    <section className="py-6">
      <h2 className="text-2xl font-semibold mb-6">Popular Items</h2>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
              <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.unit}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {quantities[product.id] ? (
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-md">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-none"
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{quantities[product.id]}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-none"
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button 
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default PopularItems;