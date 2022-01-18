import React from "react";
import listOfLeagues from "../../Store/leagues_info";
import Grid from "@mui/material/Grid";
import LeagueCard from "./League-Card";

const SectionTwo = () => {
  return (
    <div className="leagues padding-medium">
      <div className="leagues-title">
        <h2>Leagues</h2>
      </div>
      <Grid container spacing={5}>
        {listOfLeagues.map((league, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <LeagueCard
              url={league.url}
              title={league.title}
              image={league.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SectionTwo;
