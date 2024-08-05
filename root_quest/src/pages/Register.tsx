import { ChangeEvent, useState, useEffect } from "react";
import Back from "../components/global/Back";
import ButtonHulk from "../components/global/buttons/ButtonHulk";
import InputText from "../components/inputs/InputText";
import { registerUser } from '../integration/Auth';
import loadingImg from '../../public/loaderBlack.png'
import Popup from "../components/global/PopupBase";
import Error from "../components/global/feedbacks/Error";
import Success from "../components/global/feedbacks/Success";
import { useNavigate } from 'react-router-dom';


function Register() {
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmEnabled, setPasswordConfirmEnabled] = useState(false);
  const [passwordConfirmBorder, setPasswordConfirmBorder] = useState('border-lineBorder');
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();


  const handleNickNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordConfirmEnabled(newPassword.length >= 7);
    if (passwordConfirm.length > 0) {
      setPasswordConfirmBorder(newPassword === passwordConfirm ? 'border-lineBorder' : 'border-red-500');
    }
  };

  const handlePasswordConfirmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = event.target.value;
    setPasswordConfirm(confirmPassword);
    setPasswordConfirmBorder(password === confirmPassword ? 'border-lineBorder' : 'border-red-500');
  };

  const handlePasswordConfirmFocus = () => {
    if (passwordConfirm.length === 0) {
      setPasswordConfirmBorder('border-red-500');
    }
  };

  const handleRegister = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await registerUser({ method: 'POST', params: { userName: nickName, password: password } });
      setSuccess(true);
    } catch (error) {
      setError(true);
    }finally{
      setLoading(false);
    }
  };

  const redirect = () => {
    setSuccess(false); 
    navigate('/');
  }

  useEffect(() => {
    setIsFormValid(nickName.length > 5 && password.length >= 7 && password === passwordConfirm);
  }, [nickName, password, passwordConfirm]);

  return (
    <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col">
      <div className="pt-8 2xl:pt-10 w-11/12 flex items-center justify-end h-24">
        <Back pathBack="/" />
      </div>
      <div className="w-11/12 h-full flex items-center justify-center">
        <div className="bg-colorSide w-[450px] pb-10 border-[1px] border-lineBorder rounded-lg flex flex-col -mt-14">
          <h3 className="text-3xl text-textC font-chakra-medium pl-7 pt-5 pb-2">Cadastre-se gratuitamente</h3>
          <div className="px-7 pt-5 ">
            <InputText type="text" name="nickname" text="Nickname" placeholder="Seu Nickname" value={nickName} onChange={handleNickNameChange} />
            <div className="w-full flex flex-col pt-4">
              <p className="pb-1 text-white font-chakra-regular">Senha*</p>
              <input
                type="password"
                name="senha"
                placeholder="Deve ter no mínimo 7 caracteres"
                value={password}
                onChange={handlePasswordChange}
                className="outline-none bg-colorPopup w-full h-9 border-[1px] border-lineBorder rounded-md px-4 text-textC font-chakra-regular"
              />
            </div>
            <div className="w-full flex flex-col pt-4">
              <p className="pb-1 text-white font-chakra-regular">Confirme sua senha*</p>
              <input
                type="password"
                name="confirmSenha"
                placeholder="Deve ter no mínimo 7 caracteres"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                onFocus={handlePasswordConfirmFocus}
                className={`outline-none bg-colorPopup w-full h-9 border-[1px] ${passwordConfirmBorder} rounded-md px-4 text-textC font-chakra-regular`}
                disabled={!passwordConfirmEnabled}
              />
            </div>
            <div className="mt-14">
              <ButtonHulk text={loading ? (<img src={loadingImg} alt="Loading" className="animate-spin w-9 h-9"></img>) : ("Entrar")} handleFunction={handleRegister} disabled={!isFormValid} />
            </div>
          </div>
        </div>
      </div>
      {error && (
        <Popup onClose={() => setError(false)}>
            <Error textBt="Tentar novamente" title="Erro durante cadastro" description="Tente realizar seu cadastro utilizando dados diferentes dos atuais." onClick={() => setError(false)}/>
        </Popup>
      )}
      {success && (
        <Popup onClose={() => setSuccess(false)}>
            <Success textBt="Ok" title="Cadastro realizado" description="Faça login no site e começe sua trilha épica." onClick={redirect}/>
        </Popup>
      )}
    </div>
  );
}

export default Register;
