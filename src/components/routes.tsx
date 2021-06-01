import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../utils/class-prefix";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import "../styles/css/routes.css";
import usePage from "./hooks/usePage";

const cn = classnames(`${prefix}`);

const Routes = ({ pageChange }) => {
  const currentPath = usePage(pageChange);

  return (
    <div>
      <nav id="navbar" className={cn("navbar")}>
        <ul>
          <li>
            <Link
              role="navlink-home"
              className={cn({
                active: currentPath === "/home",
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
                active: currentPath === "/units",
              })}
              to="/units"
            >
              Units
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/units"></Route>
        <Route path="/home"></Route>
        <Route path="/unit-detail"></Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
