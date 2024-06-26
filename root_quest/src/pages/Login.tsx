import Back from "../components/global/Back";
import ButtonHulk from "../components/global/buttons/ButtonHulk";
import InputText from "../components/inputs/InputText";

function Login() {
    
    const consoleF = () => {
        console.log("Clicou");
    }

    return (
        <div className="bg-colorBase h-full w-full flex justify-center items-center flex-col">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-end h-24">
                <Back pathBack="/"/>
            </div>
            <div className="w-11/12 h-full flex items-center justify-center">
                <div className=" bg-colorSide w-[400px] 2xl:w-[500px] pb-10 border-[1px] border-lineBorder rounded-lg flex flex-col -mt-14">
                    <h3 className="text-4xl text-textC font-chakra-medium pl-7 pt-5 pb-2">Acesse sua conta</h3>
                    {/* <div className="bg-lineBorder w-full h-[1px]"></div> */}
                    <div className="px-7 pt-5 ">
                        <InputText name="nickname" text="Nickname" placeholder="Seu Nickname"/>
                        <InputText name="senha" text="Senha" placeholder="Sua Senha"/>
                        <div className="mt-14">
                            <ButtonHulk text="Entrar" handleFunction={consoleF}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;