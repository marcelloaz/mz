import logo from './logo.svg';
import React, { useEffect, useRef } from "react";
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 
function App() {
  const ref = useRef(null);

  useEffect(() => { 
    const element = ref.current;
    gsap.to(
      element.querySelector(".container"),
      {
        xPercent: -100 * (element.querySelector(".container").length - 1),
        ease: "none",
      },
      {
        scrollTrigger: {
          trigger: element.querySelector(".red"),
          pin: true,
          scrub: 1,
          snap: 1 / (element.querySelector(".blue").length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=4000",
        }
      }
    );
  }, []);
  // useEffect(() => {
  //  // gsap.to(element.querySelector("#red", { rotation: "+=360" });
  //   const element = ref.current;
  //   gsap.to(ref, {
  //     xPercent: 50,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: element.querySelector(".red"),
  //       pin: true,
  //       scrub: 1,
  //       snap: 1 / (element.querySelector(".red").length - 1),
  //       // base vertical scrolling on how wide the container is so it feels more natural.
  //       end: "+=3500",
  //     }
  //   });
  // });

return (
  <div ref={ref} >
<div className="container">
<div className="panel red">
    ONE
  </div>
  <div className="panel blue">
    THOW
  </div>
  </div>
</div>
);
  // return (
  //   <div className="app">
  //    <div className="box" ref={boxRef}><img src={logo} alt="react"></img></div>
  //  </div>
  // );
}

export default App;
