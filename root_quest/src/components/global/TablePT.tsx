import { ReactNode, useState } from "react";
import Popup from "./PopupBase";
import Success from "./feedbacks/Success";
import DecisionFeedback from "./feedbacks/DecisionFeedback";
import { useNavigate } from "react-router-dom"; // Adicione useNavigate para redirecionamento


interface IKnowledge {
    id: number; 
    knowledge: string;
}
interface ITablePt {
    command?: string;
    type?: string;
    textButton1: string;
    textButton2: string;
    children: ReactNode;
    knowledge?: IKnowledge[];
    accept: boolean; // Add this line
    errorState: boolean;
    on2: () => void;
    isButton2Disabled: boolean;
}

function TablePT({command, type, textButton1, textButton2, children, knowledge , accept, errorState, on2, isButton2Disabled}: ITablePt) {

    const [cancelar, setCancelar] = useState(false);
    const navigate = useNavigate();
    
    const abandonarTask = () => {
        navigate(`/battle`);
    }

    return (
        <div className={`w-full bg-colorSide rounded-xl flex flex-col mb-10 ${accept ? 'border-2 border-hulk' : ''} ${errorState ? 'border-2 border-red-600' : ''}`}>
            <div className="w-full h-20 flex items-center gap-x-4 font-chakra-medium text-hulk uppercase text-2xl px-8 ">
                <h3>{type}:</h3>
                <h3 className="font-chakra-bold">{command}</h3>
            </div>
            <div className="w-full h-[1px] bg-textC"></div>
            <div className="w-full px-8 mt-8">
                <p className="font-chakra-regular text-textC text-lg">Conhecimentos necessários para realização das missões desse Nível.</p>
                 {knowledge ? (
                    <div className="ml-20 ">
                        <ol className="font-chakra-regular text-lg text-textC mt-3 list-decimal">
                            {knowledge.map((item, index) => (
                                <li key={index}>{item.knowledge}</li>
                            ))}
                        </ol>
                    </div>
                ) : null}
            </div>
            <div className="px-8 pt-6">
                {children}
            </div>
            <div className="w-full px-8 flex items-center justify-center gap-x-8 pt-8 pb-8">
                <button className="w-full h-10 uppercase text-lg bg-colorPopup rounded-md border-[1px] border-lineBorder font-chakra-regular text-hulk hover:bg-colorSide transition-all ease-in-out" onClick={() => setCancelar(true)}>
                    {textButton1}
                </button>
                <button className="w-full h-10 uppercase text-lg bg-colorPopup rounded-md border-[1px] border-lineBorder font-chakra-regular text-hulk hover:bg-colorSide transition-all ease-in-out" onClick={on2} disabled={isButton2Disabled}>
                    {textButton2}
                </button>
            </div>
            {cancelar && (
                <Popup onClose={() => setCancelar(false)}>
                    <DecisionFeedback title="Cancelar tarefa" description="Tem certeza que deseja abandonar a realização da Quest?" onClick={() => setCancelar(false)} textBt="Não" onClick2={abandonarTask} textBt2="Sim"/>
                </Popup>
            )}

        </div>
    )  
}

export default TablePT;