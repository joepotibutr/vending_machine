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


const rndInt = () => Math.floor(Math.random() * 6) + 1

const products = [
    {
      id: "11",
      name: "Beer 01",
      price: 12.23,
      quantity: rndInt(),
      icon: PiBeerBottleBold,
    },
    {
      id: "12",
      name: "Wine 02",
      price: 12.23,
      quantity: rndInt(),
      icon: FaWineBottle,
    },
    {
      id: "13",
      name: "Beer 02",
      price: 12.23,
      quantity: rndInt(),
      icon: PiBeerBottle,
    },
    {
      id: "14",
      name: "Beer 03",
      price: 12.23,
      quantity: rndInt(),
      icon: PiBeerBottleFill,
    },
    {
      id: "15",
      name: "Orange 01",
      price: 12.23,
      quantity: rndInt(),
      icon: PiOrangeDuotone,
    },
    {
      id: "16",
      name: "Water 01",
      price: 12.23,
      quantity: rndInt(),
      icon: GiWaterFlask,
    },
    {
      id: "17",
      name: "Food 01",
      price: 12.23,
      quantity: rndInt(),
      icon: MdOutlineEmojiFoodBeverage,
    },
    {
      id: "18",
      name: "Beer 04",
      price: 12.23,
      quantity: rndInt(),
      icon: PiBeerBottleDuotone,
    },
    {
      id: "19",
      name: "Cookie 01",
      price: 12.23,
      quantity: rndInt(),
      icon: GiCookie,
    },
    {
      id: "20",
      name: "Apple 01",
      price: 12.23,
      quantity: rndInt(),
      icon: GiShinyApple,
    },
    {
      id: "21",
      name: "Oat Milk 01",
      price: 12.23,
      quantity: rndInt(),
      icon: FaJarWheat,
    },
  ];