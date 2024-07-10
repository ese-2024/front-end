import CardLevel from "./CardLevel";

function TableLevels () {
    return (
        <div className="w-full rounded-xl bg-colorSide flex items-center justify-center flex-col pt-8">
            <div className="uppercase text-4xl font-chakra-semibold text-hulk w-[95%] mb-4">Nivel 1</div>
            <div className="w-[95%] h-[3px] bg-lineBorder"></div>
            <div className="w-[95%] grid grid-cols-2 gap-x-10 gap-y-5 mt-7 mb-12">
                <CardLevel open={true}/> 
                <CardLevel open={false}/> 
                <CardLevel open={false}/> 
                <CardLevel open={false}/> 
                <CardLevel open={false}/> 
                <CardLevel open={false}/>
                <CardLevel open={false}/> 
                <CardLevel open={false}/>
            </div>

        </div>
    )
}

export default TableLevels;