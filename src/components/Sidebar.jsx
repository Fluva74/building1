import React, {useState} from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
      <div className="sidebar">
          <ul className="top-links">
              <li className="top-navlink"><a href="#!">ABOUT</a></li>
              <li className="top-navlink"><a href="#!">HUMOR</a></li>
              <li className="top-navlink"><a href="#!">BLOG</a></li>
              <li className="top-navlink"><a href="#!">CONTACT</a></li>
          </ul>
          <div className="side-socials">
          <a href="#!"><i className="fab fa-facebook-square"></i></a>
          <a href="#!"><i className="fab fa-twitter-square"></i></a>
          <a href="#!"><i className="fab fa-pinterest-square"></i></a>
          </div>
    </div>
  )
}
