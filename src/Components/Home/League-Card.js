import React from "react";
import { Link } from "react-router-dom";

const LeagueCard = (props) => {
  const { url, title, image } = props;

  return (
    <div className="league-card">
      <Link to={url}>
        <div className="card">
          <img src={image} alt="UCL" />
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default LeagueCard;
