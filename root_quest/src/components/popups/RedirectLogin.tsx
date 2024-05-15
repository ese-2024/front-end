import ButtonRedirect from "../global/buttons/ButtonRedirect";

function RedirectLogin() {


    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            <div className={`font-chakra-regular text-white w-full h-full text-xl p-1 mt-1`}>
                Para acessar a trilha, faça login para melhorar o gerenciamento do seu progresso. Vamos pra cima?
            </div>
            <div className="w-full mt-4 h-12 gap-x-5 flex items-center justify-between">
                <ButtonRedirect pathBack="/login" text="Não Tenho Conta" />
                <ButtonRedirect pathBack="/login" text="Fazer Login" />
            </div>
        </div>
    )
}

export default RedirectLogin;