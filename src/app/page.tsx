import { api } from "@/app/api";
import ExperienceAvailability from "@/feature/experience/experience-availability";
import ExperienceDetails from "@/feature/experience/experience-details";

// Experience ID was given, rest is hardcoded for simplicity instead using shadcdn picker
// most likely the user already picked a period since the offer is presented to him
const EXPERIENCE_ID = '03c85fc5-c701-4f6f-81c5-d270b0601c9c';
const START_DATE = '2024-12-13';
const END_DATE = '2024-12-30';

const ExperienceDetailsPage = async () => {

  const experience = await api.experiences.getExperienceDetails(EXPERIENCE_ID);
  const availability = await api.experiences.getAvailabilityForExperience(EXPERIENCE_ID, START_DATE, END_DATE);


  return  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ExperienceDetails experience={experience} />
        <ExperienceAvailability experience={experience} rates={availability} />
      </main>
    </div>
}

export default ExperienceDetailsPage;