import { HttpRequest } from './request';
import { OrderRequest } from './types/order-request';
import { Order } from './types/order'


class OrdersApi {
  client: HttpRequest;

  constructor(client: HttpRequest) {
    this.client = client;
  }

  async postOrder(orderData: OrderRequest): Promise<Order> {
    return this.client.fetch(`/orders`, {
      method: 'POST',
      "Content-Type": "application/json"
    });
  }
}
export { OrdersApi };
