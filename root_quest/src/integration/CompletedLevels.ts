import { api } from '../services/BaseApi';
import Cookie from 'js-cookie';

interface ICompletedLevels {
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

export const getCompletedLevels = async (): Promise<ICompletedLevels[]> => {
    try {
        const token = Cookie.get('token');
        
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await api({
            method: 'GET',
            url: 'UserProgress/quests/completed',
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
