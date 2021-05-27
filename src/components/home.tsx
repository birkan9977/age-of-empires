import homeImage from "../assets/home-image.jpg";
import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../utils/class-prefix";
import "../styles/css/home.css";
const cn = classnames(`${prefix}`);
const Home = () => {
  return (
    <div className={cn("home")}>
      <h1>Home Page</h1>
      <div className={cn("image-container")}>
        <img src={homeImage} alt="age of empires cover"></img>
      </div>
    </div>
  );
};

export default Home;
