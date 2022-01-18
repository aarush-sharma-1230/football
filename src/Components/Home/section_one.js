import React from "react";
import footballHome from "../../Images/football-analytics.jpg";

const SectionOne = () => {
  return (
    <div className="title padding-large">
      <img src={footballHome} alt="Football Analytics" />
      <div>
        <h1>
          Follow your league, team or player and visualize football through the
          eyes of an analyst
        </h1>
      </div>
    </div>
  );
};

export default SectionOne;
