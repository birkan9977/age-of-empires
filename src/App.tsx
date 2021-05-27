import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "./utils/class-prefix";
import Layout from "./components/layout";
import "./styles/css/app.css";

const cn = classnames(`${prefix}`);

const App = () => {
  return (
    <div className={cn("main")}>
      <div className={cn("app-container")}>
        <Layout />
      </div>
    </div>
  );
};

export default App;
