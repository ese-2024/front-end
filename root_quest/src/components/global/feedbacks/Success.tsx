import CloseIcon from "../../../../public/icons/CloseIcon";
import Button from "../buttons/Button";
import SuccessIcon from '../../../../public/sucess.png'

interface ISuccess {
    title: string;
    textBt: string;
    description: string;
    onClick: () => void;
}

function Success({title, description, onClick, textBt}: ISuccess){
    return(
        <div className={`bg-colorPopup rounded-lg border-[1px] border-lineBorder flex items-center justify-center flex-col -mr-20`}>
            <div className="w-[400px] h-14 flex items-center justify-between flex-row px-4">
                <p className="font-chakra-regular uppercase text-2xl text-textC">{title}</p>
                <button className="-mr-3 w-10 h-10 rounded-full hover:bg-colorSide flex items-center justify-center"><CloseIcon/></button>
            </div>
            <div className="w-full h-[1px] bg-lineBorder"></div>
            <div className="w-[90%] max-w-[400px] p-4 h-32 flex items-center justify-between gap-x-5">
                <img src={SuccessIcon} alt="Icone de sucesso" className="w-14 h-14"/>
                <p className="font-chakra-regular text-textC text-lg text-balance">{description}</p>
            </div>
            <div className="w-[90%] mb-4">
                <Button text={textBt} handleFunction={onClick}/>
            </div>
        </div>
    )
}

export default Success;