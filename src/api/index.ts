import { ExperiencesApi } from './experiences';
import { OrdersApi } from './orders';
import { HttpRequest } from './request';

class Api {

  experiences: ExperiencesApi;
  orders: OrdersApi;
  
  constructor() {
    const baseURL = process.env.API_URL || '';
    if (!baseURL) throw new Error('API_URL is not properly set in env');
    const client = new HttpRequest({ baseURL });
 
    this.experiences = new ExperiencesApi(client);
    this.orders = new OrdersApi(client);
  }
}

const api = new Api();

export { api };
