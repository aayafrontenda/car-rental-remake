export interface Model {
  model: string;
  src: string;
  rentName: string;
  mark: string;
  year: number;
  doors: string;
  AC: boolean;
  transmission: "Automatic" | "Manual";
  fuel: "Gasoline" | "Diesel" | "Hybrid";
  price: number;
}
