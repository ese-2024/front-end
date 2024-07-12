import ButtonRedirect from "../../global/buttons/ButtonRedirect";

interface IRedirectLesson {
    onClose: () => void;
}
function RedirectLesson({onClose}: IRedirectLesson) {
    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            <div className={`font-chakra-regular text-white w-full h-full text-xl p-1 mt-1`}>
                Se você sair terá de iniciar o nível novamente. Deseja continuar?
            </div>
            <div className="w-full mt-4 h-12 gap-x-5 flex items-center justify-between">
                <button className="w-full h-10 bg-colorPopup rounded-md border-[1px] border-lineBorder font-chakra-regular text-hulk hover:bg-colorSide transition-all ease-in-out" onClick={onClose}>
                    Continuar
                </button>
                <ButtonRedirect pathBack="/battle" text="Sair" />
            </div>
        </div>
    )
}

export default RedirectLesson;