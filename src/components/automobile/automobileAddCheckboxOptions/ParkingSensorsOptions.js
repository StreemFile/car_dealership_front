import {v4 as uuidv4} from 'uuid';
export const ParkingSensorsOptions = [
    {
        id: uuidv4().toString(),
        value: "Задні парктроніки",
        isChosen: false
    },
    {
        id: uuidv4().toString(),
        value: "Передні парктроніки",
        isChosen: false
    },
    {
        id: uuidv4().toString(),
        value: "Камера заднього виду",
        isChosen: false
    },
    {
        id: uuidv4().toString(),
        value: "Камера 360°",
        isChosen: false
    }
]