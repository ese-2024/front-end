import { useState } from "react";
import BackIcon from "../../public/icons/BackIcon";
import Popup from "../components/global/PopupBase";
import Card from "../components/global/Card";
import Lesson from "../components/pag/Lesson/RedirectLesson";
import TablePT from "../components/global/TablePT";
import Example from "../components/pag/Lesson/Example";
import CardTask from "../components/global/CardTask";

function Practice() {

    const [back, setBack] = useState(false);

    const items = [
        { text: 'Utilizando o comando ls -l, verifique as permissões atuais do arquivo dados.txt.' },
        { text: 'Utilize o comando chmod para configurar as permissões corretas para o arquivo dados.txt de acordo com as especificações acima.' },
        { text: 'Após aplicar as permissões, verifique novamente as permissões do arquivo para garantir que foram configuradas corretamente.' }
      ];

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col overflow-y-auto">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-[87px]">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST  -  PRACTICE</h1>
                <button className="flex items-center justify-center bg-colorPopup w-14 h-12 rounded-lg hover:bg-opacity-85 transition-all ease-in-out" onClick={() => setBack(true) }>
                    <BackIcon/>
                </button>
            </div>
            <div className="w-11/12 flex flex-col items-center justify-center gap-y-16 mt-10">
            <TablePT type="Nível 1" command="Chmod" textButton1="Cancelar" textButton2="Próximo Nível" children={<CardTask description="Você está trabalhando em um sistema Linux e precisa configurar 
                as permissões de acesso para um arquivo chamado dados.txt de forma que apenas o proprietário possa ler, escrever e executar 
                o arquivo, enquanto o grupo associado ao arquivo possa apenas ler e executar, e os outros usuários não tenham permissão de 
                acesso." items={items}/>}/>
            </div>
            {back && (
                <Popup onClose={() => setBack(false)}>
                    {/* <RedirectLogin/> */}
                    <Card title="Voltar" onClose={() => setBack(false)} children={<Lesson onClose={() => setBack(false)}/>}/>
                </Popup>
            )}
        </div>
    )
}

export default Practice;