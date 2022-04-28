import ascent from "../assets/images/ascent.webp";
import icebox from "../assets/images/icebox.webp";
import haven from "../assets/images/haven.webp";
import bind from "../assets/images/bind.webp";
import fracture from "../assets/images/fracture.webp";

export interface MapImage{
    name: string;
    image: any;
}

export const maps: MapImage[] = [
    {
        name: "Ascent",
        image: ascent
    },
    {
        name: "Icebox",
        image: icebox
    },
    {
        name: "Haven",
        image: haven
    },
    {
        name: "Bind",
        image: bind
    },
    {
        name: "Fracture",
        image: fracture
    },
]