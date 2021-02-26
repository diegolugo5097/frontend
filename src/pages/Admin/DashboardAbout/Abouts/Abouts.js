import React from "react";
import { useSelector } from "react-redux";
import About from "./About/About.js";

const Abouts = ({ setCurrentId }) => {
  const abouts = useSelector((state) => state.abouts);
  return !abouts.length ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <div>
      {abouts.map((about) => {
        return <About about={about} setCurrentId={setCurrentId} />;
      })}
    </div>
  );
};

export default Abouts;
