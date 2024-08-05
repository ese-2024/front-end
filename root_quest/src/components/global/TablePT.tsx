import { ReactNode } from "react";

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
    knowledge: IKnowledge[];
    accept: boolean; // Add this line
}

function TablePT({command, type, textButton1, textButton2, children, knowledge , accept}: ITablePt) {
    return (
        <div className={`w-full bg-colorSide rounded-xl flex flex-col mb-10 ${accept ? 'border-2 border-hulk' : 'border-0 border-transparent'} `}>
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
                <button className="w-full h-10 uppercase text-lg bg-colorPopup rounded-md border-[1px] border-lineBorder font-chakra-regular text-hulk hover:bg-colorSide transition-all ease-in-out">
                    {textButton1}
                </button>
                <button className="w-full h-10 uppercase text-lg bg-colorPopup rounded-md border-[1px] border-lineBorder font-chakra-regular text-hulk hover:bg-colorSide transition-all ease-in-out">
                    {textButton2}
                </button>

            </div>

        </div>
    )  
}

export default TablePT;