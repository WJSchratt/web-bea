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
  color:"white",
  fontSize:"30px",
  fontFamily:"font-family: 'Ranga', cursive",
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
    <div style={{ height: 750 }}>
    </div>
  </Parallax>
    <div className="hey1">
      <h2 className="marry">We are getting Married</h2>
      <p>(To eachother)</p>
    </div>
    <Parallax bgImage={robbea} strength={900}>
      <div style={{ height: 600 }}>
      <div className="intro-1" style={insideStyles}>You are invited to join us</div>
      </div>
    </Parallax>
      <div id="where" className="hey2">
        <h2 className="marry">Its gonna Happen here</h2>
        <p>(In Florida)</p>
        <p className="marri"> The wedding will take place at Little Forest Farm close to Gainesville. <a href="http://www.littleforestfarm.biz/">http://www.littleforestfarm.biz/</a>
        15500 SW 15th Ave Newberry FL 32669</p>
      </div>
    <Parallax bgImage={image2} strength={-400}>
      <div style={{ height: 500 }}>
        <div className="intro-2" style={insideStyles}>November 2nd 2019</div>
      </div>
    </Parallax>
    <h1 className="henry">Hotel Accommodations</h1>
    <p className="poopButt"> We have booked 2 blocks of rooms in two separate hotels. The Hilton Double Tree and the Hilton Conference Center. The links to the reservations can be found below.</p>
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
        <div style={insideStyles}><a href= "https://doubletree.hilton.com/en/dt/groups/personalized/G/GNVGLDT-WBR-20191101/index.jhtml?WT.mc_id=POG">Hotel-1</a><a href="https://www.hilton.com/en/hi/groups/personalized/G/GVNCCHF-SB1119-20191101/index.jhtml?WT.mc_id=POG">Hotel-2</a></div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
export default App;
