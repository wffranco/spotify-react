import { Route, Switch, useRouteMatch } from '../router';
import Music from './Music';

function Search() {
  const { path } = useRouteMatch();

  return (
    <div className="container-fluid mt-5 pt-4 mb-3">
      <Switch>
        <Route exact path={`${path}/:query`}>
          <Music />
        </Route>
        <Route path={`${path}/:query/:page`}>
          <Music />
        </Route>
      </Switch>
    </div>
  );
}

export default Search;
