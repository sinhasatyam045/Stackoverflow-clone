import React from "react";
import { Link } from "react-router-dom";
import logostackoverflow from "../../assets/logostackoverflow.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";

import "./Navbar.css";
const Navbar = () => {
  var User = 123;
  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="lin">
        <Link  to="/" className="nav-item nav-logo">
          <img src={logostackoverflow} alt="logostackoverflow" width="150" />
        </Link>
        <Link style={{textDecoration:"none"}} to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link style={{textDecoration:"none"}}to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link style={{textDecoration:"none"}}to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        </div>

        <form className='search'>
          <input style={{width:'100%'}} type="text" placeholder="Search.." />
          <img src={search} alt="search" width="13" className="search-icon" />
        </form>
        {User == 123? (
          <button type="button" className="btn"><Link style={{textDecoration:"none"}} to="/Auth" className="nav-item nav-links">
            Log in
          </Link></button>
        ) : (
          <>
            <Avatar
              backgrounColor="#009dff "
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to="/User"
                style={{
                  color: "black",
                  textDecoration: "none",
                  backgrounColor: "#009dff",
                }}
              >
                M
              </Link>
            </Avatar>
            <button className="nav-item nav-links">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
