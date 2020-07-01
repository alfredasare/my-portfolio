// import React, { useState, useRef, useEffect } from "react"
// import { window } from 'browser-monads';
// import { TweenLite, Power4 } from "gsap";
// import { ResizeObserver } from "resize-observer"
//
// const SmoothScroll = ({children}) => {
//
//   let [height, setHeight] = useState(window.innerHeight);
//   let viewport = useRef(null);
//   let fake = useRef(null);
//
//   const ro = new ResizeObserver(elements => {
//     for (let elem of elements) {
//       const crx = elem.contentRect;
//       setHeight(crx.height);
//     }
//   });
//
//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     ro.observe(viewport);
//   }, [ro]);
//
//   const onScroll = () => {
//     TweenLite.to(viewport, 1, {
//       y: -window.pageYOffset,
//       ease: Power4.easeOut
//     });
//   };
//
//   return (
//     <>
//       <div className="viewport" ref={el => {viewport = el}}>
//         {children}
//       </div>
//       <div
//         ref={ref => {fake = ref}}
//         style={{
//           height: height
//         }}
//       />
//     </>
//   );
// };
//
// export default SmoothScroll;