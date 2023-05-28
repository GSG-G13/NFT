import "./nav.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Nav = ({ type }) => {
  const handleLogout = () => {
    axios.get("/api/logout");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="Nav">
        <div className="name">
          <nft>N</nft>
          <nft>F</nft>
          <nft>T</nft>
        </div>
        {type === "mainPage" || type === "signup" || type === "login" ? (
          <div className="sign">
            <Link to="/login" className="button">
              <span></span>
              <span></span>
              <span></span>
              <span></span> sign in
            </Link>
            <Link to="/signup" className="btn sign-up-page">
              sign up
            </Link>
          </div>
        ) : type === "cart" ? (
          <>
            <Link to="/main" className="fa-solid fa-igloo main"></Link>
            <div
              className="fa-solid fa-arrow-right-from-bracket logout"
              onClick={handleLogout}
            ></div>
          </>
        ) : (
          <>
            <Link to="/cart" className="fa-solid fa-cart-shopping"></Link>
            <div
              className="fa-solid fa-arrow-right-from-bracket logout"
              onClick={handleLogout}
            ></div>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;
