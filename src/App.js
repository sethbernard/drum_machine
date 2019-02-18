import React, { Component } from "react";
import "./App.css";
import DrumPad from "./DrumPad";

const data = [
  {
    text: "Q",
    id: "Heater",
    keycode: 81,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    text: "W",
    id: "Heater 2",
    keycode: 87,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    text: "E",
    id: "Heater 6",
    keycode: 69,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    text: "A",
    id: "Dsc Oh",
    keycode: 65,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    text: "S",
    id: "Kickin Hat",
    keycode: 83,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    text: "D",
    id: "Give Us a Light",
    keycode: 68,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    text: "Z",
    id: "Dry Ohh",
    keycode: 90,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    text: "X",
    id: "Punchy Kick",
    keycode: 88,
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    text: "C",
    id: "Snare",
    keycode: 67,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = { display: "" };
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          {data.map(pad => (
            <DrumPad
              text={pad.text}
              key={pad.id}
              id={pad.id}
              keyCode={pad.keycode}
              url={pad.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
