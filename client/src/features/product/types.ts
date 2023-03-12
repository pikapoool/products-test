export interface IProduct {
  _id: string;
  thumbnail: {
    small: string;
    medium: string;
    large: string;
  };
  title: string;
  description: string;
  color: string;
  price: number;
  rating: number;
}