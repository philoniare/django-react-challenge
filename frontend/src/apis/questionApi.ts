import Api from './index';

interface QuestionResponse {
  questions: any[];
}

interface QuestionBody {
  title: string;
  prompt: string;
}

const route = '/questions';
const questionApi = {
  getAll(): Promise<QuestionResponse> {
    return Api.get(route);
  },

  create({ title, prompt }: QuestionBody): Promise<any> {
    return Api.post(route, {
      title,
      prompt,
    });
  },
};

export default questionApi;
