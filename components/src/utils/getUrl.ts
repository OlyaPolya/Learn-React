type BaseParams = {
  baseUrl: string;
};

enum QueryKeys {
  TEXT = 'text',
  PAGE = 'page',
  SORT = 'sort',
  PER_PAGE = 'per_page',
}

const URLSearchParams = {
  api_key: 'a878977d69bd49afb645f6ab6eca4065',
  privacy_filter: '1',
  nojsoncallback: '1',
  method: 'flickr.photos.search',
  media: 'photos',
  format: 'json',
  extras: 'description,owner_name,views',
};

const UrlToParamsMap = {
  [QueryKeys.TEXT]: 'searchValue',
  [QueryKeys.PAGE]: 'currentPage',
  [QueryKeys.PER_PAGE]: 'perPage',
  [QueryKeys.SORT]: 'sortType',
};

export const getURL = <T extends BaseParams>(params: T): string => {
  const requestParams = Object.entries(URLSearchParams).reduce((result, [key, value]) => {
    return `${result}${key}=${value}&`;
  }, '');

  return Object.values(QueryKeys).reduce((acc, key) => {
    acc += `&${key}=${
      params[UrlToParamsMap[key as unknown as QueryKeys] as keyof BaseParams] as unknown
    }`;
    return acc;
  }, `${params.baseUrl}${requestParams}`);
};
