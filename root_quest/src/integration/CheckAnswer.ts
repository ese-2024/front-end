import { api } from '../services/BaseApi';
import Cookie from 'js-cookie';

interface ICheckAnswer {
    stepId: number;
    submittedAnswer: string;
}

export const postCheckAnswer = async ({stepId, submittedAnswer} : ICheckAnswer) => {
  try {
    const token = Cookie.get('token');
    
    if (!token) {
      throw new Error("Token not found");
    }

    const response = await api({
      method: 'POST',
      url: 'Step/submit',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: {
        stepId,
        submittedAnswer
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error post answer: ", error);
    throw error;
  }
};
