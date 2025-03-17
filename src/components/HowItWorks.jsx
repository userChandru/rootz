import { motion } from 'framer-motion';
import { ShoppingBag, Truck, CreditCard } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingBag className="h-16 w-16" />,
      title: "Choose Your Items",
      description: "Browse through a wide selection of groceries from your favorite local stores."
    },
    {
      icon: <CreditCard className="h-16 w-16" />,
      title: "Place Your Order",
      description: "Add items to your cart, select delivery time, and complete your purchase securely."
    },
    {
      icon: <Truck className="h-16 w-16" />,
      title: "Get Fast Delivery",
      description: "Our delivery partners will bring your groceries right to your doorstep in minutes."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Rootz Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get your groceries delivered in three simple steps. Fast, reliable, and convenient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-[1.2] blur-xl" />
                <div className="relative bg-primary/10 p-6 rounded-full text-white hover:scale-150 transition-all duration-200 ease-in-out">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20" style={{ width: 'calc(100% - 4rem)' }} />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}