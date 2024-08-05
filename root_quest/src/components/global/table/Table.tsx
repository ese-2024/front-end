import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import { getRanking } from "../../../integration/Ranking";

function Table() {
    const header = ['Posição', 'Nome', 'Pontuação', 'Desafios'];
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
        <div className="mt-20 bg-colorSide w-11/12 px-10 py-4 rounded-2xl mb-6">
            <TableHeader data={header} />
            <div className="w-full h-1 bg-lineBorder"></div>
            {ranking.length > 3 ?
                <div>
                    {ranking.slice(3).map((item, index) => (
                        <TableItem
                            key={index + 2}  // Ajuste o key para manter a unicidade, já que os índices foram alterados
                            rowIndex={index + 2}  // Ajuste o rowIndex também
                            data={[item.position, item.name, item.score, item.completedChallenges]}
                        />
                    ))}
                </div>
                :
                <p className="w-full h-16 flex items-center justify-center font-chakra-medium text-lg text-hulk">Não há mais dados a serem mostrados</p>
            }
        </div>
    );
}

export default Table;
