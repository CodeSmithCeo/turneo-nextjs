"use client";

import { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/tailwind-cn";
import { createOrder } from "@/feature/order/actions"
import { travelerInformation, newOrder, booking as bookingMock } from "@/mock/new-order-data";
import { AvailabilityDetails, RateOption } from "@/app/api/types/experience-rates";
import { Experience } from "@/app/api/types/experience";

// Define button styles using cva
const buttonStyles = cva(
  "ml-4 px-4 py-2 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      state: {
        default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        loading: "bg-gray-300 text-gray-600 cursor-not-allowed",
        success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

type Props = {
  rate: RateOption;
  availability: AvailabilityDetails;
   experience: Experience;
}

const PostButton = ({ rate, availability, experience }: Props) => {
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    setLoading(true);

    const booking = {...bookingMock, rateId: rate.id,
      reseller: experience.organizer,
      availabilityId: availability.availabilityId
    }

    const data = {
      ...newOrder,
      travelerInformation,
      bookings: [
        booking
      ]
    }

    await createOrder(data);

    setLoading(false);
  };

  return (
    <button
      onClick={handlePost}
      disabled={loading}
      className={cn(
        buttonStyles({
          state: loading ? "loading" : "default",
        })
      )}
    >
      {loading ? "Processing..." : "Book"}
    </button>
  );
};

export default PostButton;
