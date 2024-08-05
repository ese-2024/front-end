import { useEffect, useState } from "react";
import TableLevels from "../components/pag/task/TableLevels";
import { getChallenges } from "../integration/Challenge";

interface IChallenge {
    id: number;
    title: string;
    description: string;
    level: number;
    necessaryKnowledges: {
        id: number;
        knowledge: string;
    }[];
    materials: {
        id: number;
        title: string;
        link: string;
    }[];
    quests: {
        id: number;
        title: string;
        description: string;
        isCompleted: boolean;
        order: number;
        steps: {
            id: number;
            description: string;
            expectedAnswer: string;
            command: string;
            isCompleted: boolean;
            order: number;
        }[];
    }[];
}

function Battle() {

    const [challenges, setChallenges] = useState<IChallenge[]>([]);

    useEffect(() => {
        const fetchChallenges = async () => {
            try {
                const data = await getChallenges();
                setChallenges(data);
            } catch (error) {
                console.error('Failed to fetch challenges:', error);
            }
        };

        fetchChallenges();
    }, []);

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  CHALLENGING TRAILS</h1>
            </div>
            <div className="w-11/12 mt-7 font-chakra-regular text-xl text-textC">ABAIXO SEGUEM AS TASKS AGRUPADAS POR NÍVEIS DE DIFICULDADE. PARA DESBLOQUEAR A TASK OU NÍVEL SEGUINTE É NECESSÁRIO A CONCLUSÃO DO ITEM ANTERIOR.</div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
            {challenges.map((challenge, index) => (
                    <TableLevels key={index} challenge={challenge} />
                ))}
            </div>
        </div>
    )
}

export default Battle;