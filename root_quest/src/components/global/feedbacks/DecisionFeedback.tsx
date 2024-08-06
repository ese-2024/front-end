import CloseIcon from "../../../../public/icons/CloseIcon";
import Button from "../buttons/Button";

interface IDecisionFeedback {
    title: string;
    description: string;
    textBt: string;
    onClick: () => void;
    textBt2: string;
    onClick2: () => void;
}

function DecisionFeedback({title, description, onClick, textBt, textBt2, onClick2}: IDecisionFeedback){
    return(
        <div className={`bg-colorPopup rounded-lg border-[1px] border-lineBorder flex items-center justify-center flex-col -mr-20`}>
            <div className="w-[400px] h-14 flex items-center justify-between flex-row px-4">
                <p className="font-chakra-regular uppercase text-2xl text-textC">{title}</p>
                <button className="-mr-3 w-10 h-10 rounded-full hover:bg-colorSide flex items-center justify-center" onClick={onClick}><CloseIcon/></button>
            </div>
            <div className="w-full h-[1px] bg-lineBorder"></div>
            <div className="w-[90%] max-w-[400px] p-4 h-32 flex items-center justify-between">
                <p className="font-chakra-regular text-textC text-lg">{description}</p>
            </div>
            <div className="w-[90%] mb-4 flex items-center justify-center gap-x-6">
                <Button text={textBt} handleFunction={onClick}/>
                <Button text={textBt2} handleFunction={onClick2}/>
            </div>
        </div>
    )
}

export default DecisionFeedback;