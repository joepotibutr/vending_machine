import { FaWineBottle } from "react-icons/fa";
import { PiBeerBottleBold } from "react-icons/pi";
import { PiBeerBottle } from "react-icons/pi";
import { PiBeerBottleDuotone } from "react-icons/pi";
import { PiBeerBottleFill } from "react-icons/pi";
import { PiOrangeDuotone } from "react-icons/pi";
import { GiShinyApple } from "react-icons/gi";
import { GiWaterFlask } from "react-icons/gi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { FaJarWheat } from "react-icons/fa6";
import { GiCookie } from "react-icons/gi";
import { IconType } from "react-icons";


const rndInt = () => Math.floor(Math.random() * 3) + 1

interface IProduct {
    id: string;
    name: string;
    price: number;
    quantity: number;
    icon: IconType;
}

const products = {
    11: {
      id: "11",
      name: "Beer 01",
      price: 12.23,
      quantity: rndInt(),
      icon: PiBeerBottleBold,
    },
    12: {
      id: "12",
      name: "Wine 02",
      price: 12.23,
      quantity: rndInt(),
      icon: FaWineBottle,
    },
    13: {
      id: "13",
      name: "Beer 02",
      price: 12.23,
      quantity: rndInt(),
      icon: PiBeerBottle,
    },
    14: {
      id: "14",
      name: "Beer 03",
      price: 12.23,
      quantity: rndInt(),
      icon: PiBeerBottleFill,
    },
    15: {
      id: "15",
      name: "Orange 01",
      price: 12.23,
      quantity: rndInt(),
      icon: PiOrangeDuotone,
    },
    16: {
      id: "16",
      name: "Water 01",
      price: 12.23,
      quantity: rndInt(),
      icon: GiWaterFlask,
    },
    17: {
      id: "17",
      name: "Food 01",
      price: 12.23,
      quantity: rndInt(),
      icon: MdOutlineEmojiFoodBeverage,
    },
    18: {
      id: "18",
      name: "Beer 04",
      price: 12.23,
      quantity: rndInt(),
      icon: PiBeerBottleDuotone,
    },
    19: {
      id: "19",
      name: "Cookie 01",
      price: 12.23,
      quantity: rndInt(),
      icon: GiCookie,
    },
    20: {
      id: "20",
      name: "Apple 01",
      price: 12.23,
      quantity: rndInt(),
      icon: GiShinyApple,
    },
    21: {
      id: "21",
      name: "Oat Milk 01",
      price: 12.23,
      quantity: rndInt(),
      icon: FaJarWheat,
    },
}

  export const getProducts = (): Array<IProduct> => 
    Object.values(products).reduce((flatList, currentProduct) => {
      const cloned = new Array(currentProduct.quantity).fill(currentProduct)
      return [...flatList, ...cloned]
    }, [])