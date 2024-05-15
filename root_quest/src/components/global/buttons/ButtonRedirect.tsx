import { Link } from "react-router-dom";
import { IButtonRedirect } from "../../../interfaces/IButton";

function ButtonRedirect({text, pathBack} : IButtonRedirect) {
    return(
        <Link to={pathBack} className="w-full">
            <button className="w-full h-10 bg-colorPopup rounded-md border-[1px] border-lineBorder font-chakra-regular text-hulk hover:bg-colorSide transition-all ease-in-out">
                {text}
            </button>
        </Link>
    )
}

export default ButtonRedirect;