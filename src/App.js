import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import SectionTwo from "./Components/Home/section_two";
import Footer from "./Components/Footer/footer";
import League from "./Components/League/league";
import PrivacyPolicy from "./Components/Privacy-Policy/privacy-policy";
import TermsAndConditions from "./Components/Privacy-Policy/terms-and-conditions";
import Disclaimer from "./Components/Privacy-Policy/disclaimer";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className="main">
        <Route path="/" render={(routeProps) => <Navbar {...routeProps} />} />

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/leagues" render={() => <SectionTwo />} />
          <Route
            path="/leagues/:league"
            render={(routeProps) => <League {...routeProps} />}
          />
          <Route
            exact
            path="/privacy-policy"
            render={() => <PrivacyPolicy />}
          />
          <Route
            exact
            path="/terms-of-use"
            render={() => <TermsAndConditions />}
          />
          <Route exact path="/disclaimer" render={() => <Disclaimer />} />
          <Route path="/">
            <h5>Error 404: Page not found</h5>
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
