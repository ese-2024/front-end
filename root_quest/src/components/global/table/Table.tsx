import { useState } from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const header = ['Cidade', 'Data', 'Tipo', 'Valor'];

const initialData = [
    { cidade: "CAMPINA GRANDE", data: "28 jun. 2024", tipo: "CIERRE DIARIO", valor: "20.167" },
    { cidade: "CAMPINA GRANDE", data: "02 jul. 2024", tipo: "ADICION AL CAPITAL", valor: "40.167" },
    { cidade: "CAMPINA GRANDE", data: "02 jul. 2024", tipo: "CIERRE DIARIO", valor: "35.607" },
    { cidade: "CAMPINA GRANDE", data: "05 jul. 2024", tipo: "CIERRE DIARIO", valor: "35.607" },
    { cidade: "CAMPINA GRANDE", data: "06 jul. 2024", tipo: "ADICION AL CAPITAL", valor: "25.200" },
    { cidade: "CAMPINA GRANDE", data: "07 jul. 2024", tipo: "CIERRE DIARIO", valor: "30.180" },
    { cidade: "CAMPINA GRANDE", data: "08 jul. 2024", tipo: "CIERRE DIARIO", valor: "22.150" },
    { cidade: "CAMPINA GRANDE", data: "09 jul. 2024", tipo: "ADICION AL CAPITAL", valor: "45.220" },
    { cidade: "CAMPINA GRANDE", data: "10 jul. 2024", tipo: "CIERRE DIARIO", valor: "33.190" },
    { cidade: "CAMPINA GRANDE", data: "11 jul. 2024", tipo: "CIERRE DIARIO", valor: "28.210" },
    { cidade: "CAMPINA GRANDE", data: "12 jul. 2024", tipo: "ADICION AL CAPITAL", valor: "38.230" },
    { cidade: "CAMPINA GRANDE", data: "13 jul. 2024", tipo: "CIERRE DIARIO", valor: "29.170" },
    { cidade: "CAMPINA GRANDE", data: "14 jul. 2024", tipo: "CIERRE DIARIO", valor: "27.160" },
    { cidade: "CAMPINA GRANDE", data: "15 jul. 2024", tipo: "ADICION AL CAPITAL", valor: "41.240" },
    { cidade: "CAMPINA GRANDE", data: "16 jul. 2024", tipo: "CIERRE DIARIO", valor: "34.175" },
    { cidade: "CAMPINA GRANDE", data: "17 jul. 2024", tipo: "CIERRE DIARIO", valor: "26.165" },
    { cidade: "CAMPINA GRANDE", data: "18 jul. 2024", tipo: "ADICION AL CAPITAL", valor: "37.255" },
    { cidade: "CAMPINA GRANDE", data: "19 jul. 2024", tipo: "CIERRE DIARIO", valor: "31.185" },
    { cidade: "CAMPINA GRANDE", data: "20 jul. 2024", tipo: "CIERRE DIARIO", valor: "25.195" },
    { cidade: "CAMPINA GRANDE", data: "21 jul. 2024", tipo: "ADICION AL CAPITAL", valor: "39.215" }
];

function Table() {
    const [dadosFakes] = useState(initialData);

    return (
        <div className="mt-20 bg-colorSide w-11/12 px-10 py-4 rounded-2xl">
            <TableHeader data={header} />
            <div className="w-full h-1 bg-lineBorder"></div>
            {dadosFakes.map((item, index) => (
                <TableItem 
                    key={index} 
                    rowIndex={index} 
                    data={[item.cidade, item.data, item.tipo, item.valor]} 
                />
            ))}
        </div>
    );
}

export default Table;
