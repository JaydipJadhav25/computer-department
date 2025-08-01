
import { motion } from "framer-motion";


const drops = [
  { initialX: 10, duration: 7, delay: 1 },
  { initialX: 150, duration: 5, delay: 2 },
  { initialX: 300, duration: 6, delay: 3 },
  { initialX: 450, duration: 4, delay: 1.5 },
  { initialX: 600, duration: 8, delay: 0 },
];

export default function HeroDropEffect() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {drops.map((drop, i) => (
        <motion.div
          key={i}
          initial={{ y: -100 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: drop.initialX,
            width: "1px",
            height: "56px",
            borderRadius: "9999px",
            background: "linear-gradient(to top, indigo, purple, transparent)",
          }}
        />
      ))}
    </div>
  );
}