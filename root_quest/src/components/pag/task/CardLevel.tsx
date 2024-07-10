import { useState } from 'react';
import Lock from '../../../../public/icons/Lock';
import LockGreen from '../../../../public/icons/LockGreen';
import Popup from '../../global/PopupBase';
import Card from '../../global/Card';
import RedirectLevel from './RedirectLevel';

interface CardLevelI {
    open: boolean;
}
function CardLevel({open}: CardLevelI) {

    const [isChoose, setChoose] = useState(false);
    const handleViewChoose = () => {
        setChoose((prev) => !prev);
    }

    return (
        <div>
            <div className="w-full h-16 rounded-lg bg-colorPopup flex items-center justify-between hover:scale-customScale transition-all ease-in-out  px-8" onClick={handleViewChoose}>
                <p className='uppercase font-chakra-regular text-lg text-textC'>Montagem de liquidificador</p>
                {open ? <LockGreen/> : <Lock/>}
            </div>
            {isChoose && (
                <Popup onClose={handleViewChoose}>
                    {/* <RedirectLogin/> */}
                    <Card title="Nível 1 - Task 1" onClose={handleViewChoose} children={<RedirectLevel/>}/>
                </Popup>
            )}
        </div>
    )
}

export default CardLevel;