type FinalPrice = {
  amount: number;
  currency: string;
};

type RateQuantity = {
  rateType: string;
  quantity: number;
};

type Reseller = {
  name: string;
  partnerId: string;
  logo: string;
  "<metadata>": string;
};

type TravelerInformation = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type AdditionalInformation = {
  startingPoint: string;
  endingPoint: string;
};

type Notes = {
  fromSeller: string;
  fromTraveler: string;
  fromOrganizer: string;
};

type MeetingPoint = {
  type: "CENTRAL_MEETING_POINT" | "OTHER_TYPE"; // Extend if needed
  address: string;
  description: string;
};

type Cancellation = {
  cancelledBy: string;
  cancelledAt: string; // ISO datetime
  cancelledReason: string;
  cancellationFeeAmount: number;
  cancellationFeeCurrency: string;
};

type PriceDetails = {
  finalRetailPrice: FinalPrice;
  netRate: FinalPrice;
  retailPriceBreakdown: {
    rateType: string;
    quantity: number;
    retailPrice: FinalPrice;
  }[];
};

type Payment = {
  processedBy: string;
  status: string;
  code: string;
};

type ExperienceDetails = {
  name: string;
  status: string;
  highlight: string;
  description: string;
  discount: number;
  commission: number;
  commissionSettings: {
    id: string;
    type: string;
    reseller: string;
    value: number;
  }[];
  included: {
    name: string;
    inclusionId: string;
  }[];
  excluded: {
    name: string;
    exclusionId: string;
  }[];
  images: {
    urlHigh: string;
    altText: string;
  }[];
  videos: string[];
  externalLinks: {
    type: string;
    name: string;
    value: string;
  }[];
  organizer: {
    name: string;
    partnerId: string;
    phone: string;
    partnerEmail: string;
    website: string;
    logo: string;
    aboutUs: string;
    partnerRating: number;
    partnerReviews: number;
  };
  categories: {
    theme: string[];
    type: string;
  };
  location: {
    city: string;
    country: string;
    address: string;
    latitude: number;
    longitude: number;
  };
  meetingPoints: {
    id: string;
    type: string;
    city: string;
    country: string;
    address: string;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    timeBeforeStart: number;
  }[];
  duration: {
    days: number;
    hours: number;
    minutes: number;
  };
  otherNotes: string;
  languages: string;
  code: string;
  cutOffTime: number;
  cancellationPolicy: number;
  availabilitySource: string;
  allowFreePickup: boolean;
  allowedPartners: string[];
  rating: {
    score: number;
    reviewsCount: number;
  };
};

type Booking = {
  id: string;
  availabilityId: string;
  ratesQuantity: RateQuantity[];
  reseller: Reseller;
  travelerInformation: TravelerInformation;
  additionalInformation: AdditionalInformation;
  notes: Notes;
  resellerReference: string;
  meetingPoint: MeetingPoint;
  bookingStatus: string;
  bookingCreated: string;
  bookingLastModified: string;
  localTime: string; // ISO datetime
  time: string; // ISO datetime
  privateGroup: boolean;
  cancellation: Cancellation;
  price: PriceDetails;
  payment: Payment;
  experience: ExperienceDetails;
};

export type Order = {
  id: string;
  status: string;
  finalPrice: FinalPrice;
  resellerReference: string;
  utmMedium: string;
  travelerInformation: TravelerInformation;
  bookings: Booking[];
};
