import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    displayText: "Let's hit the beach!",
    displayIcon: "sun"
  },
  winter: {
    displayText: "Brrr, it is cold!",
    displayIcon: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { displayText, displayIcon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${displayIcon} icon`} />
      <h1>{displayText}</h1>
      <i className={`icon-right massive ${displayIcon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
