import "./MenuIcon.css";
import { IoMdSearch } from "react-icons/io";
import { PiUsersThree, PiMoneyWavy } from "react-icons/pi";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

const MenuIcon = ({show}) => {
  return (
    <div className="menu">
      <div>
        <a>
          <IoMdSearch />
        </a>
        <p className={show ?"text text-show":"text text-hover"}>Pesquisar</p>
      </div>
      <div>
        <Link to="/">
          <BiHome />
        </Link>
        <p className={show ?"text text-show":"text text-hover"}>Início</p>
      </div>
      <div>
        <Link to="/register">
          <PiUsersThree />
        </Link>
        <p className={show ?"text text-show":"text text-hover"}>Cadastros</p>
      </div>
      <div>
        <Link to="/courses">
          <LiaGraduationCapSolid />
        </Link>
        <p className={show ?"text text-show":"text text-hover"}>Cursos</p>
      </div>
      <div>
        <Link to="/economic">
          <PiMoneyWavy />
        </Link>
        <p className={show ?"text text-show":"text text-hover"}>Financeiro</p>
      </div>
      <div>
        <Link to="/settings">
          <IoSettingsOutline />
        </Link>
        <p className={show ?"text text-show":"text text-hover"}>Configurações</p>
      </div>
    </div>
  );
};

export default MenuIcon;
