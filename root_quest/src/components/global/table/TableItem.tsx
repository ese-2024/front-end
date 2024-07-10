interface TableItemI {
    data: string[];
    rowIndex: number;
}

function TableItem({data, rowIndex}: TableItemI){
    const isOdd = rowIndex % 2 !== 1;
    const backgroundColor = isOdd ? "bg-colorSide" : "bg-colorPopup";

    return (
        <div className={`w-full h-12 flex items-center justify-between gap-x-14 ${backgroundColor} hover:scale-customScale`}>
           {data.map((item, index) => (
                <p key={index} className="w-full flex items-center justify-center font-chakra-regular text-lg text-textC">{item}</p>
            ))}
        </div>
    )
}

export default TableItem;