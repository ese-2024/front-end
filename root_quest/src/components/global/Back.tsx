import { Link } from "react-router-dom";
import BackIcon from "../../../public/icons/BackIcon"
import { IBack } from "../../interfaces/IButton";

function Back({pathBack} : IBack) {
    return (
        <Link to={pathBack}>
            <button className="flex items-center justify-center bg-colorPopup w-14 h-12 rounded-lg hover:bg-opacity-85 transition-all ease-in-out">
                <BackIcon/>
            </button>
        </Link>
    )
}

export default Back;