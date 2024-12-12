import {datetimeStringToDate, formatDuration} from '@/utils/date-time';
import PostButton from './schedule-button';

export type Props = {
  rates: ExperienceRates
}

const ExperienceAvailability =  ({ rates }: Props) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Experience Availability</h1>
      <div className="text-gray-600">
        <p>Total Rates Found: {rates?.count}</p>
        <div className="flex justify-between mt-4">
          {rates.previous && (
            <a href={rates.previous} className="text-blue-500">
              Previous
            </a>
          )}
          {rates.next && (
            <a href={rates.next} className="text-blue-500">
              Next
            </a>
          )}
        </div>
      </div>
      <div className="space-y-8">
        {rates.results.map((rate) => (
          <div key={rate.id} className="p-4 border rounded-md shadow-sm bg-white">
            <h2 className="text-xl font-semibold"><strong>{String(rate.rateName)}</strong></h2>
            <p><strong>Rate Status:</strong> {String(rate.rateStatus)}</p>
            <p><strong>Rate Code:</strong> {rate.rateCode ? String(rate.rateCode) : "N/A"}</p>
            <p><strong>Max Participants:</strong> {rate.maxParticipants}</p>
            <p><strong>Availability Type:</strong> {String(rate.availabilityType)}</p>
            <p><strong>Duration:</strong> {formatDuration(rate.duration)}</p>
            <p><strong>Note:</strong> {rate.note ? String(rate.note) : "No special note"}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold"><strong>Available Dates (local time)</strong></h3>
              {rate.availableDates?.length > 0 ? (
                <ul className="space-y-2">
                  {rate.availableDates.map((availability) => (
                    <li key={availability.availabilityId} className="flex justify-between">
                      <span>{datetimeStringToDate(availability.localTime)}</span>
                      <span>
                        &nbsp; ({availability.availableQuantity} spots)
                        {availability.discount > 0 && ` | Discount: ${availability.discount}%`}
                      </span>
                      <PostButton availabilityId={availability.availabilityId} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No available dates</p>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold"><strong>Rate Types and Prices</strong></h3>
              <ul className="space-y-2">
                {rate.rateTypesPrices.map((price) => (
                  <li key={price.id} className="flex justify-between">
                    <span>{String(price.rateType)}: {String(price.rateTypeDescription)}</span>
                    <span>
                      {price.retailPrice.amount} {String(price.retailPrice.currency)}{" "}
                      {price.nonCommissionable ? "(Non-Commissionable)" : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold"><strong>Discounts</strong></h3>
              {rate.discounts?.length > 0 ? (
                <ul className="space-y-2">
                  {rate.discounts.map((discount) => (
                    <li key={discount.id} className="flex justify-between">
                      <span>
                        {String(discount.startDate)} - {String(discount.endDate)} | {discount.percentageAmount}% off
                      </span>
                      <span>{discount.daysOfWeek.join(", ")}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No discounts available</p>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold"><strong>Booking Rules</strong></h3>
              <p><strong>Individual Booking:</strong> {rate.rateRules?.individualBooking ? "Allowed" : "Not Allowed"}</p>
              <p><strong>Private Booking:</strong> {rate.rateRules?.privateBooking ? "Allowed" : "Not Allowed"}</p>
              <p><strong>Minimum Group Price:</strong> {rate.rateRules?.minimumGroupRetailPrice.amount} {String(rate.rateRules?.minimumGroupRetailPrice.currency)}</p>
              <p><strong>Early Bird Discount:</strong> {rate.rateRules?.earlyBirdDiscount?.percentageAmount}% off (Advance Days: {rate.rateRules?.earlyBirdDiscount?.advanceDays})</p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold"><strong>Opening Times</strong></h3>
              <p><strong>From:</strong> {String(rate.openingTimes?.fromTime)} | <strong>To:</strong> {String(rate.openingTimes?.toTime)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceAvailability;
