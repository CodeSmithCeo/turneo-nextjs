type TravelerInformation = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
  type: "CENTRAL_MEETING_POINT" | "OTHER_TYPE"; // Extend with additional types if needed
  address: string;
  description: string;
};

type PrivateGroup = {
  privateRequested: boolean;
  startingTime: string; // ISO 8601 datetime string
};

type Booking = {
  availabilityId: string;
  ratesQuantity: RateQuantity[];
  reseller: Reseller;
  travelerInformation: TravelerInformation;
  additionalInformation: AdditionalInformation;
  notes: Notes;
  resellerReference: string;
  meetingPoint: MeetingPoint;
  privateGroup: PrivateGroup;
};

export type OrderRequest = {
  travelerInformation: TravelerInformation;
  bookings: Booking[];
  emailNotification: string[];
  resellerReference: string;
  utmMedium: string;
};
