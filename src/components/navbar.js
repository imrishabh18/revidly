import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import profilePht from "../images/me.jfif";
import "./css/navbar.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="search">
          <img src={profilePht} className="profile" alt="" />
          <input
            type="text"
            placeholder="Write Something here..."
            className="post"
          />
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        </div>
        <Carousel slidesPerPage={4} itemWidth={80} className="categoriesBar">
          <p className="categories">Internship</p>
          <p className="categories">Technology</p>
          <p className="categories">Revidly</p>
          <p className="categories">Random</p>
          <p className="categories">Marketing</p>
          <p className="categories">Category</p>
        </Carousel>
      </div>
    );
  }
}

export default Navbar;
