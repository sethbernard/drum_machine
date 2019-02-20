import React, { Component } from "react";
import "./App.css";
import { data } from "./data";
import DrumPad from "./DrumPad";

const backgroundColor = () => {
  backgroundColor: "#aab6fe";
};

class App extends Component {
  state = {
    display: "You know what to do :)"
  };

  displayName = id => {
    this.setState({
      display: id
    });
  };

  render() {
    return (
      <div className="App">
        <h1 id="title">Drum Machine</h1>
        <h3 id="display">{this.state.display}</h3>
        <div className="container">
          <div id="drum-machine">
            {data.map(pad => (
              <DrumPad
                style={this.state.display ? backgroundColor : null}
                text={pad.text}
                key={pad.id}
                id={pad.id}
                keyCode={pad.keycode}
                url={pad.url}
                display={this.displayName}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
