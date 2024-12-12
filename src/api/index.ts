import { CompaniesApi } from './companies';
import { HttpRequest } from './request';

class Api {

  companies: CompaniesApi;
  
  constructor() {
    const baseURL = process.env.API_URL || '';
    if (baseURL) throw new Error('API_URL is not propperly set in env');
    const client = new HttpRequest({ baseURL });
 
    this.companies = new CompaniesApi(client);
  }
}

const api = new Api();

export { api };
