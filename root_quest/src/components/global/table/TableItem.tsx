interface TableItemI {
    data: any[];
    rowIndex: number;
}

function TableItem({data, rowIndex}: TableItemI){
    const isOdd = rowIndex % 2 !== 1;
    const backgroundColor = isOdd ? "bg-colorSide" : "bg-colorPopup";

    return (
        <div className={`w-full h-12 flex items-center justify-between gap-x-14 ${backgroundColor} hover:scale-customScale`}>
           {data.map((item, index) => (
                <p key={index} className="w-full  text-center font-chakra-regular text-lg text-textC text-ellipsis text-nowrap overflow-hidden whitespace-nowrap uppercase">{item}</p>
            ))}
        </div>
    )
}

export default TableItem;