/* eslint-disable @typescript-eslint/no-explicit-any */

class HttpRequest {
  baseURL: string;

  constructor(options: any) {
    this.baseURL = options?.baseURL;
  }

  async fetch(resource: string, options?: any): Promise<any> {
    try {
      options = options || {};
      //options.cache = options.cache || 'no-store';
      options.headers = {...{'Accept': "application/json", "x-api-key": process.env.API_SECRET }, ...options.headers};
      
      const url = `${this.baseURL}/${resource}`;

      const fetchResult = await fetch(url, options);

      // primitive error handling
      if (!fetchResult.ok) {
        // If the response is not OK (status code not in the range 200-299), log it
        const errorText = await fetchResult.text();
        console.error('Fetch error response:', errorText);
        throw new Error(`Request failed with status: ${fetchResult.status}`);
      } else {
        return options.response ? fetchResult : (await fetchResult.json()) || {};
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { HttpRequest };
