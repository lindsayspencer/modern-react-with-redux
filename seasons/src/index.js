import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay.js";
import Loader from "./Loader.js";

class App extends React.Component {
  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  state = { lat: null, errorMessage: "" };
  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }
  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request" />;
  }
  render() {
    return(
      <div style={{border: '5px solid grey'}}>
        {this.renderContent()}
      </div>
    )
}
}

ReactDOM.render(<App />, document.querySelector("#root"));
