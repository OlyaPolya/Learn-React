import React from 'react';
import { Link } from 'react-router-dom';
import { Link as HeaderLink } from '../../../../types';

type Props = {
  links: HeaderLink[];
};

const Navigation: React.FC<Props> = (props) => (
  <ul className="header-links">
    {props.links.map((nav: HeaderLink) => (
      <li key={nav.title} className="link">
        <Link to={nav.url}>{nav.title}</Link>
      </li>
    ))}
  </ul>
);

export default Navigation;
