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
    productCode: string
}

const products = [
     {
      id: "11",
      name: "Beer 01",
      price: 20,
      quantity: rndInt(),
      icon: PiBeerBottleBold,
    },
     {
      id: "12",
      name: "Wine 02",
      price: 100,
      quantity: rndInt(),
      icon: FaWineBottle,
    },
     {
      id: "13",
      name: "Beer 02",
      price: 25,
      quantity: rndInt(),
      icon: PiBeerBottle,
    },
     {
      id: "14",
      name: "Beer 03",
      price: 30,
      quantity: rndInt(),
      icon: PiBeerBottleFill,
    },
     {
      id: "15",
      name: "Orange 01",
      price: 5,
      quantity: rndInt(),
      icon: PiOrangeDuotone,
    },
     {
      id: "16",
      name: "Water 01",
      price: 5,
      quantity: rndInt(),
      icon: GiWaterFlask,
    },
     {
      id: "17",
      name: "Food 01",
      price: 15,
      quantity: rndInt(),
      icon: MdOutlineEmojiFoodBeverage,
    },
     {
      id: "18",
      name: "Beer 04",
      price: 25,
      quantity: rndInt(),
      icon: PiBeerBottleDuotone,
    },
     {
      id: "19",
      name: "Cookie 01",
      price: 5,
      quantity: rndInt(),
      icon: GiCookie,
    },
     {
      id: "20",
      name: "Apple 01",
      price: 12,
      quantity: rndInt(),
      icon: GiShinyApple,
    },
     {
      id: "21",
      name: "Oat Milk 01",
      price: 18,
      quantity: rndInt(),
      icon: FaJarWheat,
    },
  ]

  export const getProducts = (): Record<string, IProduct> => 
    products.reduce((acc, currentProduct) => {
      const cloned = [...new Array(currentProduct.quantity)].map((_, amountIndex) => {
        const generatedProductCode = (acc.length  + amountIndex)
        const normalizedProductCode = generatedProductCode < 9 ? `0${generatedProductCode}` : generatedProductCode.toString()

        return { ...currentProduct, productCode: normalizedProductCode  }
      })

      return [...acc, ...cloned ]
    }, [])
    .reduce((acc, currentProduct) => {
      acc[currentProduct.productCode] = currentProduct
      return acc
    }, {})