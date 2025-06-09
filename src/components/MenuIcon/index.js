import "./MenuIcon.css";
import { IoMdSearch } from "react-icons/io";
import { PiUsersThree, PiMoneyWavy } from "react-icons/pi";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

const MenuIcon = ({ show }) => {
  return (
    <div className="menu">
      <div>
        <a>
          <IoMdSearch />
        </a>
        <p className={show ? "text text-show" : "text text-hover"}>Pesquisar</p>
      </div>
      <div>
        <Link to="/">
          <BiHome />
          <p className={show ? "text text-show" : "text-none"}>Início</p>
        </Link>
        <p className={show ? "text-none" : "text text-hover"}>Início</p>
      </div>
      <div>
        <Link to="/register">
          <PiUsersThree />
          <p className={show ? "text text-show" : "text-none"}>Cadastros</p>
        </Link>
          <p className={show ? "text-none" : "text text-hover"}>Cadastros</p>
      </div>
      <div>
        <Link to="/courses">
          <LiaGraduationCapSolid />
          <p className={show ? "text text-show" : "text-none"}>Cursos</p>
        </Link>
          <p className={show ? "text-none" : "text text-hover"}>Cursos</p>
      </div>
      <div>
        <Link to="/economic">
          <PiMoneyWavy />
          <p className={show ? "text text-show" : "text-none"}>Financeiro</p>
        </Link>
          <p className={show ? "text-none" : "text text-hover"}>Financeiro</p>
      </div>
      <div>
        <Link to="/settings">
          <IoSettingsOutline />
          <p className={show ? "text text-show" : "text-none"}>Configurações</p>
        </Link>
          <p className={show ? "text-none" : "text text-hover"}>Configurações</p>
      </div>
    </div>
  );
};

export default MenuIcon;
