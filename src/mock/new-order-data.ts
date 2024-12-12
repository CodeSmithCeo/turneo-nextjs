export const travelerInformation = {
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@gmail.com",
  "phone": "+12 345 67890"
}

export const newOrder = {
  "emailNotification": [
    "user@example.com"
  ],
  "resellerReference": "string",
  "utmMedium": "string"
}

export const booking =  
    {
      "availabilityId": "00838357-2efa-44a6-9c29-1e68ec3bdef4",
      "ratesQuantity": [
        {
          "rateType": "Adult",
          "quantity": 2
        }
      ],
      "reseller": {
        "name": "food-and-wine.com",
        "partnerId": "62b0718d8bc044a531fc9894",
        "logo": "https://www.example.com/image.jpg",
        "<metadata>": "string"
      },
      "travelerInformation": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@gmail.com",
        "phone": "+12 345 67890"
      },
      "additionalInformation": {
        "startingPoint": "Main street",
        "endingPoint": "Airport"
      },
      "notes": {
        "fromSeller": "This is an imaginary person",
        "fromTraveler": "I am an imaginary person",
        "fromOrganizer": "Thank you for booking, imaginary person."
      },
      "resellerReference": "123456678",
      "meetingPoint": {
        "type": "CENTRAL_MEETING_POINT",
        "address": "Hathrow Terminal 4",
        "description": "Meeting at arrivals"
      },
      "privateGroup": {
        "privateRequested": true,
        "startingTime": "2022-07-20T12:30:00"
      }
    }
  