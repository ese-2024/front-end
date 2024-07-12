import { ReactNode } from "react";

interface ITablePt {
    command?: string;
    textButton1: string;
    textButton2: string;
    children: ReactNode
}

function TablePT({command, textButton1, textButton2, children}: ITablePt) {
    return (
        <div className="w-full bg-colorSide rounded-xl flex flex-col mb-10">
            <div className="w-full h-20 flex items-center gap-x-4 font-chakra-medium text-hulk uppercase text-2xl px-8 ">
                <h3>COMANDO:</h3>
                <h3 className="font-chakra-bold">{command}</h3>
            </div>
            <div className="w-full h-[1px] bg-textC"></div>
            <div className="w-full px-8 mt-8">
                <p className="font-chakra-regular text-textC text-lg">O chmod é um comando que modifica as permissões de leitura, gravação e execução de um arquivo ou diretório. No Linux, cada arquivo está associado a três classes de usuários: proprietário, membro do grupo e outros.</p>
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