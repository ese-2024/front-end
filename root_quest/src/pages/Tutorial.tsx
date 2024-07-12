import TablePT from "../components/global/TablePT";
import Example from "../components/pag/Lesson/Example";

function Tutorial() {
    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  TUTORIAL</h1>
            </div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
               <TablePT command="chmod" textButton1="Voltar para o lob" textButton2="Ir para a prática" children={<Example/>}/>
            </div>
        </div>
    )
}

export default Tutorial;