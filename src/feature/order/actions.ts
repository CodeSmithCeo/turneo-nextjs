'use server';

import { api } from "@/app/api";
// not needed here but post voudl certainly invalidate some routes in real app
import { revalidatePath } from 'next/cache';
// tried to make type out of docs - did not match - decided not to waste more time on this
import { OrderRequest } from "@/app/api/types/order-request";
import { redirect } from "next/navigation";

export async function createOrder(requestData: any) {
  let data;
  try {
    data = await api.orders.createOrder(requestData);
  } catch (error) {
    console.log(error);
  }

  if (!data) return; 

  const orderData = {
    travelerInformation: data.travelerInformation,
    bookings: data.bookings.map(db => db.id),
    status: data.status,
    finalPrice: data.finalPrice,
    resellerReference: data.resellerReference,
    utmMedium: data.utmMedium,
    utmSource: data.utmSource,
    reseller: data.reseller,
    emailNotification: data.emailNotification,
    basePrice: data.basePrice,
    bookingSource: data.bookingSource
  }

  if (data) return redirect(`/order/${data.id}?orderData=${JSON.stringify(orderData)}`);
}