import TypeAndDelete from "../components/TypeAndDelete";
import LogoLinux from "../../public/LogoLinux.png";
import { useState } from "react";
import Popup from "../components/global/PopupBase";
import RedirectLogin from "../components/popups/RedirectLogin";
import Card from "../components/global/Card";
import ButtonHulk from "../components/global/buttons/ButtonHulk";
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';

function Home() {

    const [isViewLogin, setIsViewLogin] = useState(false);
    const handlePopupLogin = () => {
        setIsViewLogin((prev) => !prev);
    }

    const hasCookie = Cookie.get('token');
    const navigate = useNavigate();
    const navigateToBattle = () => {
        navigate('/battle');
    };

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-between h-24 ">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST</h1>
                {!hasCookie ? 
                    <button className="w-32 h-11 border-[3px] border-hulk rounded-lg flex items-center justify-center font-chakra-medium hover:font-chakra-semibold
                    text-hulk text-lg hover:bg-hulk transition-all ease-in hover:text-colorBase" onClick={handlePopupLogin}>Login</button>
                    :
                    null
                }
            </div>
            <div className="w-11/12 h-full flex mb-5">
                <div className="w-9/12 flex items-start justify-center flex-col h-full">
                    <div className="w-full font-chakra-bold text-6xl 2xl:text-8xl text-textC uppercase">
                        Desbloqueie o Poder <br/> dos Comandos <br/><span className="text-hulk">Linux</span>.
                    </div>
                    <div className="h-24 w-8/12 font-chakra-bold text-4xl text-textC uppercase"><TypeAndDelete text="Pratique assuntos complexos de Forma Prática e Divertida!" /></div>
                    <div>
                    {!hasCookie ? 
                        <ButtonHulk text="Ir para minha trilha" handleFunction={handlePopupLogin}/>
                        :
                        <ButtonHulk text="Ir para minha trilha" handleFunction={navigateToBattle}/>
                    }
                    </div>
                </div>
                <div className="w-4/12 h-5/6 flex items-end justify-end">
                    <img src={LogoLinux}></img>    
                </div>
            </div>
            {isViewLogin && (
                <Popup onClose={handlePopupLogin}>
                    {/* <RedirectLogin/> */}
                    {/* <Success textBt="Ok" title="Usuário enserido" description="Faça login no site e começe sua trilha épica." onClick={handlePopupLogin}/> */}
                    {/* <Error textBt="Tentar novamente" title="Erro durante login" description="Verifique sue Nickname e Senha e tente novamente." onClick={handlePopupLogin}/> */}
                    <Card title="Login Necessário" onClose={handlePopupLogin} children={<RedirectLogin/>}/>
                </Popup>
            )}
        </div>
    )
}

export default Home;