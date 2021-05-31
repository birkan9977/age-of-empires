import Routes from "./routes";
import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../utils/class-prefix";
import "../styles/css/layout.css";
import { useState, useEffect } from "react";
import Home from "./home";
import Units from "./units";
import UnitsDetail from "./units-detail"

const cn = classnames(`${prefix}`);

const Layout = () => {
  //'cn' alias for className
  const [page, setPage] = useState<string>("home");
  const handlePageChange = (page: string): void => {
    setPage(page);
  };

  
  useEffect(() => {
    console.log("PAGE", page);
  }, [page]);
  
  return (
    <div className={cn("layout-container")}>
      <header>
        <Routes pageChange={handlePageChange} />
      </header>
      <main>
        {page === "home" && <Home />}
        {page === "units" && <Units />}
        {page === "unit-detail" && <UnitsDetail />}
      </main>
      <footer className={cn("footer")}>
        <div className={cn("footer-inside")}>
          <small>Designed by Birkan Bilici </small>
          <small>
            <a href="/units/unit" target="blank">
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
