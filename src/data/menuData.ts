export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  isVeg: boolean;
  isChefSpecial?: boolean;
  image?: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls infused with black truffle, served with saffron aioli',
    price: 18,
    category: 'starters',
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: '2',
    name: 'Tuna Tartare',
    description: 'Fresh yellowfin tuna with avocado, sesame, and citrus ponzu',
    price: 24,
    category: 'starters',
    isVeg: false,
  },
  {
    id: '3',
    name: 'Burrata Caprese',
    description: 'Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic',
    price: 19,
    category: 'starters',
    isVeg: true,
  },
  {
    id: '4',
    name: 'Seared Scallops',
    description: 'Pan-seared scallops with cauliflower purée and golden raisin reduction',
    price: 28,
    category: 'starters',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: '5',
    name: 'Wild Mushroom Soup',
    description: 'Velvety forest mushroom velouté with truffle foam',
    price: 16,
    category: 'starters',
    isVeg: true,
  },
  // Mains
  {
    id: '6',
    name: 'Wagyu Ribeye',
    description: 'A5 Japanese Wagyu with roasted bone marrow and red wine jus',
    price: 95,
    category: 'mains',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: '7',
    name: 'Lobster Thermidor',
    description: 'Whole Maine lobster gratinéed with cognac cream and gruyère',
    price: 78,
    category: 'mains',
    isVeg: false,
  },
  {
    id: '8',
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg with cherry gastrique and pomme purée',
    price: 48,
    category: 'mains',
    isVeg: false,
  },
  {
    id: '9',
    name: 'Risotto Primavera',
    description: 'Seasonal vegetable risotto with mascarpone and parmesan crisp',
    price: 36,
    category: 'mains',
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: '10',
    name: 'Pan-Roasted Halibut',
    description: 'Wild halibut with asparagus, morels, and champagne beurre blanc',
    price: 52,
    category: 'mains',
    isVeg: false,
  },
  {
    id: '11',
    name: 'Stuffed Bell Peppers',
    description: 'Quinoa and vegetable stuffed peppers with romesco sauce',
    price: 32,
    category: 'mains',
    isVeg: true,
  },
  // Desserts
  {
    id: '12',
    name: 'Valrhona Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla bean ice cream',
    price: 18,
    category: 'desserts',
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: '13',
    name: 'Crème Brûlée',
    description: 'Classic vanilla custard with caramelized sugar crust',
    price: 14,
    category: 'desserts',
    isVeg: true,
  },
  {
    id: '14',
    name: 'Tiramisu',
    description: 'Traditional Italian mascarpone layered with espresso-soaked ladyfingers',
    price: 15,
    category: 'desserts',
    isVeg: true,
  },
  {
    id: '15',
    name: 'Seasonal Fruit Tart',
    description: 'Buttery tart shell filled with pastry cream and fresh fruits',
    price: 16,
    category: 'desserts',
    isVeg: true,
  },
  // Drinks
  {
    id: '16',
    name: 'Signature Gold Martini',
    description: 'Premium vodka with elderflower and edible gold flakes',
    price: 22,
    category: 'drinks',
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: '17',
    name: 'Smoky Old Fashioned',
    description: 'Bourbon with applewood smoke, bitters, and orange',
    price: 18,
    category: 'drinks',
    isVeg: true,
  },
  {
    id: '18',
    name: 'Champagne Cocktail',
    description: 'Dom Pérignon with cognac and angostura bitters',
    price: 28,
    category: 'drinks',
    isVeg: true,
  },
  {
    id: '19',
    name: 'Virgin Passion Sunrise',
    description: 'Fresh passion fruit, mango, and sparkling water',
    price: 12,
    category: 'drinks',
    isVeg: true,
  },
];

export const categories = [
  { id: 'starters', name: 'Starters', description: 'Begin your journey' },
  { id: 'mains', name: 'Main Courses', description: 'The heart of dining' },
  { id: 'desserts', name: 'Desserts', description: 'Sweet finale' },
  { id: 'drinks', name: 'Signature Drinks', description: 'Crafted cocktails' },
] as const;
