import CardLevel from "./CardLevel";

interface IChallenge {
  id: number;
  title: string;
  description: string;
  level: number;
  necessaryKnowledges: { id: number; knowledge: string }[];
  materials: { id: number; title: string; link: string }[];
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

interface TableLevelsProps {
  challenge: IChallenge;
}

function TableLevels({ challenge }: TableLevelsProps) {

    return (
        <div className="w-full rounded-xl bg-colorSide flex items-center justify-center flex-col pt-8">
            <div className="uppercase text-4xl font-chakra-semibold text-hulk w-[95%] mb-4">{challenge.title}</div>
            <div className="w-[95%] h-[3px] bg-lineBorder"></div>
            <div className="w-[95%] grid grid-cols-2 gap-x-10 gap-y-5 mt-7 mb-12">
                {challenge.quests.map((quest, index) => (
                    <CardLevel key={index} quest={quest} open={quest.isCompleted} />
                ))}
            </div>
        </div>
    )
}

export default TableLevels;
