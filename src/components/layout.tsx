import Routes from "./routes";
import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../utils/class-prefix";
import "../styles/css/layout.css";
import { useState } from "react";
import Home from "./pages/home";
import Units from "./pages/units";
import UnitDetail from "./pages/unit-detail";

const cn = classnames(`${prefix}`);

const Layout = () => {
  const [page, setPage] = useState<string>("home");
  const handlePageChange = (page: string): void => {
    setPage(page);
  };

  return (
    <div className={cn("layout-container")}>
      <header>
        <Routes pageChange={handlePageChange} />
      </header>
      <main>
        {page === "home" && <Home />}
        {page === "units" && <Units />}
        {page === "unit-detail" && <UnitDetail />}
      </main>
      <footer className={cn("footer")}>
        <div className={cn("footer-inside")}>
          <small>Designed by Birkan Bilici </small>
          <small>
            <a href="https://github.com/birkan9977" target="blank">
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
