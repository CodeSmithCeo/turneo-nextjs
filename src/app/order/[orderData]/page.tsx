const OrderPage = ({ params, searchParams }: { params: { orderId: string }; searchParams: any }) => {
  const orderData = searchParams.orderData ? JSON.parse(searchParams.orderData) : null;

  if (!orderData) return <div>
    <h1>Order ID: {params.orderId}</h1>
  </div>

  // fetch and filter bookings - API is different I am leaving it as it is
  // I could have packed valuable data with order info in the url
  // Ideally GET orders should be implemented with the order Id only thing needed here in order to use Next app router efficiently
  // alternatively this is on the same page which kinda pushes the page towards CSR (it keeps the state) 

  return <div className="p-4 border border-gray-200 rounded-md shadow-md">
    <h2 className="text-xl font-semibold mb-4">Order Details</h2>

    <div className="space-y-3">
          <div>
            <strong>Traveler Information:</strong>
            <div>
              <strong>Name:</strong> {orderData.travelerInformation.firstName} {orderData.travelerInformation.lastName}
            </div>
            <div>
              <strong>Email:</strong> {orderData.travelerInformation.email}
            </div>
            <div>
              <strong>Phone:</strong> {orderData.travelerInformation.phone}
            </div>
          </div>
          <div>
            <strong>Bookings:</strong> <span>{orderData.bookings.join(", ")}</span>
          </div>
          <div>
            <strong>Status:</strong> <span>{orderData.status}</span>
          </div>
          <div>
            <strong>Final Price:</strong> <span>{`${orderData.finalPrice.amount} ${orderData.finalPrice.currency}`}</span>
          </div>
          <div>
            <strong>Reseller Reference:</strong> <span>{orderData.resellerReference}</span>
          </div>
          <div>
            <strong>UTM Medium:</strong> <span>{orderData.utmMedium}</span>
          </div>
          <div>
            <strong>UTM Source:</strong> <span>{orderData.utmSource ?? "N/A"}</span>
          </div>
          <div>
            <strong>Reseller:</strong> <span>{orderData.reseller ?? "N/A"}</span>
          </div>
          <div>
            <strong>Email Notifications:</strong> <span>{orderData.emailNotification.join(", ")}</span>
          </div>
          <div>
            <strong>Base Price:</strong> <span>{orderData.basePrice}</span>
          </div>
          <div>
            <strong>Booking Source:</strong> <span>{orderData.bookingSource ?? "N/A"}</span>
          </div>
    </div>

  </div>
};
export default OrderPage;
