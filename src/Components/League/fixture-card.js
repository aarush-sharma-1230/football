import React from "react";

const FixtureCard = (props) => {
  const { homeTeam, awayTeam, timeOfFixture, background } = props;
  const { name: homeTeamName, logo: homeTeamLogo } = homeTeam;
  const { name: awayTeamName, logo: awayTeamLogo } = awayTeam;

  const cardStyle = {
    backgroundColor: `${background}`,
    color: "white",
  };
  return (
    <div className="fixture-container" style={cardStyle}>
      <div className="wrap-fixture-timezone">
        <div>
          <h5>{timeOfFixture.toDateString()}</h5>
        </div>

        <div>
          <h5>{timeOfFixture.toLocaleTimeString()}</h5>
        </div>
      </div>
      <div className="wrap-fixture-card">
        <div className="fixture-card ">
          <div className="fixture-home ">
            <img src={homeTeamLogo} alt="Home Team Logo" />
            <span>
              <h5>{homeTeamName}</h5>
            </span>
          </div>
          <div className="middle">vs</div>
          <div className="fixture-away ">
            <img src={awayTeamLogo} alt="Away Team Logo" />
            <span>
              <h5>{awayTeamName}</h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixtureCard;
