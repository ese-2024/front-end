import { ICard } from "../../interfaces/IPopups";
import CloseIcon from "../../../public/icons/CloseIcon"

function Card({children, title, onClose} : ICard) {
    return(
        <div className={`bg-colorPopup rounded-lg border-[1px] border-lineBorder flex items-center justify-center flex-col`}>
            <div className="w-[550px] h-14 flex items-center justify-between flex-row px-4">
                <p className="font-chakra-regular uppercase text-2xl text-textC">{title}</p>
                <button className="-mr-3 w-10 h-10 rounded-full hover:bg-colorSide flex items-center justify-center" onClick={onClose}><CloseIcon/></button>
            </div>
            <div className="w-full h-[1px] bg-lineBorder"></div>
            <div className="max-w-[550px] p-4">
                {children}
            </div>
        </div>
    )
}

export default Card;