import React, { Component } from 'react';
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import './App.css'
import headpic from './pictures/front-page.jpg';
import Nav from './components/Nav.js';
import robbea from "./pictures/page-2.jpg"
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

export default class App extends Component {
  onClick(){
      window.location.href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547430189";
  }
  onClicker(){
      window.location.href="https://www.amazon.com/wedding/organize-registry/?ref_=lol_ov_le";
  }
  onClickiest(){
    window.location.href="http://www.littleforestfarm.biz/";
  }
    render() {
      return(
  <div style={styles}>
  <Nav/>

  <Parallax bgImage={headpic} strength={200}>
    <div style={{ height: 700 }}>
    </div>
  </Parallax>
    <div className="hey1">
      <h2 className="marry-1" id="home">We are getting Married</h2>
      <p>(To eachother)</p>
    </div>
    <Parallax bgImage={robbea} strength={600} >
      <div style={{ height: 700 }}>
      <div className="intro-1" style={insideStyles}>You are invited to join us</div>
      </div>
    </Parallax>
      <div id="where" className="hey2">

        <h2 className="marry"><a href="http://www.littleforestfarm.biz/">It's gonna happen here</a></h2>
        <input class="btn btn-lg btn-dark" type="button" id="farm" onClick={this.onClickiest} value="Little-Forest-Farm" />
      
      </div>
    <Parallax bgImage={image2} strength={600} bgImageStyle={{ opacity: '.8'}} >
      <div style={{ height: 500 }}>
        <div id="when" style={insideStyles}>November 2nd 2019</div>
      </div>
    </Parallax>
    <div className="Last-try">
    <h1 >Hotel Accommodations</h1>
     <h2 className="hotelex">We have booked 2 blocks of rooms in two separate hotels. The Hilton Double Tree and the Hilton Conference Center. The links to the reservations can be found below.</h2>
    </div>
    <Parallax
      bgImage={image4}
      strength={200}

      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(18,0,0, ${percentage * 2})`,
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
        <div className="render" style={insideStyles}><div><a className="hotel" href= "https://doubletree.hilton.com/en/dt/groups/personalized/G/GNVGLDT-WBR-20191101/index.jhtml?WT.mc_id=POG">Doubletree</a>
        </div>
        <div>
        <a className="hotel" href="https://www.hilton.com/en/hi/groups/personalized/G/GVNCCHF-SB1119-20191101/index.jhtml?WT.mc_id=POG">Hilton</a></div>
        </div>
        </div>
    </Parallax>

    <div className="end" style={{ height: 400 }}>
    <h1 className="ending"> We are looking forward to seeing you</h1>
    <h2 className="lol" id="extra"> The Wedding Registry </h2>
    <input class="btn btn-lg btn-primary" id="but" type="button" onClick={this.onClick} value="Bed-bath and beyond" />
    <input class="btn btn-lg btn-primary" id="buttons" type="button" onClick={this.onClicker} value="Amazon" />
    </div>
  </div>
);

}
}
