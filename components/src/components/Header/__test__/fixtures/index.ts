import Header from '../..';
import React from 'react';

const props: React.ComponentProps<typeof Header> = {
  links: [
    { url: '/', title: 'Test1' },
    { url: 'test', title: 'Test2' },
  ],
};

export default {
  props,
};
