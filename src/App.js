import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import "./App.css";

const rainConfetti = () => {
  const rain = (particleCount, startVelocity) =>
    confetti({
      particleCount,
      angle: 270,
      spread: 300,
      origin: {
        x: 0.5,
        y: -0.25,
      },
      startVelocity,
      gravity: 1.5,
      colors: [
        "#47a27c",
        "#47a27c",
        "#47a27c",
        "#387F67",
        "#306d59",
        "#ffffff",
      ],
      ticks: 125,
    });
  rain(600, 50);
  rain(100, 17);
};

const App = () => {
  useEffect(() => {
    rainConfetti();
  }, []);

  return (
    <div
      className="eid-card"
      style={{
        backgroundImage: `url('/images/desktop-bg.jpeg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="eid-card-content">
          <h1 className="eid-card-title">Eid Mubarak</h1>
          <p className="eid-card-body">
            May the blessings of Eid fill your life with joy and happiness.
            Wishing you a prosperous and blissful Eid!
          </p>
          <p className="eid-card-closing">From Haasin</p>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
