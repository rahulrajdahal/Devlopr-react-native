import { ImageSourcePropType } from "react-native";
import { images } from "../constants";

export type Product = {
  _id: number;
  name: string;
  image: ImageSourcePropType;
  desc: string;
  price: number;
  bullets: string[];
};
export type CartItem = Omit<Product, "desc" | "bullets"> & { quantity: number };

export default [
  {
    _id: 1,
    name: "Astra Chair",
    image: images.gaming_chair,
    price: 79.99,
    desc: "The comfy Astra Chair by Ace Electronics is the best ergonomic chair to suit your needs. The chair is surrounded by a pure leather finish, the chair boasts a lot of features.",
    bullets: [
      "Ergonomic Design",
      "Pure Leather Finish",
      "Designed for Programmers & Gamers",
    ],
  },
  {
    _id: 2,
    name: "Github Shirt",
    image: images.github_shirt,
    price: 9.99,
    desc: "The comfy Astra Chair by Ace Electronics is the best ergonomic chair to suit your needs. The chair is surrounded by a pure leather finish, the chair boasts a lot of features.",
    bullets: [
      "Ergonomic Design",
      "Pure Leather Finish",
      "Designed for Programmers & Gamers",
    ],
  },
  {
    _id: 3,
    name: "Coffee Mug",
    image: images.coffee_mug,
    price: 2.99,
    desc: "The comfy Astra Chair by Ace Electronics is the best ergonomic chair to suit your needs. The chair is surrounded by a pure leather finish, the chair boasts a lot of features.",
    bullets: [
      "Ergonomic Design",
      "Pure Leather Finish",
      "Designed for Programmers & Gamers",
    ],
  },
  {
    _id: 4,
    name: "Octocat Figurine",
    image: images.ocotocat_figurine,
    price: 6.45,
    desc: "The comfy Astra Chair by Ace Electronics is the best ergonomic chair to suit your needs. The chair is surrounded by a pure leather finish, the chair boasts a lot of features.",
    bullets: [
      "Ergonomic Design",
      "Pure Leather Finish",
      "Designed for Programmers & Gamers",
    ],
  },
];
