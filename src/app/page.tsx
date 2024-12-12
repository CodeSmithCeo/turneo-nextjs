import { api } from "@/api";
import { Experience } from "@/api/types/experience";
import ExperienceDetails from "@/feature/experience/experience-details";

const EXPERIENCE_ID = '03c85fc5-c701-4f6f-81c5-d270b0601c9c';

const ExperienceDetailsPage = async () => {

  const experience = await api.experiences.getExperienceDetails(EXPERIENCE_ID);
  const availability = await api.experiences.getAvailabilityForExperience(EXPERIENCE_ID, '2024-11-11', '2024-12-12');

  console.log(availability);

  return  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <ExperienceDetails experience={experience} />
           
      </main>
    </div>
}

export default ExperienceDetailsPage;