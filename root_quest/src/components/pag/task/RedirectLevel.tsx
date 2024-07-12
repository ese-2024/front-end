import ButtonRedirect from "../../global/buttons/ButtonRedirect";

function RedirectLevel() {


    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            <div className={`font-chakra-regular text-white w-full h-full text-xl p-1 mt-1`}>
                Neste nível abordaremos questões sobre lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaí, pra onde vamos agora?   
            </div>
            <div className="w-full mt-4 h-12 gap-x-5 flex items-center justify-between">
                <ButtonRedirect pathBack="/tutorial" text="Tutorial" />
                <ButtonRedirect pathBack="/practice" text="Prático" />
            </div>
        </div>
    )
}

export default RedirectLevel;