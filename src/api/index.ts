import { ExperiencesApi } from './experiences';
import { HttpRequest } from './request';

class Api {

  experiences: ExperiencesApi;
  
  constructor() {
    const baseURL = process.env.API_URL || '';
    if (!baseURL) throw new Error('API_URL is not propperly set in env');
    const client = new HttpRequest({ baseURL });
 
    this.experiences = new ExperiencesApi(client);
  }
}

const api = new Api();

export { api };
