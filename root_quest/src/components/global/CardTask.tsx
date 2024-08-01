import { useState } from 'react';
import Check from '../../../public/icons/Check';

interface ListItem {
    text: string;
}

interface CardTaskI {
    description: string;
    items: ListItem[];
}

function CardTask({description, items} : CardTaskI) {

    const [accept , setAccept] = useState(false);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between"> 
                <p className="font-chakra-medium text-xl text-hulk">Prática:</p>
                <Check fill={ accept ? '#BBFF34' : '#fff'}/>
            </div>
            <div className="w-full min-h-40 mt-2 flex items-center flex-col bg-colorPopup rounded-lg">
                <p className="w-[96%] font-chakra-regular text-textC text-lg mt-4">{description}</p>
                <ol className="font-chakra-regular text-lg text-textC mt-3 mb-8 list-decimal">
                    {items.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ol>
                <div className="flex items-center justify-between w-[96%] gap-x-10"> 
                    <input type='text' className="w-3/4 h-9 flex items-center bg-colorSide rounded-md border-[1px] border-lineBorder font-chakra-regular text-textC px-8 mb-6 focus:outline-none"></input>
                    <button className="w-1/4 h-9 uppercase text-lg bg-colorSide rounded-md border-[1px] border-lineBorder font-chakra-regular text-hulk hover:bg-colorPopup transition-all ease-in-out mb-6" onClick={() => setAccept((prev) => !prev)}>
                        Check
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardTask;