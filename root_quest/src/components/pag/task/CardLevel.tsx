import { useState } from 'react';
import Lock from '../../../../public/icons/Lock';
import LockGreen from '../../../../public/icons/LockGreen';
import Popup from '../../global/PopupBase';
import Card from '../../global/Card';
import RedirectLevel from './RedirectLevel';

interface Step {
  id: number;
  description: string;
  expectedAnswer: string;
  command: string;
  isCompleted: boolean;
  order: number;
}

interface Quest {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  order: number;
  steps: Step[];
}

interface CardLevelI {
  quest: Quest;
  open: boolean;
}

function CardLevel({ quest, open }: CardLevelI) {
  const [isChoose, setChoose] = useState(false);
  const handleViewChoose = () => {
    setChoose((prev) => !prev);
  };

  return (
    <div>
      <div
        className="w-full h-16 rounded-lg bg-colorPopup flex items-center justify-between hover:scale-customScale transition-all ease-in-out px-8"
        onClick={handleViewChoose}
      >
        <p className="uppercase font-chakra-regular text-lg text-textC">{quest.title}</p>
        {open ? <LockGreen /> : <Lock />}
      </div>
      {isChoose && (
        <Popup onClose={handleViewChoose}>
          <Card
            title={`${quest.title}`}
            onClose={handleViewChoose}
            children={<RedirectLevel questId={quest.id} order={quest.order} />}
          />
        </Popup>
      )}
    </div>
  );
}

export default CardLevel;
