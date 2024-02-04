import "../styles/landing.css";
import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { Helmet } from "react-helmet";
import home from "../images/homeimg.png";
import Video from "./Video";
import Features from "./Features";
import Process from "./Process";
import "./landing.css";


const Landing = () => {
  useEffect(() => {
    gsap.to(".sin", {
      y: 0,
      duration: 1,
      ease: "power3",
      stagger: 0.2,
    });

    window.addEventListener("scroll", function () {
      // console.log("Inside Event Scroll");
      let value = window.scrollY;
      let lo = document.getElementsByClassName("divl");
      Array.from(lo).forEach((dot, index) => {
        dot.style.transform = `translateY(-${
          (value / 10) * (index + 0.001)
        }px)`;
      });
      // text.style.top = 50 + value * -0.02 + "%";
      // bird2.style.top = value * -1.5 + "px";
      // bird2.style.left = value * 2 + "px";
      // bird1.style.top = value * -1.5 + "px";
      // bird1.style.left = value * -5 + "px";
      // rocks.style.top = value * 0.08 + "px";
      // forest.style.top = value * 0.25 + "px";
    });
  });

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap"
        />
      </Helmet>



      <div className="land-cont">
        <div className="text-cont">
          <div className="custom-font">F</div>
          <div className="divl custom-font">l</div>
          <div className="divl custom-font">e</div>
          <div className="divl custom-font">x</div>
          <div className="divl custom-font">.</div>
          <div className="divl custom-font">i</div>
        </div>
        <div className="sp">
          <div className="s pos-rel">
            <div className="pos-absf sin"> Elevate Your Fitness,</div>
          </div>
          <div className="s pos-rel">
            <div className="pos-absf sin"> Anytime, Anywhere</div>
          </div>
        </div>
      </div>
      <div className="main-img-cont">
        <img src={home} />
      </div>
      <Video />
      <Features />
      <Process />
    </>
  );
};

export default Landing;
