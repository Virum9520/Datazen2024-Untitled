import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "../styles/video.css";
import gym from "../images/bike.mp4";

const Video = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let t1 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".land-video-cont",
        // pin: true,   // pin the trigger element while active
        start: "top top",
        endTrigger: ".land-video-cont", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers:true
      },
    });
    let a = 0.5;
    let h = -window.innerHeight * 0.1;

    if (window.innerWidth < 700) {
      a = 1;
      // h = -window.innerHeight*0.1;
    }
    t1.to(".video", {
      scale: a,
    });

    gsap.to(".center-text", {
      scrollTrigger: {
        trigger: ".land-video-cont",
        // pin: true,   // pin the trigger element while active
        start: "top top",
        endTrigger: ".land-video-cont", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers:true
      },
      scale: 0.5,
    });
  
  }, []);
  return (
    <>
      <div className="land-video-cont">
        <div className="navbar-land-cont">
          <div className="navbar-sticky-cont"></div>
        </div>
        <div className="video-inner">
          <div className="pos-rel video-cont">
            <video loop muted autoPlay className="video">
              <source src={gym} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
