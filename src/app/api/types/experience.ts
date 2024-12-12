// EXPERIENCE

type UUID = string;

type CommissionSetting = {
  id: UUID;
  type: 'MARKETPLACE' | 'RESELLER';
  reseller: string | null;
  value: number; // value between 0 and 100
};

type Inclusion = {
  name: string;
  inclusionId: UUID;
};

type Exclusion = {
  name: string;
  exclusionId: UUID;
};

type Image = {
  urlHigh: string;
  urlLow: string;
  altText: string; // max 120 characters
};

type ExternalLink = {
  type: 'EXTERNAL_ID';
  name: string | null;
  value: string;
};

type Partner = {
  name: string;
  partnerId: UUID;
  phone: string;
  partnerEmail: string;
  website: string;
  logo: string;
  aboutUs: string;
};

type Category = {
  theme: string[];
  type: string;
};

type LocationDetails = {
  city: string | null;
  country: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
};

type MeetingPoint = {
  id: UUID;
  type: 'CENTRAL_MEETING_POINT' | 'HOTEL_PICKUP';
  city: string | null;
  country: string | null;
  address: string | null;
  title: string | null;
  description: string | null;
  latitude: number | null;
  longitude: number | null;
  timeBeforeStart: number; // in minutes
};

type Duration = {
  days: number;
  hours: number;
  minutes: number;
};

type Rating = {
  score: number; // value between 1 and 5, with one decimal
  reviewsCount: number;
};

type Localized = {
  language: string;
  status: string;
};

type Price = {
  amount: number; // in double precision
  currency: string; // ISO 4217 currency code
};

export type Experience = {
  id: UUID;
  name: string;
  status: 'DRAFT' | 'ACTIVE' | 'INACTIVE';
  highlight: string;
  description: string;
  discount: number; // between 0 and 100
  commission: number; // deprecated
  commissionSettings: CommissionSetting[];
  included: Inclusion[];
  excluded: Exclusion[];
  images: Image[];
  videos: string[];
  externalLinks: ExternalLink[];
  organizer: Partner;
  categories: Category;
  location: LocationDetails;
  meetingPoints: MeetingPoint[];
  duration: Duration;
  otherNotes: string;
  languages: string[];
  code: string;
  cutOffTime: number; // in hours
  cancellationPolicy: number | null; // in hours
  availabilitySource: string;
  allowFreePickup: boolean;
  allowedPartners: string[] | null;
  rating: Rating | null; // deprecated
  likelyToSellOut: boolean;
  popular: boolean;
  exclusive: boolean;
  private: 'YES' | 'NO' | 'ONLY_PRIVATE';
  minPrice: Price;
  availableFrom: string | null;
  localized: Localized[];
};
