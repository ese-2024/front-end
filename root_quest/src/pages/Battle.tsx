import { useEffect, useState } from "react";
import TableLevels from "../components/pag/task/TableLevels";
import { getChallenges } from "../integration/Challenge";
import Cookie from 'js-cookie';

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

interface ICompletedStep {
    id: number;
    description: string;
    expectedAnswer: string;
    command: string;
    isCompleted: boolean;
    order: number;
}
interface ICompletedQuest {
    id: number;
    title: string;
    description: string | null;
    isCompleted: boolean;
    order: number;
    steps: ICompletedStep;
}

function Battle() {
    const [challenges, setChallenges] = useState<IChallenge[]>([]);
    const [completedLevels, setCompletedLevels] = useState<ICompletedQuest[]>([]);

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

    useEffect(() => {

        const fetchCompletedLevels = async () => {
            const token = Cookie.get('token'); // Obtém o token dos cookies

            if (!token) {
                console.error('Token not found');
                return;
            }

            try {
                const response = await fetch('https://localhost:7172/api/UserProgress/quests/completed', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json' // Opcional: se a API espera um corpo JSON
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data: ICompletedQuest[] = await response.json();
                setCompletedLevels(data);
            } catch (error) {
                console.error('Failed to fetch completed levels:', error);
            }
        };
        fetchCompletedLevels();
    }, []);

    const questIds = completedLevels.map(quest => quest.id);
    const dicas = challenges.map(challenge => challenge.materials);
    console.log(dicas)
    
    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  CHALLENGING TRAILS</h1>
            </div>
            <div className="w-11/12 mt-7 font-chakra-regular text-xl text-textC uppercase">Abaixo, você encontrará as tasks organizadas por níveis de dificuldade. Quanto maior o nível, maior a pontuação. Resolva as tasks que conseguir e supere seus colegas!</div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
                {challenges.map((challenge, index) => (
                    <TableLevels key={index} challenge={challenge} done={questIds} materials={challenge.materials}/>
                ))}
            </div>
        </div>
    )
}

export default Battle;