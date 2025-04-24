export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  dietaryLabels: string[];
  imageUrl: string;
}

export interface UpcomingTreat {
  id: string;
  date: Date;
  name: string;
  description: string;
}

export const weeklyMenu: MenuItem[] = [
  {
    id: "menu-item-1",
    name: "Chocolate Chip Cookies",
    description:
      "Our classic, homemade chocolate chip cookies are a perfect blend of buttery, soft dough and rich, melted chocolate chips. Each bite delivers a comforting taste of home.",
    price: 12,
    dietaryLabels: [],
    imageUrl:
      "https://images.unsplash.com/photo-1580975337404-7687e41a51e8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "menu-item-2",
    name: "Vegan Brownies",
    description:
      "Indulge in our decadent vegan brownies, crafted with rich dark chocolate and plant-based ingredients. These brownies are fudgy, moist, and packed with intense chocolate flavor, proving that vegan treats can be incredibly delicious.",
    price: 15,
    dietaryLabels: ["Vegan"],
    imageUrl:
      "https://images.unsplash.com/photo-1573913524315-e8a058a62d62?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "menu-item-3",
    name: "Gluten-Free Muffins",
    description:
      "Enjoy our moist and flavorful gluten-free muffins, available in a variety of flavors like blueberry, banana nut, and chocolate chip. Perfect for a quick breakfast or a guilt-free snack.",
    price: 18,
    dietaryLabels: ["GF"],
    imageUrl:
      "https://images.unsplash.com/photo-1594627858655-ff8643a1b207?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "menu-item-4",
    name: "GF & Vegan Banana Bread",
    description:
      "Savor every bite of our exceptional gluten-free and vegan banana bread. Moist, naturally sweet, and loaded with banana flavor, this bread is a perfect treat any time of day.",
    price: 20,
    dietaryLabels: ["GF", "Vegan"],
    imageUrl:
      "https://images.unsplash.com/photo-1582728545089-1eb9d6b70445?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "menu-item-5",
    name: "Vegan Carrot Cake",
    description: "This vegan carrot cake is incredibly moist and rich, filled with warming spices and topped with a creamy, plant-based frosting.",
    price: 22,
    dietaryLabels: ["Vegan"],
    imageUrl:
      "https://images.unsplash.com/photo-1589592578409-d21d99038931?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const upcomingTreats: UpcomingTreat[] = [
  {
    id: "upcoming-treat-1",
    date: new Date(new Date().setDate(new Date().getDate() + 1)), // Tomorrow
    name: "Holiday Special Cake",
    description:
      "A special cake for the holidays, filled with festive flavors. This limited-time treat is a perfect centerpiece for any celebration, offering a taste of holiday cheer in every slice.",
  },
  {
    id: "upcoming-treat-2",
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    name: "Summer Berry Tart",
    description:
      "A refreshing tart filled with seasonal berries. This bright and delicious tart is perfect for warm days, bursting with the fresh flavors of summer.",
  },
  {
    id: "upcoming-treat-3",
    date: new Date(new Date().setDate(new Date().getDate() + 3)),
    name: "Mini Chocolate Bundt Cakes",
    description: "Individual-sized chocolate bundt cakes, perfect for a personal indulgence or to share. Rich, moist, and topped with a smooth chocolate glaze.",
  },
  {
    id: "upcoming-treat-4",
    date: new Date(new Date().setDate(new Date().getDate() + 4)),
    name: "Vanilla Bean Macarons",
    description: "Delicate vanilla bean macarons with a smooth buttercream filling. Light, airy, and subtly sweet, these macarons are an elegant treat for any occasion.",
  },
];