import { api } from '../services/BaseApi';
import Cookie from 'js-cookie';

interface IChallenge {
  id: number;
  title: string;
  description: string;
  level: number;
  necessaryKnowledges: { id: number; knowledge: string }[];
  materials: { id: number; title: string; link: string }[];
  quests: {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    order: number;
    steps: {
      id: number;
      description: string;
      expectedAnswer: string;
      command: string;
      isCompleted: boolean;
      order: number;
    }[];
  }[];
}

export const getChallenges = async (): Promise<IChallenge[]> => {
    try {
        const token = Cookie.get('token');
        
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await api({
            method: 'GET',
            url: 'Challenge',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        return response.data;
    } catch (error) {
        console.error('Error fetching challenges:', error);
        throw error;
    }
};
