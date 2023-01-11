import React from 'react';
import './styles.css';
import { Link } from '../../types';
import Navigation from './components/Navigation';

type Props = {
  links: Link[];
};

const Header: React.FC<Props> = (props) => (
  <header className="header">
    <p className="header-title">Learning React Project</p>
    <Navigation links={props.links} />
  </header>
);

export default Header;
