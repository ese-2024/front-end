import { IButtonHulk } from "../../../interfaces/IButton";

function ButtonHulk({text}: IButtonHulk) {
    return (
            <button className="bg-hulk px-8 h-11 w-full flex items-center justify-center rounded-md font-chakra-semibold text-lg text-colorBase hover:opacity-90">{text}</button>
    )
}

export default ButtonHulk;