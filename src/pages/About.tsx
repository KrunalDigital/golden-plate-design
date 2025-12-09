import { ChefHat, Award, Star, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-restaurant.jpg';

const awards = [
  { year: '2024', title: 'Michelin Star', organization: 'Michelin Guide' },
  { year: '2023', title: 'Best Fine Dining', organization: 'City Food Awards' },
  { year: '2023', title: "Chef's Table Award", organization: 'Culinary Institute' },
  { year: '2022', title: 'Excellence in Service', organization: 'Hospitality Association' },
];

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Every dish is crafted with love and dedication to the culinary arts.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We pursue perfection in every detail, from ingredients to presentation.',
  },
  {
    icon: Award,
    title: 'Tradition',
    description: 'Honoring classic techniques while embracing modern innovation.',
  },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              A Legacy of Culinary Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2010, Aurum has been redefining fine dining in the heart of New York City. 
              Our name, inspired by the Latin word for gold, reflects our commitment to delivering 
              the golden standard in gastronomy.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                The Art of Fine Dining
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Aurum was born from a simple yet profound belief: that dining should be 
                  a transformative experience. Our founder, Chef Marcus Laurent, envisioned 
                  a space where culinary artistry meets warm hospitality.
                </p>
                <p>
                  Every evening at Aurum is a carefully orchestrated symphony of flavors, 
                  textures, and presentations. We source the finest ingredients from 
                  around the globe, working directly with farmers, fishermen, and artisans 
                  who share our passion for quality.
                </p>
                <p>
                  Our multi-cuisine approach allows us to draw inspiration from the world's 
                  greatest culinary traditions, creating dishes that are both familiar and 
                  surprising, comforting and innovative.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={heroImage}
                  alt="Aurum Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-lg max-w-xs">
                <p className="text-4xl font-display font-bold mb-2">14+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <ChefHat className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-4">
                Meet Chef Marcus Laurent
              </h2>
              <p className="text-primary font-medium mb-6">Executive Chef & Founder</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 25 years of culinary experience across three continents, 
                  Chef Marcus Laurent brings a unique perspective to every dish. 
                  Trained at Le Cordon Bleu Paris and mentored by legendary chefs, 
                  he has crafted his own distinctive style.
                </p>
                <p>
                  His philosophy is simple: respect the ingredient, honor the tradition, 
                  and always surprise the palate. This approach has earned Aurum 
                  numerous accolades and a devoted following of food enthusiasts.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-lg bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <ChefHat className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Chef Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Awards & Accolades
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
              >
                <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-sm text-primary font-medium mb-2">{award.year}</p>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
