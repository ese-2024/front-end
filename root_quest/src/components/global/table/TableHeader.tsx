interface TableHeaderI {
    data: string[];
}

function TableHeader({data}: TableHeaderI){
    return (
        <div className="w-full h-12 flex items-center justify-between gap-x-14 uppercase">
            {data.map((item, index) => (
                <p key={index} className="w-full text-center text-ellipsis text-nowrap overflow-hidden whitespace-nowrap font-chakra-medium text-xl text-hulk">{item}</p>
            ))}
        </div>
    )
}

export default TableHeader;