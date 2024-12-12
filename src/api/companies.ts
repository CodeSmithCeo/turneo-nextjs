import { HttpClient } from './request';


class CompaniesApi {
  client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getAll(page: number = 1, limit: number = 30): Promise<any[]> {
    return await this.client.fetch(`/user/v1/companies?page=${page}&limit=${limit}`);
  }
}

export { CompaniesApi };
