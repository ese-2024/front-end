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
    if (!open) {
      setChoose((prev) => !prev);
    }
  };

  return (
    <div>
      <div
        className={`w-full h-16 rounded-lg flex items-center justify-between px-8 transition-all ease-in-out ${open ? 'bg-colorPopup cursor-not-allowed' : 'bg-colorPopup hover:scale-customScale cursor-pointer'}`}
        onClick={handleViewChoose}
      >
        <p className={`uppercase font-chakra-regular text-lg ${open ? 'text-gray-400' : 'text-textC'}`}>{quest.title}</p>
        {open ? <LockGreen /> : <Lock />}
      </div>
      {isChoose && !open && (
        <Popup onClose={handleViewChoose}>
          <Card
            title={`${quest.title}`}
            onClose={handleViewChoose}
            children={<RedirectLevel questId={quest.id} order={quest.order} command={quest.steps[0].command} />}
          />
        </Popup>
      )}
    </div>
  );
}

export default CardLevel;
