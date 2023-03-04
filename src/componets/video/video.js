import React from "react";

import Button from "react-bootstrap/Button";
import video from "../../assets/images/video.png";
import "./video.css";
 
import {BsPlayFill} from "react-icons/bs";

const Video = () => {
  return (
    <div className="video">
      <section id="videoReal">
        <article
          className="article"
          style={{ background:  `rgba(0,0,0,0.7) url(${video})` }}
        >
            <br />
          <h1 className="header">
            Not Just a House but a <br />
            Something to Life for
          </h1>
          <p className="header">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor 
          </p>
          <p className="header">
            invidunt ut labore et dolore magna aliquyam.
          </p>
          <Button className="round">
           <BsPlayFill />
          </Button>
        </article>
      </section>
    </div>
  );
};

export default Video;
