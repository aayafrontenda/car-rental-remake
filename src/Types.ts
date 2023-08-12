export interface Model {
  model: string;
  src: string;
  rentName: string;
  mark: "BMW" | "Mercedes" | "Audi" | "Volkswagen" | "Toyota" | "Honda";
  year: number;
  doors: string;
  AC: boolean;
  transmission: "Automatic" | "Manual";
  fuel: "Gasoline" | "Diesel" | "Hybrid";
  price: number;
  rating: number;
}

export interface CustomSelectProps {
  id: string;
  defaultValue: string;
  values: string[];
}

export interface Member {
  name: string;
  position: string;
  src: string;
  contact: {
    email: string;
    phone: string;
    telegram: string;
  };
}
