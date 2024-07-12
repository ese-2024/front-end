import { useState } from "react";
import BackIcon from "../../public/icons/BackIcon";
import Popup from "../components/global/PopupBase";
import Card from "../components/global/Card";
import Lesson from "../components/pag/Lesson/RedirectLesson";

function Practice() {

    const [back, setBack] = useState(false);

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  PRACTICE</h1>
                <button className="flex items-center justify-center bg-colorPopup w-14 h-12 rounded-lg hover:bg-opacity-85 transition-all ease-in-out" onClick={() => setBack(true) }>
                    <BackIcon/>
                </button>
            </div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
                <p>oiee</p>
            </div>
            {back && (
                <Popup onClose={() => setBack(false)}>
                    {/* <RedirectLogin/> */}
                    <Card title="Voltar" onClose={() => setBack(false)} children={<Lesson onClose={() => setBack(false)}/>}/>
                </Popup>
            )}
        </div>
    )
}

export default Practice;