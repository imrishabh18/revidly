import React, { Component } from "react";
import {
  faArrowUp,
  faArrowDown,
  faComment,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/home.css";
import profilePht from "../images/me.jfif";
import image from "../images/background1.jfif";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="body">
          <div className="top">
            <img src={profilePht} className="profile userProfile" />
            <div className="tags">Intermships,Job</div>
            <div className="name">Rishabh Gupta</div>
            <div className="date">Today 8:00pm</div>
            <div className="description">Random Link https://djfbs.com</div>
          </div>
          <img src={image} className="contentImage" />
          <div className="bottom">
            <button className="upvote">
              <FontAwesomeIcon icon={faArrowUp} />
              Upvotes
            </button>
            <FontAwesomeIcon icon={faComment} className="comment" />
            <FontAwesomeIcon icon={faEye} className="view" />
            <button className="downvote">
              <FontAwesomeIcon icon={faArrowDown}  />
              Downvotes
            </button>
          </div>
        </div>
        <div className="body">
          <div className="top">
            <img src={profilePht} className="profile userProfile" />
            <div className="tags">Internships,Marketing</div>
            <div className="name">Rishabh Gupta</div>
            <div className="date">Today 8:00pm</div>
            <div className="description">Description</div>
          </div>
          <img src={image} className="contentImage" />
          <div className="bottom">
            <button className="upvote">
              <FontAwesomeIcon icon={faArrowUp} />
              Upvotes
            </button>
            <FontAwesomeIcon icon={faComment} className="comment" />
            <FontAwesomeIcon icon={faEye} className="view" />
            <button className="downvote">
              <FontAwesomeIcon icon={faArrowDown} />
              Downvotes
            </button>
          </div>
        </div>
        <div className="body">
          <div className="top">
            <img src={profilePht} className="profile userProfile" />
            <div className="tags">Internships,Competitions</div>
            <div className="name">Rishabh Gupta</div>
            <div className="date">Today 8:00pm</div>
            <div className="description">Random Link https://djfbs.com</div>
          </div>
          <img src={image} className="contentImage" />
          <div className="bottom">
            <button className="upvote">
              <FontAwesomeIcon icon={faArrowUp} />
              Upvotes
            </button>
            <FontAwesomeIcon icon={faComment} className="comment" />
            <FontAwesomeIcon icon={faEye} className="view" />
            <button className="downvote">
              <FontAwesomeIcon icon={faArrowDown} />
              Downvotes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
