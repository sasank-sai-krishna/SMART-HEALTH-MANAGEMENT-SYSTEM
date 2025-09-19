import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 }
};
const transition = { duration: 0.5 };

export default function Dashboard() {
  return (
    <motion.div
      className="dashboard"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      <h2>Welcome to Dashboard</h2>
      <p>Here you can manage patients, doctors, billing, and AI features.</p>
      <Button variant="outlined" component={Link} to="/">
        Back to Landing
      </Button>
    </motion.div>
  );
}
