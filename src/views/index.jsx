import { Switch, Route, PrivateRoute/* , Link */ } from '../router';
import { useSelector, useActions } from '../redux/store';

import Home from './Home';
import Search from './Search';

export default function Views () {
  const user = useSelector(store => store.user);
  const { isAuth } = useActions(['isAuth']);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute check={isAuth()} path="/search">
        {user ? <Search /> : <></>}
      </PrivateRoute>
      <PrivateRoute check={false} path="/:any">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}
