import React from 'react';

type Props = {
  message: string;
};

const Error: React.FC<Props> = (props) => (
  <div>
    <span>Oops!</span>
    <p>{props.message}</p>
  </div>
);

export default Error;
