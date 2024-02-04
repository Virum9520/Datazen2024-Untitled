// import React, { useEffect } from "react";
// import "../styles/loader.css";
// import { gsap } from "gsap/dist/gsap";
// import gym from "../images/bike.mp4";

// const Loader = () => {
//   useEffect(() => {
//     let h = window.innerHeight / 2;
//     gsap.to(".up-load-half", {
//       height: h,
//       duration: 2.5,
//       ease: "expo",
//       delay: 0.6,
//     });
//     let h2 = window.innerHeight * 0.69;
//     gsap.to(".video-cont-load", {
//       height: h2,
//       duration: 2,
//       ease: "expo",
//       delay: 1,
//     });
//     gsap.to(".left-word", {
//       x: 0,
//       duration: 2,
//       ease: "power3",
//       delay: 2.5,
//     });
//     gsap.to(".right-word", {
//       x: 0,
//       duration: 2,
//       ease: "power3",
//       delay: 2.5,
//     });
//     //none
//     gsap.to(".left-word", {
//       x: 1300,
//       delay: 2,
//       duration: 1,
//     });
//     gsap.to(".right-word", {
//       x: -1300,
//       delay: 2,
//       duration: 1,
//     });
//     gsap.to(".video-cont-load", {
//       height: 0,
//       duration: 1.5,
//       ease: "expo",
//       delay: 2,
//     });
//     gsap.to(".up-load-half", {
//       height: 0,
//       duration: 1,
//       ease: "power2",
//       delay: 2,
//     });
//   });

//   return (
//     <>
//       <div className="loader-cont pos-rel">
//         <div className="pos-absf flex-all load-cont">
//           <div className="video-load-cont pos-rel">
//             {/* <div className="left-word pos-abs">Team Untitled</div>
//             <div className="right-word pos-abs"> &nbsp;Placeholder</div> */}
//             <div className="video-cont-load">
//               <div className="video-inner-load">
//                 {/* <video loop autoPlay muted>
//                   <source src={gym} type="video/mp4" />
//                 </video> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="up-load-half"></div>
//       </div>
//     </>
//   );
// };

// export default Loader;
// Loader.js

import React, { useEffect, useState } from "react";
import "../styles/loader.css"; // You can create a separate CSS file for styling if needed

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the minimum delay in milliseconds, e.g., 2000ms (2 seconds)

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="simple-loader-cont">
          {/* Add your loader content here */}
          <div className="loader-spinner"></div>
          <p>Starting</p>
        </div>
      )}
    </>
  );
};

export default Loader;
