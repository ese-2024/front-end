import { IButton } from "../../../interfaces/IButton";

function Button({text, handleFunction} : IButton) {
    return(
        <button className="w-full h-10 bg-colorPopup rounded-md border-[1px] border-lineBorder font-chakra-regular text-hulk hover:bg-colorSide transition-all ease-in-out" onClick={handleFunction} >
            {text}
        </button>
    )
}

export default Button;