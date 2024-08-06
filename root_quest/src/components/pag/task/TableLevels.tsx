import CardLevel from "./CardLevel";
import light from '../../../../public/light.png'
import { useState } from "react";
import Popup from "../../global/PopupBase";
import Links2 from '../../global/feedbacks/Links'

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
  done: number[];
  materials: {
    id: number;
    title: string;
    link: string;
  }[];
}

function TableLevels({ challenge, done, materials }: TableLevelsProps) {

  const [ viewDicas, setViewDicas ] = useState(false);
  return (
    <div className="w-full rounded-xl bg-colorSide flex items-center justify-center flex-col pt-8">
      <div className="uppercase text-4xl font-chakra-semibold text-hulk w-[95%] mb-4 flex items-center justify-between">
        <p>{challenge.title}</p>
        <button className="w-12 h-12 rounded-full bg-colorPopup flex items-center justify-center hover:bg-opacity-75 transition-all ease-in-out duration-200" onClick={() => setViewDicas(true)}>
          <img src={light} alt="Dica" className="w-7"></img>
        </button>
      </div>
      <div className="w-[95%] h-[3px] bg-lineBorder"></div>
      <div className="w-[95%] grid grid-cols-2 gap-x-10 gap-y-5 mt-7 mb-12">
        {challenge.quests.map((quest, index) => (
          <CardLevel key={index} quest={quest} open={done.includes(quest.id)} />
        ))}
      </div>
      {viewDicas && (
         <Popup onClose={() => setViewDicas(false)}>
          <Links2 materials={materials} onClose={() => setViewDicas(false)} />
       </Popup>
      )}
    </div>
  );
}

export default TableLevels;
