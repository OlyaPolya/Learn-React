export const propsFixture = {
  photos: {
    page: 1,
    pages: 1,
    perpage: 10,
    total: 1,
    photo: [
      {
        id: '11',
        owner: 'testOwner',
        secret: 'testSecret',
        server: 'testServer',
        farm: 20,
        title: 'testOwner',
        ispublic: 30,
        isfriend: 40,
        isfamily: 50,
        description: {
          _content: 'testDescription',
        },
        ownername: 'testOwnerName',
        views: 'testViews',
      },
    ],
  },
};

export const providerPropsFixture = {
  request: 'nature',
  perPage: 20,
  currentPage: 1,
  sortType: 'relevance',
};
