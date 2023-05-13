import Peon from "../../assets/peon.svg";
import Alfil from "../../assets/alfil.svg";
import Torre from "../../assets/torre.svg";
import Caballo from "../../assets/caballo.svg";
import Dama from "../../assets/dama.svg";
import Rey from "../../assets/rey.svg";

export const LearnData = [
  {
    id: 1,
    title: "El peon",
    description: "Solo se mueve hacia adelante y come en diagonal",
    image: Peon,
  },
  {
    id: 2,
    title: "El Alfil",
    description: "Se mueve en diagonal",
    image: Alfil,
  },
  {
    id: 3,
    title: "La Torre",
    description: "Se mueve todos los espacios libres en los ejes X y Y",
    image: Torre,
  },
  {
    id: 4,
    title: "El Caballo",
    description: "Se mueve en forma de L",
    image: Caballo,
  },
  {
    id: 5,
    title: "La Dama",
    description: "Se mueve todos los espacios libres ",
    image: Dama,
  },
  {
    id: 6,
    title: "Rey",
    description: "Se mueve de uno en uno",
    image: Rey,
  },
];
