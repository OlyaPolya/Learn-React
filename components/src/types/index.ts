type Price = string | number;

export type Link = {
  url: string;
  title: string;
};

export type Card = {
  userName: string;
  rate: number;
  description: string;
  imgSrc: string;
};

export type Photo = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  description: {
    _content: string;
  };
  ownername: string;
  views: string;
};

export type PhotosList = {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Photo[];
  };
};
