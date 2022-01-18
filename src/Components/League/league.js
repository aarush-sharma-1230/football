import React, { useState, useEffect } from "react";
import axios from "axios";
import listOfLeagues from "../../Store/leagues_info";
import FixtureCard from "./fixture-card";
import theme from "../../Store/theme";
import "./league.scss";
require("dotenv").config();

const League = (props) => {
  const targetUrl = props.location.pathname;
  const styles = theme(targetUrl);
  const { background, foreground } = styles;

  const backgroundStyle = {
    backgroundColor: `${background}`,
  };

  const initialStyleStandingsButton = {
    backgroundColor: `${background}`,
    borderBottom: `3px solid ${foreground}`,
  };

  const alternateStyle = {
    color: `${foreground}`,
  };

  const initialStyleMatchesButton = {
    backgroundColor: `${background}`,
    borderBottom: `3px solid ${background}`,
  };

  const [styleStandings, setStyleStandings] = useState(
    initialStyleStandingsButton
  );

  const [status, setStatus] = useState("Standings");
  const [upcomingFixtures, setUpcomingFixtures] = useState([]);
  const [standingsLoadingState, setStandingsLoadingState] = useState(true);
  const [matchesLoadingState, setMatchesLoadingState] = useState(true);
  const [limit, setLimit] = useState(false);
  const [standings, setStandings] = useState([]);
  const [styleMatches, setStyleMatches] = useState(initialStyleMatchesButton);
  let leagueName = "";
  let leagueID = "";
  listOfLeagues.forEach((league) => {
    const leagueTitle = league.title;
    const leagueUrl = league.url;

    if (leagueUrl === targetUrl) {
      leagueName = leagueTitle;
      leagueID = league.id;
      return false;
    }
  });
  // const backgroundImage = {
  //   backgroundImage: `url(${leagueImage})`,
  //   height: "200px",
  //   backgroundColor: `${background}`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "200px 200px",
  //   backgroundPosition: "right",
  //   backgroundOrigin: "content-box",
  // };
  const activateStandings = () => {
    setStyleStandings({
      backgroundColor: `${background}`,
      borderBottom: `3px solid ${foreground}`,
    });
    setStyleMatches({
      backgroundColor: `${background}`,
      borderBottom: `3px solid ${background}`,
    });
    setStatus("Standings");
  };

  const activateMatches = () => {
    setStyleStandings({
      backgroundColor: `${background}`,
      borderBottom: `3px solid ${background}`,
    });
    setStyleMatches({
      backgroundColor: `${background}`,
      borderBottom: `3px solid ${foreground}`,
    });
    setStatus("Matches");
  };

  const apiRequestStandings = async (leagueID) => {
    const config = {
      method: "get",
      url: process.env.REACT_APP_API_URL + "/standings",
      params: { league: `${leagueID}`, season: "2021" },
      headers: {
        "x-apisports-key": process.env.REACT_APP_API_KEY,
      },
    };
    const response = await axios(config);
    const receivedData = JSON.parse(JSON.stringify(response.data));

    if (receivedData.results === 0) {
      setStandingsLoadingState(false);
      setLimit(true);
    } else {
      setStandings(receivedData.response[0].league.standings[0]);
      setStandingsLoadingState(false);
    }
  };

  const apiRequestMatches = async (leagueID) => {
    const config = {
      method: "get",
      url: process.env.REACT_APP_API_URL + "/fixtures",
      params: { league: `${leagueID}`, season: "2021" },
      headers: {
        "x-apisports-key": process.env.REACT_APP_API_KEY,
      },
    };
    const response = await axios(config);
    const receivedData = JSON.parse(JSON.stringify(response.data));
    const fixtures = receivedData.response;
    setUpcomingFixtures(
      fixtures.filter((fixture) => {
        const fixtureTimestamp = new Date(fixture.fixture.date);
        const currentTimestamp = new Date();
        const differenceDays = (fixtureTimestamp - currentTimestamp) / 86400000;
        return 0 <= differenceDays && differenceDays <= 7;
      })
    );
    setMatchesLoadingState(false);
  };

  useEffect(() => {
    status === "Standings"
      ? apiRequestStandings(leagueID)
      : apiRequestMatches(leagueID);
  }, [leagueID, status]);

  const standingsContent = (
    <div className="league-table center" style={backgroundStyle}>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Points</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{team.rank}</td>
                    <td>{team.team.name}</td>
                    <td>{team.points}</td>
                    <td>{team.all.played}</td>
                    <td>{team.all.win}</td>
                    <td>{team.all.draw}</td>
                    <td>{team.all.lose}</td>
                    <td>{team.all.goals.for}</td>
                    <td>{team.all.goals.against}</td>
                    <td>{team.goalsDiff}</td>
                    <td>{team.form}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const loadingContent = (
    <div className="center alternate-text" style={alternateStyle}>
      <h5>Loading...</h5>
    </div>
  );

  const zeroMatchesContent = (
    <div className="center alternate-text" style={alternateStyle}>
      <h5>There is no upcoming fixture for the coming week</h5>
    </div>
  );

  const limitReachedContent = (
    <div className="center alternate-text" style={alternateStyle}>
      <h5>
        We have reached the limit of our service today. Please try again later.
      </h5>
    </div>
  );

  const matchesContent = (
    <div className="fixtures">
      {upcomingFixtures.length === 0 && matchesLoadingState === false
        ? zeroMatchesContent
        : upcomingFixtures.map((fixture) => {
            const awayTeam = fixture.teams.away;
            const homeTeam = fixture.teams.home;
            const timeOfFixture = new Date(fixture.fixture.date);
            return (
              <FixtureCard
                homeTeam={homeTeam}
                awayTeam={awayTeam}
                timeOfFixture={timeOfFixture}
                background={background}
                foreground={foreground}
              />
            );
          })}
    </div>
  );
  return (
    <div>
      <div className="padding-small league" style={backgroundStyle}>
        <h2>{leagueName}</h2>
      </div>
      <div className="league-main center-margin padding-small center">
        <button onClick={activateStandings} style={styleStandings}>
          Standings
        </button>
        <button onClick={activateMatches} style={styleMatches}>
          Matches
        </button>
        {limit
          ? limitReachedContent
          : status === "Standings"
          ? standingsLoadingState
            ? loadingContent
            : standingsContent
          : matchesLoadingState
          ? loadingContent
          : matchesContent}
      </div>
    </div>
  );
};

export default League;
