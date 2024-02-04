import React, { useEffect } from "react";
import "../styles/exlist.css";
import first from "../images/squats.gif";
import second from "../images/biceps.gif";
import third from "../images/firstp.gif";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";


const Exlist = () => {
  useEffect(() => {
    let yo = -window.screen.height * 2;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".ex-list", {
      scrollTrigger: {
        trigger: ".exlist-cont",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers:true
      },
      y: yo,
    });
    gsap.to(".left-abs", {
      scrollTrigger: {
        trigger: ".exlist-cont",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers:true
      },
      y: yo,
    });
    gsap.to(".circle-cont-ex", {
      scrollTrigger: {
        trigger: ".exlist-cont",
        start: "33% 100%",
        end: "33% 50%",
        scrub: 1,
        // markers:true
      },
      backgroundColor: "#d992ce",
    });
    gsap.to(".circle-cont-ex", {
      scrollTrigger: {
        trigger: ".exlist-cont",
        start: "66% 100%",
        end: "66% 50%",
        scrub: 1,
        // markers:true
      },
      backgroundColor: "white",
    });
  });

  let exercises = [
    {
      image: first,
      title: "Squats",
      p: "Squats are a compound exercise that targets multiple muscle groups, primarily the quadriceps, hamstrings, and glutes, enhancing lower body strength and overall functional fitness.",
    },
    {
      image: second,
      title: "Bicep Curls",
      p: "Bicep curls are isolation exercises that focus on strengthening the biceps muscles, involving flexion of the elbow joint with a lifting motion.",
    },
    {
      image: third,
      title: "Push ups",
      p: "Push-ups are a versatile bodyweight exercise that effectively engages the chest, shoulders, triceps, and core, promoting upper body strength and endurance.",
    },
  ];

  return (
    <>
      <div className="exlist-cont">
        <div className="exlist-inner-cont">
          <div className="ex-left">
            <div className="left-abs">
              {exercises.map((exercise, index) => {
                return (
                  <div className="left-full" key={index}>
                    
                  <div className="left-title">{exercise.title}</div>
                   
                    <div className="left-p">{exercise.p}</div>
                      <button className="btn" style={{ position: "relative", left: "200px " ,  width: "86px" , height: "44px" }}>START</button>
                      
                      <a href="https://drive.google.com/file/d/1C1izdHFRpi5g2wZAhWDpG2dUMJZklhmi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <button className="btn" style={{ position: "relative" , left: "100px",bottom: "44px", width: "86px" , height: "44px" }}>DEMO</button>
                      </a>                  
                    </div>
                );
              })}
            </div>
          </div>
          <div className="ex-right flex-all">
            <div className="circle-cont-ex">
              <div className="ex-list">
                {exercises.map((exercise, index) => {
                  return (
                    <div className="list flex-all" key={index}>
                      <img src={exercise.image} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exlist;
