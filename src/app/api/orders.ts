import { HttpRequest } from './request';
import { OrderRequest } from './types/order-request';
import { Order } from './types/order'


class OrdersApi {
  client: HttpRequest;

  constructor(client: HttpRequest) {
    this.client = client;
  }

  async createOrder(orderData: OrderRequest): Promise<any> {
    return this.client.fetch(`orders`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
  }

}
export { OrdersApi };
