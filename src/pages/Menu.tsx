import { useState } from 'react';
import { Plus, Leaf, Drumstick, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems, categories, type MenuItem } from '@/data/menuData';
import { useToast } from '@/hooks/use-toast';

type CategoryFilter = 'all' | MenuItem['category'];
type DietFilter = 'all' | 'veg' | 'non-veg';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [dietFilter, setDietFilter] = useState<DietFilter>('all');
  const { toast } = useToast();

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const dietMatch =
      dietFilter === 'all' ||
      (dietFilter === 'veg' && item.isVeg) ||
      (dietFilter === 'non-veg' && !item.isVeg);
    return categoryMatch && dietMatch;
  });

  const handleAddToOrder = (item: MenuItem) => {
    toast({
      title: 'Added to Order',
      description: `${item.name} has been added to your order.`,
    });
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-charcoal">
        <div className="container-custom text-center">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Offerings
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            The Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each dish is a masterpiece, crafted with precision and passion using the finest ingredients.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Diet Filters */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  dietFilter === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  dietFilter === 'veg'
                    ? 'bg-green-600 text-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                <Leaf className="w-4 h-4" />
                Veg
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  dietFilter === 'non-veg'
                    ? 'bg-red-600 text-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                <Drumstick className="w-4 h-4" />
                Non-Veg
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No items match your current filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {item.isVeg ? (
                            <span className="w-4 h-4 border border-green-500 flex items-center justify-center">
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                            </span>
                          ) : (
                            <span className="w-4 h-4 border border-red-500 flex items-center justify-center">
                              <span className="w-2 h-2 rounded-full bg-red-500" />
                            </span>
                          )}
                          {item.isChefSpecial && (
                            <span className="flex items-center gap-1 text-primary text-xs font-medium">
                              <Star className="w-3 h-3 fill-current" />
                              Chef's Special
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-display font-bold text-primary">
                          ${item.price}
                        </span>
                        <Button
                          variant="gold-outline"
                          size="sm"
                          onClick={() => handleAddToOrder(item)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Plus className="w-4 h-4" />
                          Add to Order
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
