import { api } from '../services/BaseApi';
import Cookie from 'js-cookie';

interface IUserResponse {
  userName: string;
  score: number;
  // Adicione outros campos do usuário conforme necessário
}

export const getUserData = async (): Promise<IUserResponse> => {
  try {
    const token = Cookie.get('token');
    
    if (!token) {
      throw new Error("Token not found");
    }

    const response = await api({
      method: 'GET',
      url: 'Users/me',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user data: ", error);
    throw error;
  }
};
