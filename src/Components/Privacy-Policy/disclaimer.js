import React from "react";

const Disclaimer = () => {
  return (
    <div className="padding-medium">
      <h3>Word from the owner</h3>
      <p>
        This is to specify that this application is currently at in-progress
        state. This is a project which I am building to explore web development.
        Meaning, for now, this webapp is not for earning purposes.
      </p>
      <p>
        The pictures have been taken from{" "}
        <a href="https://unsplash.com/">Unsplash</a> and there is no intention
        of violating any copyrights.
      </p>
      <p>
        The data has been taken from{" "}
        <a href="https://www.api-football.com/">API-FOOTBALL</a>. I extend my
        appreciation towards the above two firms for providing necessary
        resources for this website.
      </p>
    </div>
  );
};

export default Disclaimer;
