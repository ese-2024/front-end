import Back from "../components/global/Back";
import ButtonHulk from "../components/global/buttons/ButtonHulk";
import InputText from "../components/inputs/InputText";
import { authenticate } from '../integration/Auth';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from "react";
import loadingImg from '../../public/loaderBlack.png'
import Popup from "../components/global/PopupBase";
import Error from "../components/global/feedbacks/Error";

function Login() {
    const [nickName, setNickName] = useState(''); // Nickname é userName
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await authenticate({ method: 'post', params: { userName: nickName, password } }); // Alterar para userName
            navigate('/ranking');
        } catch (error) {
            // navigate('/');
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleNickNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <div className="bg-colorBase h-full w-full flex justify-center items-center flex-col">
            <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-end h-24">
                <Back pathBack="/"/>
            </div>
            <div className="w-11/12 h-full flex items-center justify-center">
                <div className=" bg-colorSide w-[400px] 2xl:w-[500px] pb-10 border-[1px] border-lineBorder rounded-lg flex flex-col -mt-14">
                    <h3 className="text-4xl text-textC font-chakra-medium pl-7 pt-5 pb-2">Acesse sua conta</h3>
                    <div className="px-7 pt-5 ">
                        <InputText type="text" name="nickname" text="Nickname" placeholder="Seu Nickname" value={nickName} onChange={handleNickNameChange}/>
                        <InputText type="password" name="senha" text="Senha" placeholder="Sua Senha" value={password} onChange={handlePasswordChange}/>
                        <div className="mt-14">
                            <ButtonHulk text={loading ? (<img src={loadingImg} alt="Loading" className="animate-spin w-9 h-9"></img>) : ("Entrar")} handleFunction={handleLogin}/>
                        </div>
                    </div>
                </div>
            </div>
            {error && (
                <Popup onClose={() => setError(false)}>
                    <Error textBt="Tentar novamente" title="Erro durante login" description="Verifique sue Nickname e Senha e tente novamente." onClick={() => setError(false)}/>
                </Popup>
            )}
        </div>
    );
}

export default Login;
