/* eslint-disable @typescript-eslint/no-explicit-any */

class HttpRequest {
  baseURL: string;

  constructor(options: any) {
    this.baseURL = options?.baseURL;
  }

  async fetch(resource: string, options?: any): Promise<any> {
    try {
      options = options || {};
      options.cache = options.cache || 'no-store';
      options.headers = {...{Accept: "application/json", "x-api-key": process.env.API_SECRET }, ...options.headers};


      // if (!(options.body instanceof FormData)) {
      //   options.headers['content-type'] = 'application/json';
      //   if (typeof options.body === 'object') {
      //     options.body = JSON.stringify(options.body);
      //   }
      // }

      const url = `${this.baseURL}/${resource}`;
      const fetchResult = await fetch(url, options);
      if (fetchResult.ok) {
        return options.response ? fetchResult : (await fetchResult.json()) || {};
      }
      throw new Error('Bad fetch response');
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { HttpRequest };
