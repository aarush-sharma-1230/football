import laliga from "../Images/laliga.jpg";
import barclaysPremierLeague from "../Images/premier-league.jpg";
import frenchLeague from "../Images/ligue1.jpg";
import italianLeague from "../Images/serieA.jpg";
import bundesliga from "../Images/bundesliga.jpg";
import laligaLogo from "../Images/Leagues/laliga.png";
import barclaysPremierLeagueLogo from "../Images/Leagues/barclays_premier_league.png";
import bundesligaLogo from "../Images/Leagues/bundesliga.png";
import frenchLeagueLogo from "../Images/Leagues/ligue_1.png";
import italianLeagueLogo from "../Images/Leagues/Serie_A.png";

const listOfLeagues = [
  // {
  //   title: "Uefa Champions League",
  //   url: "/leagues/uefa-champions-league",
  //   image: `${uefaChampionsLeague}`,
  //   logo: `${uefaChampionsLeagueLogo}`,
  //   id: "2",
  // },
  {
    title: "La Liga",
    url: "/leagues/laliga",
    image: `${laliga}`,
    logo: `${laligaLogo}`,
    id: "140",
  },
  // {
  //   title: "Uefa Europa League",
  //   url: "/leagues/uefa-europa-league",
  //   image: `${uefaEuropaLeague}`,
  //   logo: `${uefaEuropaLeagueLogo}`,
  //   id: "3",
  // },
  {
    title: "Barclays Premier League",
    url: "/leagues/barclays-premier-league",
    image: `${barclaysPremierLeague}`,
    logo: `${barclaysPremierLeagueLogo}`,
    id: "39",
  },
  {
    title: "Bundesliga",
    url: "/leagues/bundesliga",
    image: `${bundesliga}`,
    logo: `${bundesligaLogo}`,
    id: "78",
  },
  {
    title: "Ligue I",
    url: "/leagues/ligue-1",
    image: `${frenchLeague}`,
    logo: `${frenchLeagueLogo}`,
    id: "61",
  },
  {
    title: "Serie A",
    url: "/leagues/serie-A",
    image: `${italianLeague}`,
    logo: `${italianLeagueLogo}`,
    id: "135",
  },
  // {
  //   title: "Indian Super League",
  //   url: "/leagues/indian-super-league",
  //   image: `${indianSuperLeague}`,
  //   logo: `${indianSuperLeagueLogo}`,
  // },
];

export default listOfLeagues;
