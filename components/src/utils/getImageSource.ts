const IMAGE_URL = 'https://live.staticflickr.com/';

export const getImageSource = (server: string, id: string, secret: string): string => {
  return IMAGE_URL + server + '/' + id + '_' + secret + '.jpg';
};
