import {
  HashRouter as Router,
  useHistory as history,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

const useHistory = () => history();

function PrivateRoute({ children, check, redirectTo = '/', ...rest }) {
  function render({location}) {
    if (check) return children;

    return <Redirect to={{ pathname: redirectTo, state: { from: location } }} />;
  }

  return ( <Route {...rest} render={render} /> );
}

export {
  Router,
  useHistory,
  Switch,
  Route,
  PrivateRoute,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
};
