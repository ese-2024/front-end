function Example() {
    return (
        <div className="w-full">
            <p className="font-chakra-medium text-xl text-hulk">Exemplo:</p>
            <div className="w-full min-h-40 mt-2 flex items-center flex-col bg-colorPopup rounded-lg">
                <p className="w-[96%] font-chakra-regular text-textC text-lg mt-4">Você está trabalhando em um sistema Linux e precisa configurar 
                as permissões de acesso para um arquivo chamado dados.txt de forma que apenas o proprietário possa ler, escrever e executar 
                o arquivo, enquanto o grupo associado ao arquivo possa apenas ler e executar, e os outros usuários não tenham permissão de 
                acesso.</p>
                <ol className="font-chakra-regular text-lg text-textC mt-3 mb-8 list-decimal">
                    <li>Utilizando o comando ls -l, verifique as permissões atuais do arquivo dados.txt.</li>
                    <li>Utilize o comando chmod para configurar as permissões corretas para o arquivo dados.txt de acordo com as especificações acima.</li>
                    <li>Após aplicar as permissões, verifique novamente as permissões do arquivo para garantir que foram configuradas corretamente.</li>
                </ol>
                <p className="w-[96%] h-9 flex items-center bg-colorSide rounded-md border-[1px] border-lineBorder font-chakra-regular text-textC px-8 mb-6">chmod 750 dados.txt</p>
            </div>
        </div>
    )
}

export default Example;