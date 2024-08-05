import Back from "../components/global/Back";
import ouro from "../../public/icons/ranking/ouro.png";
import prata from "../../public/icons/ranking/prata.png";
import bronze from "../../public/icons/ranking/bronze.png";
import Table from "../components/global/table/Table";
import { useEffect, useState } from "react";
import { getRanking } from "../integration/Ranking";

function Ranking() {
    const [ranking, setRanking] = useState<{ position: number, name: string, score: number, completedChallenges: number }[]>([]);

    useEffect(() => {
        const fetchRanking = async () => {
          try {
            const data = await getRanking();
            setRanking(data);
          } catch (err) {
            console.error(err)
          }
        };
    
        fetchRanking();
    }, []);

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST - RANKING</h1>
                <Back pathBack="/"/>
            </div>
            <div className="w-11/12 flex items-center justify-center flex-col mt-14">
                {ranking.length > 0 && (
                    <div className="w-7/12 h-[400px] flex gap-x-2">
                            <div className="flex flex-col w-1/3 h-full group">
                                <div className="w-full h-full flex items-end justify-center">
                                    <img src={prata} alt="Medalha de prata" className="w-44 h-44 mb-5 group-hover:scale-99 transition-all ease-in-out"></img>
                                </div>
                                <div className="w-full h-[60%] bg-colorSide border-[1px] border-hulk rounded-sm flex items-center justify-center 
                                    flex-col uppercase text-lg text-hulk group-hover:bg-opacity-90 transition-all ease-in-out">
                                    <p className="font-chakra-medium text-center text-ellipsis text-nowrap overflow-hidden whitespace-nowrap w-[95%]">{ranking[1] ? ranking[1].name : 'null'}</p>
                                    <p className="font-chakra-bold">{ranking[1] ? ranking[1].score : 'null'}</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-1/3 h-full group">
                                <div className="w-full h-full flex items-end justify-center">
                                    <img src={ouro} alt="Medalha de ouro" className="w-44 h-44 mb-5 group-hover:scale-99 transition-all ease-in-out"></img>
                                </div>
                                <div className="w-full h-full bg-colorSide border-[1px] border-hulk rounded-sm flex items-center justify-center 
                                    flex-col uppercase text-lg text-hulk group-hover:bg-opacity-90 transition-all ease-in-out">
                                    <p className="font-chakra-medium text-center text-ellipsis text-nowrap overflow-hidden whitespace-nowrap w-[95%]">{ranking[0] ? ranking[0].name : 'null'}</p>
                                    <p className="font-chakra-bold">{ranking[0] ? ranking[0].score : 'null'}</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-1/3 h-full group">
                                <div className="w-full h-full flex items-end justify-center">
                                    <img src={bronze} alt="Medalha de bronze" className="w-44 h-44 mb-5 group-hover:scale-99 transition-all ease-in-out"></img>
                                </div>
                                <div className="w-full h-[35%] bg-colorSide border-[1px] border-hulk rounded-sm flex items-center justify-center 
                                    flex-col uppercase text-lg text-hulk group-hover:bg-opacity-90 transition-all ease-in-out">
                                    <p className="font-chakra-medium text-center text-ellipsis text-nowrap overflow-hidden whitespace-nowrap w-[95%]">{ranking[2] ? ranking[2].name : 'null'}</p>
                                    <p className="font-chakra-bold">{ranking[2] ? ranking[2].score : 'null'}</p>
                                </div>
                            </div>
                    </div>
                )}
            </div>
            <div className="w-full flex items-center justify-center">
               <Table/>
            </div>
        </div>
    )
}

export default Ranking;