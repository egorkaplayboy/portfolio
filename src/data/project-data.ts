import PizzaShop from "/public/assets/pizza-shop.png";
import ClothesShop from "/public/assets/clothes-shop.png";
import { IProjects } from "@/types/project-data.type";

export const projectsData: IProjects[] = [
  {
    id: 1,
    title: "Pizza shop",
    img: PizzaShop,
    deployUrl:
      "https://deploy-pizzashop.vercel.app/?sortProperty=rating&categoryId=0",
  },
  {
    id: 2,
    title: "Clothes shop",
    img: ClothesShop,
    deployUrl: "https://clothes-shop-plum.vercel.app/",
  },
];
