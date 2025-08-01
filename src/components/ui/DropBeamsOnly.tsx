"use client";
import { motion } from "framer-motion";
import React from "react";

const drops = [
  { initialX: 10, duration: 20, delay: 1 },
  { initialX: 150, duration: 18, delay: 2 },
  { initialX: 300, duration: 25, delay: 3 },
  { initialX: 450, duration: 22, delay: 1.5 },
  { initialX: 600, duration: 19, delay: 0 },
  { initialX: 750, duration: 21, delay: 2 },
];



export default function DropBeamsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full">
      {/* Beams */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {drops.map((drop, i) => (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ y: "3000px" }} // move farther if your page is very tall
            transition={{
              duration: drop.duration,
              delay: drop.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0"
            style={{
              left: drop.initialX,
              width: "1px",
              height: "56px",
              borderRadius: "9999px",
              background: "linear-gradient(to top, indigo, purple, transparent)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
}


// import { motion } from "framer-motion";


// const drops = [
//   { initialX: 10, duration: 7, delay: 1 },
//   { initialX: 150, duration: 5, delay: 2 },
//   { initialX: 300, duration: 6, delay: 3 },
//   { initialX: 450, duration: 4, delay: 1.5 },
//   { initialX: 600, duration: 8, delay: 0 },
// ];

// export default function DropBeams() {
//   return (
//     <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
//       {drops.map((drop, i) => (
//         <motion.div
//           key={i}
//           initial={{ y: -100 }}
//           animate={{ y: "100vh" }}
//           transition={{
//             duration: drop.duration,
//             delay: drop.delay,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: drop.initialX,
//             width: "1px",
//             height: "56px",
//             borderRadius: "9999px",
//             background: "linear-gradient(to top, indigo, purple, transparent)",
//           }}
//         />
//       ))}
//     </div>
//   );
// }






// // import { motion } from "framer-motion";

// // const drops = [
// //   { initialX: 10, duration: 7, delay: 1 },
// //   { initialX: 150, duration: 5, delay: 2 },
// //   { initialX: 300, duration: 6, delay: 3 },
// //   { initialX: 450, duration: 4, delay: 1.5 },
// //   { initialX: 600, duration: 8, delay: 0 },
// // ];

// // export default function DropBeamsOnly() {
// //   return (
// //     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
// //       {drops.map((drop, i) => (
// //         <motion.div
// //           key={i}
// //           initial={{ y: -100 }}
// //           animate={{ y: "100vh" }}
// //           transition={{
// //             duration: drop.duration,
// //             delay: drop.delay,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           style={{
// //             position: "absolute",
// //             top: 0,
// //             left: drop.initialX,
// //             width: "1px",
// //             height: "56px", // same as h-14
// //             borderRadius: "9999px",
// //             background: "linear-gradient(to top, indigo, purple, transparent)",
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }
