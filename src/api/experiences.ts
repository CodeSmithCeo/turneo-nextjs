import { HttpRequest } from './request';
import { Experience } from './types/experience';
import { buildQueryParams } from '@/utils/url-query'


class ExperiencesApi {
  client: HttpRequest;

  constructor(client: HttpRequest) {
    this.client = client;
  }

  async getExperienceDetails(id: string): Promise<Experience> {
    return await this.client.fetch(`experiences/${id}`);
  }

  async getAvailabilityForExperience(experienceId: string, from: string, until: string): Promise<ExperienceRates> {
    const query = buildQueryParams([{name: "from", value: from}, {name: "until", value: until}]);
    return await this.client.fetch(`experiences/${experienceId}/rates${query}`);
  }
}
export { ExperiencesApi };
