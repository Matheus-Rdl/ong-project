import "./NavBar.css";
import { useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import MenuIcon from "../MenuIcon";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={showNav ? "nav active" : "nav"}>
      {showNav ? (
        <IoIosArrowDropleftCircle
          className="arrow-menu"
          onClick={() => setShowNav(!showNav)}
        />
      ) : (
        <IoIosArrowDroprightCircle
          className="arrow-menu"
          onClick={() => setShowNav(!showNav)}
        />
      )}
      <MenuIcon show={showNav}/>
    </div>
  );
};

export default NavBar;
