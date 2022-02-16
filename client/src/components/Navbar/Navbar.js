import React, { useState } from "react";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  const [showlinks, setshowlinks] = useState(false);
  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="links" id={showlinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/course">Course</a>
          <a href="./ceedbak">Feedback</a>
          <a href="/services">Services</a>
        </div>
        <button onClick={() => setshowlinks(!showlinks)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="rightside">
        <input type="text" placeholder="search" />
        <button
          type="button"
          className="btn
        "
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
