import { Link } from 'react-router-dom';
import './index.scss';

import Icon from '../icon';
import Menu from './menu';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/">
        <Icon type="logo" />
        <small className="ml-1">Demo</small>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Menu />
      </div>
    </nav>
  );
}
