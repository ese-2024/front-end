import { api } from '../services/BaseApi';
import Cookie from 'js-cookie';

interface IRankingResponse {
    position: number;
    name: string;
    score: number;
    completedChallenges: number;
}

export const getRanking = async (): Promise<IRankingResponse[]> => {
  try {
    const token = Cookie.get('token');
    
    if (!token) {
      throw new Error("Token not found");
    }

    const response = await api({
      method: 'GET',
      url: 'Ranking',
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