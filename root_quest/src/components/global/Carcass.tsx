import InputText from "../inputs/InputText";
import ButtonHulk from "./buttons/ButtonHulk";

function Carcass() {
    return(
        <div className=" bg-colorSide w-[500px] pb-10 border-[1px] border-lineBorder rounded-lg flex flex-col">
            <h3 className="text-4xl text-textC font-chakra-medium pl-7 pt-5 pb-2">Acesse sua conta</h3>
            {/* <div className="bg-lineBorder w-full h-[1px]"></div> */}
            <div className="px-7 pt-5 ">
                <InputText name="nickname" text="Nickname" placeholder="Seu Nickname"/>
                <InputText name="senha" text="Senha" placeholder="Sua Senha"/>
                <div className="mt-14">
                    <ButtonHulk text="Entrar"/>
                </div>
            </div>
        </div>
    )
} 

export default Carcass;