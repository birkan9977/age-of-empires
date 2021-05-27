import Routes from "./routes";
import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../utils/class-prefix";
import "../styles/css/layout.css";
import { useState, useEffect } from "react";
import Home from "./home";
import Units from "./units";

const cn = classnames(`${prefix}`);

const Layout = () => {
  //'cn' alias for className
  const [page, setPage] = useState("home" as string);

  const handlePageChange = (page: string): void => {
    setPage(page);
  };

  useEffect(() => {
    //console.log("PAGE", page);
  }, [page]);
  return (
    <div className={cn("layout-container")}>
      <header>
        <Routes pageChange={handlePageChange} />
      </header>
      <main>
        {page === "home" && <Home />}
        {page === "units" && <Units />}
      </main>
      <footer className={cn("footer")}>
        <div className={cn("footer-inside")}>
          <small>Designed by Birkan Bilici </small>
          <small>
            <a href="https://github.com/birkan9977/misc" target="blank">
              Github Link
            </a>
          </small>
          <small>project assignment for Adesso </small>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
