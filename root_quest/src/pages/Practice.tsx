import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // Adicione useNavigate para redirecionamento
import BackIcon from "../../public/icons/BackIcon";
import Popup from "../components/global/PopupBase";
import Card from "../components/global/Card";
import Lesson from "../components/pag/Lesson/RedirectLesson";
import TablePT from "../components/global/TablePT";
import CardTask from "../components/global/CardTask";
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

interface IQuest {
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
}
interface IKnowledge {
    id: number; 
    knowledge: string;
}

function Practice() {
    const [accept, setAccept] = useState(false);
    const [error, setError] = useState(false);
    const [back, setBack] = useState(false);
    const [searchParams] = useSearchParams();
    const questId = searchParams.get('questId');
    const order = searchParams.get('order');
    const levelId = questId ? parseInt(questId, 10) : null;
    let levelIdTrue = 0;
    let propsNumberLevel = 0;
    const navigate = useNavigate();

    if (levelId !== null && !isNaN(levelId)) {
        levelIdTrue = Math.ceil(levelId / 5);
        propsNumberLevel = levelId;
    } else {
        console.error("Failed to parse 'order' as a valid integer:", levelId);
    }

    const [challenges, setChallenges] = useState<IChallenge[]>([]);
    const [selectedQuest, setSelectedQuest] = useState<IQuest | null>(null);
    const [knowledge, setKnowledge] = useState<IKnowledge[]>([]);

    useEffect(() => {
        const fetchChallenges = async () => {
            try {
                const data = await getChallenges();
                setChallenges(data);
                setKnowledge(data[levelIdTrue - 1].necessaryKnowledges)
                if (questId && order && levelIdTrue) {
                    const challenge = data.find(challenge => challenge.level === levelIdTrue);
                    if (challenge) {
                        const quest = challenge.quests.find(q => q.id === parseInt(questId, 10) && q.order === parseInt(order, 10));
                        if (quest) {
                            setSelectedQuest(quest);
                        } else {
                            console.error('Quest not found');
                        }
                    } else {
                        console.error('Challenge not found');
                    }
                }
            } catch (error) {
                console.error('Failed to fetch challenges:', error);
            }
        };

        fetchChallenges();
    }, [questId, order, levelIdTrue]);

    // Função para resetar estados
    const resetStates = () => {
        setAccept(false);
        setError(false);
    };

    // Função para passar o nível
    const handlePassLevel = () => {
        resetStates();
        if (order) {
            const nextQuestId = (propsNumberLevel + 1).toString();
            const nextOrder = (parseInt(order, 10) + 1).toString();
            navigate(`/practice?questId=${nextQuestId}&order=${nextOrder}`);
        } else {
            console.error("Order is null");
        }
    };


    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  PRACTICE</h1>
                <button className="flex items-center justify-center bg-colorPopup w-14 h-12 rounded-lg hover:bg-opacity-85 transition-all ease-in-out" onClick={() => setBack(true) }>
                    <BackIcon/>
                </button>
            </div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
            {selectedQuest ? (
                    <TablePT
                        type={`Nível ${levelIdTrue}`}
                        command={selectedQuest.steps[0].command}
                        textButton1="Cancelar"
                        textButton2="Próximo Nível"
                        knowledge={knowledge}
                        accept={accept}
                        errorState={error}
                        on2={handlePassLevel}
                        isButton2Disabled={!accept} // Passando a prop
                        children={
                            <CardTask
                                questId={propsNumberLevel}
                                description={selectedQuest.description}
                                onAcceptChange={setAccept} // Pass the callback here
                                onErrorState={setError}
                            />
                        }
                    />
                ) : (
                    <p className="font-chakra-regular text-center text-lg text-hulk">Loading quest...</p>
                )}
            </div>
            {back && (
                <Popup onClose={() => setBack(false)}>
                    <Card title="Voltar" onClose={() => setBack(false)} children={<Lesson onClose={() => setBack(false)}/>}/>
                </Popup>
            )}
        </div>
    )
}

export default Practice;
