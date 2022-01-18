const theme = (currentLocation) => {
  const backgroundColors = {
    defaultColor: "#ff6536",
    uefaChampionsLeagueColor: "#050E2E",
    laliga: "#008000",
    uefaEuropaLeague: "#122335",
    barclaysPremierLeague: "#e90052",
    bundesliga: "#ff4c4c",
    ligue1: "#25496e",
    serie_A: "#284084",
    indianSuperLeague: "#5bbce4",
  };

  const outlineColors = {
    defaultColor: "#ffc7b6",
    uefaChampionsLeagueColor: "#87CEEB",
    laliga: "#006700",
    uefaEuropaLeague: "#34689c",
    barclaysPremierLeague: "#38003c",
    ligue1: "#122335",
    serie_A: "#acbbe6",
    indianSuperLeague: "#000058",
  };

  let background = "";
  let foreground = "";

  switch (currentLocation) {
    default:
      background = backgroundColors.defaultColor;
      foreground = outlineColors.defaultColor;
      break;
    case "/leagues/uefa-champions-league":
      background = backgroundColors.uefaChampionsLeagueColor;
      foreground = outlineColors.uefaChampionsLeagueColor;
      break;
    case "/leagues/laliga":
      background = backgroundColors.laliga;
      foreground = outlineColors.laliga;
      break;
    case "/leagues/uefa-europa-league":
      background = backgroundColors.uefaEuropaLeague;
      foreground = outlineColors.uefaEuropaLeague;
      break;
    case "/leagues/barclays-premier-league":
      background = backgroundColors.barclaysPremierLeague;
      foreground = outlineColors.defaultColor;
      break;
    case "/leagues/bundesliga":
      background = backgroundColors.bundesliga;
      foreground = outlineColors.defaultColor;
      break;
    case "/leagues/ligue-1":
      background = backgroundColors.ligue1;
      foreground = outlineColors.ligue1;
      break;
    case "/leagues/serie-A":
      background = backgroundColors.serie_A;
      foreground = outlineColors.serie_A;
      break;
    case "/leagues/indian-super-league":
      background = backgroundColors.indianSuperLeague;
      foreground = outlineColors.indianSuperLeague;
      break;
  }

  const result = {
    background: `${background}`,
    foreground: `${foreground}`,
  };

  return result;
};

export default theme;
