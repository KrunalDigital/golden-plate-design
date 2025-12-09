import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ChefHat, Sparkles, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-restaurant.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';

const featuredDishes = [
  { name: 'Wagyu Ribeye', image: dish1, category: 'Main Course' },
  { name: 'Seared Scallops', image: dish2, category: 'Starter' },
  { name: 'Chocolate Soufflé', image: dish3, category: 'Dessert' },
];

const highlights = [
  {
    icon: Sparkles,
    title: 'Quality Ingredients',
    description: 'Sourced from the finest local and international purveyors',
  },
  {
    icon: Wine,
    title: 'Luxury Ambience',
    description: 'An elegant setting designed for unforgettable moments',
  },
  {
    icon: ChefHat,
    title: 'Master Chef',
    description: 'Award-winning culinary expertise in every dish',
  },
];

export default function Index() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 container-custom text-center py-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Fine Dining Experience
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Where Every Dish <br />
              <span className="text-gradient-gold">Tells a Story</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Indulge in an exquisite culinary journey crafted by our master chef. 
              Experience the perfect harmony of flavors, artistry, and ambience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Link to="/reservation">
                <Button variant="gold" size="xl">
                  Reserve Your Table
                </Button>
              </Link>
              <Link to="/menu">
                <Button variant="hero-outline" size="xl">
                  Explore Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Us</span>
          </a>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Location</span>
          </a>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Culinary Excellence
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Chef's Specials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                    {dish.category}
                  </p>
                  <h3 className="text-2xl font-display font-semibold text-foreground">
                    {dish.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="gold-outline" size="lg">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Special */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Today's Special
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                A5 Wagyu Ribeye
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the pinnacle of beef perfection with our A5 Japanese Wagyu, 
                delicately seared and served with roasted bone marrow, seasonal vegetables, 
                and a rich red wine reduction. A masterpiece crafted for the discerning palate.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-4xl font-display font-bold text-primary">$95</span>
                <span className="text-muted-foreground">per serving</span>
              </div>
              <Link to="/reservation">
                <Button variant="gold" size="lg">
                  Reserve to Experience
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={dish1}
                  alt="Today's Special - A5 Wagyu Ribeye"
                  className="rounded-lg shadow-elegant w-full aspect-square object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display font-semibold">
                  Chef's Choice
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready for an Unforgettable Evening?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join us for a culinary experience that will tantalize your senses and create lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reservation">
              <Button variant="gold" size="xl">
                Make a Reservation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
