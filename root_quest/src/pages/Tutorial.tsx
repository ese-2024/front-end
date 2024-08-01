import TablePT from "../components/global/TablePT";
import Example from "../components/pag/Lesson/Example";

function Tutorial() {

    const items = [
        { text: 'Utilizando o comando ls -l, verifique as permissões atuais do arquivo dados.txt.' },
        { text: 'Utilize o comando chmod para configurar as permissões corretas para o arquivo dados.txt de acordo com as especificações acima.' },
        { text: 'Após aplicar as permissões, verifique novamente as permissões do arquivo para garantir que foram configuradas corretamente.' }
      ];

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  TUTORIAL</h1>
            </div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
               <TablePT type="Comando" command="chmod" textButton1="Voltar para o lob" textButton2="Ir para a prática" children={<Example 
                description="Você está trabalhando em um sistema Linux e precisa configurar 
                as permissões de acesso para um arquivo chamado dados.txt de forma que apenas o proprietário possa ler, escrever e executar 
                o arquivo, enquanto o grupo associado ao arquivo possa apenas ler e executar, e os outros usuários não tenham permissão de 
                acesso." items={items} answer="chmod 750 dados.txt"/>}/>
            </div>
        </div>
    )
}

export default Tutorial;