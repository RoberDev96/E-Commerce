export interface ProductsInterface {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
  rating:      Rating;
}

export type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export interface Rating {
  rate:  number;
  count: number;
}
