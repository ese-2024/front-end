import Back from "../components/global/Back";
import ButtonHulk from "../components/global/buttons/ButtonHulk";
import InputText from "../components/inputs/InputText";

function Register() {

    const consoleF = () => {
        console.log("Clicou");
    }

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-end h-24">
                <Back pathBack="/"/>
            </div>
            <div className="w-11/12 h-full flex items-center justify-center">
                <div className=" bg-colorSide w-[450px] pb-10 border-[1px] border-lineBorder rounded-lg flex flex-col -mt-14">
                    <h3 className="text-3xl text-textC font-chakra-medium pl-7 pt-5 pb-2">Cadastre-se gratuitamente</h3>
                    {/* <div className="bg-lineBorder w-full h-[1px]"></div> */}
                    <div className="px-7 pt-5 ">
                        <InputText name="nickname" text="Nickname" placeholder="Seu Nickname"/>
                        <InputText name="senha" text="Senha" placeholder="Deve ter no mínimo 7 caracteres"/>
                        <InputText name="confirmSenha" text="Confirme sua senha" placeholder="Deve ter no mínimo 7 caracteres"/>
                        <div className="mt-14">
                            <ButtonHulk text="Cadastrar-se gratuitamente" handleFunction={consoleF}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;