interface ListItem {
    text: string;
}

interface ExampleI {
    description: string;
    items: ListItem[];
    answer: string

}

function Example({description, items, answer} : ExampleI) {
    return (
        <div className="w-full">
            <p className="font-chakra-medium text-xl text-hulk">Exemplo:</p>
            <div className="w-full min-h-40 mt-2 flex items-center flex-col bg-colorPopup rounded-lg">
                <p className="w-[96%] font-chakra-regular text-textC text-lg mt-4">{description}</p>
                <ol className="font-chakra-regular text-lg text-textC mt-3 mb-8 list-decimal">
                    {items.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ol>
                <p className="w-[96%] h-9 flex items-center bg-colorSide rounded-md border-[1px] border-lineBorder font-chakra-regular text-textC px-8 mb-6">{answer}</p>
            </div>
        </div>
    )
}

export default Example;