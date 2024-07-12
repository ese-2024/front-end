import TableLevels from "../components/pag/task/TableLevels";

function Battle() {
    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  CHALLENGING TRAILS</h1>
            </div>
            <div className="w-11/12 mt-7 font-chakra-regular text-xl text-textC">ABAIXO SEGUEM AS TASKS AGRUPADAS POR NÍVEIS DE DIFICULDADE. PARA DESBLOQUEAR A TASK OU NÍVEL SEGUINTE É NECESSÁRIO A CONCLUSÃO DO ITEM ANTERIOR.</div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
                <TableLevels/>
                <TableLevels/>
            </div>
        </div>
    )
}

export default Battle;