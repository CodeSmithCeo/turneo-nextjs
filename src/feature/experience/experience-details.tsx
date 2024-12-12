import { Experience } from "@/api/types/experience";
import Image from "next/image";

export type Props = { experience: Experience };

const ExperienceDetails = ({ experience }: Props) => {
  return (
    <div>
      <h1>{experience.name}</h1>
      <p>{experience.description}</p>
      <p><strong>Highlight:</strong> {experience.highlight}</p>
      
      {experience.commissionSettings?.length > 0 && (
        <p><strong>Commission:</strong> {experience.commissionSettings[0]?.value}%</p>
      )}

      <h3>Included</h3>
      <ul>
        {experience.included.map((item) => (
          <li key={item.inclusionId}>{item.name}</li>
        ))}
      </ul>

      <h3>Images</h3>
      <div className="flex flex-wrap gap-4">
        {experience.images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={image.urlLow}
              alt={image.altText || `Image ${index + 1}`}
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
        ))}
      </div>

      <h3>Organizer</h3>
      <div>
        <Image 
          src={experience.organizer.logo} 
          alt={`${experience.organizer.name} Logo`} 
          width={100}            
          height={100}           
        />
        <p><strong>Name:</strong> {experience.organizer.name}</p>
        <p><strong>Email:</strong> {experience.organizer.partnerEmail}</p>
        <p>{experience.organizer.aboutUs}</p>
      </div>

      <h3>Categories</h3>
      <div>
        <strong>Type:</strong> {experience.categories.type}
        <br />
        <strong>Themes:</strong> {experience.categories.theme.join(", ")}
      </div>

      <h3>Location</h3>
      <p>
        {experience.location.city || 'N/A'}, 
        {experience.location.address || 'N/A'}, 
        {experience.location.country || 'N/A'}
      </p>

      <h3>Pricing</h3>
      <p>
        <strong>Price:</strong> {experience.minPrice.amount} {experience.minPrice.currency}
      </p>
    </div>
  );
};

export default ExperienceDetails;
