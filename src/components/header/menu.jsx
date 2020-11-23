import { useSelector, useActions } from '../../redux/store';

import Search from './search';

export default function Menu() {
  const user = useSelector(store => store.user);
  const { login, logout } = useActions(['login', 'logout']);

  if (user === false) return <></>;

  if (!user) {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <span className="nav-link" onClick={login}>Login</span>
        </li>
      </ul>
    );
  }

  return (
    <>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            { user.display_name || 'User' }
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <span className="dropdown-item" onClick={logout}>Logout</span>
          </div>
        </li>
      </ul>
      <Search />
    </>
  );
}
