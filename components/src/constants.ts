import { Link } from './types';

export const MAX_RATE = 5;

export const Paths = {
  home: '/',
  notFound: '*',
  about: '/about',
  reviews: '/reviews',
  getPhotoPath: (id: string) => `/photos/${id}`,
};

export const LINKS: Link[] = [
  { url: Paths.home, title: 'Search' },
  { url: Paths.about, title: 'About Us' },
  { url: Paths.reviews, title: 'Reviews Form' },
];

export const ACCEPTABLE_IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
