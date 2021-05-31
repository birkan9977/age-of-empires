import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "./utils/class-prefix";
import Layout from "./components/layout";
import "./styles/css/app.css";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
const cn = classnames(`${prefix}`);

const App = () => {
  return (
    <Provider store={configureStore()}>
      <div className={cn("main")}>
        <div className={cn("app-container")}>
          <Layout />
        </div>
      </div>
    </Provider>
  );
};

export default App;
