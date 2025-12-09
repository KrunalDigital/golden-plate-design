export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Alexandra Mitchell',
    rating: 5,
    comment: 'An absolutely extraordinary dining experience. The Wagyu was cooked to perfection, and the ambience transported us to another world. Every dish was a masterpiece.',
    date: '2024-11-15',
  },
  {
    id: '2',
    name: 'James Crawford',
    rating: 5,
    comment: 'Celebrated our anniversary here and it exceeded all expectations. The attention to detail, from presentation to service, was impeccable. The truffle arancini are divine.',
    date: '2024-11-10',
  },
  {
    id: '3',
    name: 'Sophia Chen',
    rating: 5,
    comment: 'Finally, a restaurant that lives up to its reputation. The lobster thermidor was the best I have ever had. Will definitely be returning for the chocolate soufflé.',
    date: '2024-11-08',
  },
  {
    id: '4',
    name: 'Michael Reynolds',
    rating: 4,
    comment: 'Outstanding food and elegant atmosphere. The duck confit melted in my mouth. Only wish the wine list had more options, but otherwise a fantastic evening.',
    date: '2024-10-28',
  },
  {
    id: '5',
    name: 'Isabella Romano',
    rating: 5,
    comment: 'Pure culinary artistry. The chef tasting menu took us on an unforgettable journey. Worth every penny for a special occasion.',
    date: '2024-10-20',
  },
  {
    id: '6',
    name: 'David Thompson',
    rating: 5,
    comment: 'From the moment we walked in, we knew this would be special. The gold martini is as stunning as it is delicious. A must-visit.',
    date: '2024-10-15',
  },
];

export const ratings = {
  google: 4.9,
  zomato: 4.8,
  tripadvisor: 4.9,
};
