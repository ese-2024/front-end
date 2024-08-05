import { api } from '../services/BaseApi';
import Cookie from 'js-cookie';

// login

interface IAuthParams {
    userName: string;
    password: string;
  }

interface IAuth {
    method: string;
    params: IAuthParams;
}

export const authenticate = async ({method, params}: IAuth) => {
    try {
      const response = await api({
        method: method,
        url: 'Auth/login',
        data: params,
      });
      const token = response.data.token; // Atualizado para 'access_token' conforme Swagger
      if (token) {
        Cookie.set('token', token);
      }
      return response.data;
    } catch (error) {
      console.error("Authentication error: ", error);
      throw error;
    }
};

// register

interface IRegisterParams {
  userName: string;
  password: string;
}

interface IRegister {
  method: string;
  params: IRegisterParams;
}

export const registerUser = async ({ method, params }: IRegister) => {
  try {
    const response = await api({
      method: method,
      url: 'Auth/register',
      data: params,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error: ", error);
    throw error;
  }
};
