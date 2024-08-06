import { useState } from "react";
import TablePT from "../components/global/TablePT";
import Example from "../components/pag/Lesson/Example";

interface IKnowledge {
    id: number; 
    knowledge: string;
}

function Tutorial() {
    const [accept, setAccept] = useState(false);
    const [error, setError] = useState(false);
    const [knowledge, setKnowledge] = useState<IKnowledge[]>([]);

    const items = [
        { text: 'Utilizando o comando ls -l, verifique as permissões atuais do arquivo dados.txt.' },
        { text: 'Utilize o comando chmod para configurar as permissões corretas para o arquivo dados.txt...' },
        { text: 'Após aplicar as permissões, verifique novamente as permissões do arquivo para garantir ...' }
      ];

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  TUTORIAL</h1>
            </div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
               <TablePT 
                type="Comando" 
                command="chmod" 
                textButton1="Voltar para o lob" 
                textButton2="Ir para a prática" 
                knowledge={knowledge}
                accept={accept}
                errorState={error}
                on2={() => console.log('asd')}
                isButton2Disabled={!accept} // Passando a prop
                children={<Example 
                    description="Você está trabalhando em um sistema Linux e precisa configurar 
                    as permissões de acesso para um arquivo chamado dados.txt de forma que apenas o proprietário possa ler, escrever e executar 
                    o arquivo, enquanto o grupo associado ao arquivo possa apenas ler e executar, e os outros usuários não tenham permissão de 
                    acesso." 
                items={items} 
                answer="chmod 750 dados.txt"/>}/>
            </div>
        </div>
    )
}

export default Tutorial;