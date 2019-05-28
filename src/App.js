import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import './App.css'
import headpic from './pictures/bea.jpg';
import Nav from './components/Nav.js';
import robbea from "./pictures/test.jpg"
import location from "./pictures/location.jpg"
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const App = () => (
  <div style={styles}>
  <Nav/>

  <Parallax bgImage={headpic} strength={350}>
    <div style={{ height: 700 }}>
    </div>
  </Parallax>
    <div className="hey">
      <h2 className="marry">We are getting Married</h2>
      <p>(To eachother)</p>
    </div>
    <Parallax bgImage={robbea} strength={900}>
      <div style={{ height: 600 }}>
      </div>
    </Parallax>
      <div className="hey">
        <h2 className="marry">Its gonna Happen here</h2>
        <p>(In Florida)</p>
      </div>
    <Parallax bgImage={image2} strength={-400}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(999, 999, 999, ${percentage * 2})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>

      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
export default App;
