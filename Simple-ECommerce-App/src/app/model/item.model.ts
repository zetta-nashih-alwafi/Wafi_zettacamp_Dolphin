import { Detail } from "./detail.model";

export interface Product {
  name: String;
  price: String;
  description: String;
  pictureUrl: string;
  detail: Detail
}
