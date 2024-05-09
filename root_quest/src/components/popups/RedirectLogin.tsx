import Button from "../global/Button";

function RedirectLogin() {

    const handleClick = () => {
        console.log('teste')
    }

    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            <div className={`font-chakra-regular text-white w-full h-full text-xl p-1 mt-1`}>
                Para acessar a trilha, faça login para melhorar o gerenciamento do seu progresso. Vamos pra cima?
            </div>
            <div className="w-full mt-4 h-12 gap-x-5 flex items-center justify-between">
                <Button text="Não Tenho Conta" handleFunction={handleClick}/>
                <Button text="Fazer Login" handleFunction={handleClick}/>
            </div>
        </div>
    )
}

export default RedirectLogin;