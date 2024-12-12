type PaginationLinks = {
  next: string | null; // Link to the next set of paginated results
  previous: string | null; // Link to the previous set of paginated results
};

type AvailabilityDetails = {
  availabilityId: string; // Unique identifier for the availability
  availabilityStatus: 'SELLING' | 'SOLD_OUT' | 'UNAVAILABLE'; // Current status of the availability
  localTime: string; // Local time of the experience
  time: string; // UTC time of the experience
  availableQuantity: number; // The number of available spots for this time-slot
  discount: number; // Discount applicable for this availability
};

type RateOption = {
  id: string; // A unique identifier for the rate within the platform
  experienceId: string; // A unique identifier for the experience
  rateStatus: 'ACTIVE' | 'INACTIVE'; // Current status of the rate
  availableDates: AvailabilityDetails[]; // Array of available dates and times
  discount: number; // The highest discount that can be applied (0-100)
  rateName: string; // The name of the rate option
  rateCode: string | null; // Internal code to identify the rate
  maxParticipants: number; // Maximum number of participants
  availabilitySource: string | null; // Source of the availability information (e.g., Turneo)
  externalId: string | null; // External system identifier (UUID)
  availabilityType: 'LIVE' | 'ON_REQUEST'; // Type of booking (instant or approval required)
  duration: string; // Duration in HH:mm format
  note: string | null; // Special note to be sent to guests
  rateTypesPrices: RateOptionPrice[]; // Rate options and prices associated with each type
  bookingFields: BookingField[]; // List of fields for booking
  discounts: Discount[]; // List of discounts for different availability slots
  rateRules: RateRules; // Rules for booking
  openingTimes: OpeningTimes; // Time range for private requests
};

type RateOptionPrice = {
  id: string; // Unique identifier for the rate option price
  rateType: 'Adult' | 'Child' | 'Infant'; // Type of rate (e.g., Adult, Child, Infant)
  rateTypeDescription: string; // Description of the rate type
  rateTypeCategory: 'Person' | 'Group'; // Category of the rate type
  retailPrice: {
    amount: number; // Price amount
    currency: string; // Currency code (e.g., EUR)
  };
  nonCommissionable: boolean; // Indicates if the price is commissionable
};

type BookingField = {
  id: string; // Unique identifier for the booking field
  name: string; // Name of the field (e.g., StartingPoint)
  optional: boolean; // Whether the field is optional
  rateTypes: string[]; // Rate types associated with this field
};

type Discount = {
  id: string; // Unique identifier for the discount
  startDate: string; // Start date of the discount
  endDate: string; // End date of the discount
  fromTime: string; // Start time of the discount
  untilTime: string; // End time of the discount
  daysOfWeek: number[]; // Days of the week the discount applies to (0=Sunday, 6=Saturday)
  percentageAmount: number; // Discount percentage (0-100)
};

type RateRules = {
  individualBooking: boolean; // Whether individual bookings are allowed
  privateBooking: boolean; // Whether private bookings are allowed
  minimumGroupRetailPrice: {
    amount: number; // Minimum retail price for group bookings
    currency: string; // Currency code (e.g., EUR)
  };
  earlyBirdDiscount: {
    advanceDays: number; // Number of days in advance for early bird discount
    percentageAmount: number; // Early bird discount percentage
  };
};

type OpeningTimes = {
  fromTime: string; // Start time for the opening hours
  toTime: string; // End time for the opening hours
};

type ExperienceRatesResponse = {
  count: number; // Total count of objects found
  next: string | null; // Link to the next set of paginated results
  previous: string | null; // Link to the previous set of paginated results
  results: RateOption[]; // List of rate options for the experience
};
