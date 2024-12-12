// simple reuseable query builder from objects

const buildQueryParams = (params: { name: string; value: string | undefined }[]): string  => {
  // Filter out entries where the value is null or undefined, and build the query string
  
  const query = params
    .filter(({ value }) => value !== undefined && value !== null)
    .map(({ name, value }) => `${name}=${value}`)
    .join('&');

  // no params - no need for ?
  return query ? `?${query}` : '';
}

export {buildQueryParams}