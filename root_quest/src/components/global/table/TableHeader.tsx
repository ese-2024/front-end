interface TableHeaderI {
    data: string[];
}

function TableHeader({data}: TableHeaderI){
    return (
        <div className="w-full h-12 flex items-center justify-between gap-x-14 uppercase">
            {data.map((item, index) => (
                <p key={index} className="w-full flex items-center justify-center font-chakra-medium text-xl text-hulk">{item}</p>
            ))}
        </div>
    )
}

export default TableHeader;