import { useState, useEffect } from "react";
import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../utils/class-prefix";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import "../styles/css/routes.css";
import pathMatch from "../utils/path-match";

const cn = classnames(`${prefix}`);

const Routes = ({ pageChange }) => {
  const [currentWindowLocation, setCurrentWindowLocation] = useState(
    window.location.href
  );

  function handleCurrentLocation(e) {
    setCurrentWindowLocation(window.location.href);
  }

  function GetLocation(props) {
    let history = useHistory();
    let currentPath = history ? history.location.pathname : null;
    useRouteMatch();

    useEffect(() => {
      props.currentPath(currentPath);
      pageChange(currentPath.substr(1));
    });

    return (
      <>{props.display && <div className={cn("path")}>{currentPath}</div>}</>
    );
  }

  return (
    <div>
      <Router>
        <div>
          <nav className={cn("navbar")}>
            <ul>
              <li>
                <Link
                  role="navlink-home"
                  className={cn({
                    active: pathMatch("home", currentWindowLocation),
                  })}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  role="navlink-units"
                  className={cn({
                    active: pathMatch("units", currentWindowLocation),
                  })}
                  to="/units"
                >
                  Units
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/units">
              <GetLocation
                currentPath={(e) => handleCurrentLocation(e)}
                display={false}
              />
            </Route>

            <Route path="/home">
              <GetLocation
                currentPath={(e) => handleCurrentLocation(e)}
                display={false}
              />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
