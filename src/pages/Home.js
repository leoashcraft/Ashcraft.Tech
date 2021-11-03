import React from "react";
import { useEffect } from "react";
import "./Home.css";
import Svg1 from "../components/Svg1";
import Svg2 from "../components/Svg2";
import Svg3 from "../components/Svg3";
import Svg4 from "../components/Svg4";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext } from "react";
import { UserContext } from "../UserContext";

function Home() {
  const {current, setCurrent} = useContext(UserContext)
    
  const changeshape = (e) => {
    let elementClassName = e.target.className;
    if (elementClassName == "third-bk-1") {
      document.getElementById("tbk-1").style.borderRadius = "0px"
      document.getElementById("tbk-1").style.transition = "0.3s"
    } else if (elementClassName == "third-bk-2") {
      document.getElementById("tbk-2").style.borderRadius = "0px"
      document.getElementById("tbk-2").style.transition = "0.3s"
    }
  }

  const returnShape = (e) => {
    let elementClassName = e.target.className;

    if (elementClassName == "third-bk-1") {
      document.getElementById("tbk-1").style.borderRadius = "300px"
      document.getElementById("tbk-1").style.transition = "0.3s"

    } else if (elementClassName == "third-bk-2") {
      document.getElementById("tbk-2").style.borderRadius = "300px"
      document.getElementById("tbk-2").style.transition = "0.3s"

    }
  }

  const rel = () => {
    if (document.getElementById("close")) {
      document.getElementById("close").click();
    }
  };
  useEffect(() => {
    rel();
  });
  const theHeight = window.innerHeight + "px";

  // alert(window.screen.height)
  const flipCard = document.getElementById("flip-card-inner");

  const frontScroll = (e) => {
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    if(delta==1)         // if mouse scrolls up
    {
      return false
    }
    if(delta==-1)        // if mouse scrolls down, disable scrolling.
    {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector(".fa-arrow-circle-down").click()
        window.scrollTo(0,0);
    }
    return false;
    
  };

  const backScroll = (e) => {
    e.preventDefault()
    if (!window.pageYOffset) {
      document.querySelector(".fa-arrow-circle-up").click()
    }
    
  };
  const flip = (e) => {
    if (e.target.className === "fas fa-arrow-circle-up") {
      document.getElementById("flip-card").style.height = theHeight;
      document.getElementById("flip-card-inner").style.transform =
        "rotateX(360deg)";
    } else if (e.target.className === "fas fa-arrow-circle-down") {
      console.log(e.target.className);
      document.getElementById("flip-card-inner").style.transform =
        "rotateX(180deg)";
      document.getElementById("flip-card").style.height = "1000px";
    }
  };
  return (
    <div id="home">
      <div id="flip-card" className="flip-card">
        <div id="flip-card-inner" className="flip-card-inner">
          <div
            id="flip-card-front"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/thumbnail-1.png"
              })`,
              height: theHeight,
            }}
            className="flip-card-front"
            onWheel={frontScroll}
            onClick={flip}
          >
            <div className="heading-section">
              <h1 className="heading">
                <span className="head1">Not </span>
                <span> </span>
                <span className="head2">Your </span>
                <span> </span>
                <span className="head3">Average </span>
                <span> </span>
                <span className="head4">Web </span>
                <span> </span>
                <span className="head5">Developer</span>
              </h1>
              <h5
                className="heading-bottom"
                style={{ color: "white", marginTop: "20px" }}
              >
                Get ready to turn your <i>hopes and dreams</i> into <i>your reality.</i>
              </h5>
              <i className="fas fa-arrow-circle-down"></i>
            </div>
          </div>
          <div
            id="flip-card-back"
            onWheel={backScroll}
            className="flip-card-back"
            onClick={flip}
          >
            <div
              className="container-fluid first-back-section"
              style={{ paddingTop: "150px" }}
            >
              <i className="fas fa-arrow-circle-up" onClick={flip}></i>
              <div className="row g-2 fs">
                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="p-3 text-center">
                    <Svg1 />
                    <p className="pt-4">World-class Websites</p>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="p-3 text-center">
                    <Svg2 />
                    <p className="pt-4">Beyond All Reality</p>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="p-3 text-center">
                    <Svg3 />
                    <p className="pt-4">With Expandable Code</p>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="p-3 text-center">
                    <Svg4 />
                    <p className="pt-4">Written From Scratch</p>
                  </div>
                </div>
              </div>
              {/* Second section */}
              <div
                className="container-fluid"
                style={{ paddingTop: "100px", paddingBottom: "150px" }}
              >
                <div className="row g-2">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="p-3 text-end sec-abt">
                      <h3>
                        Hi. I’m Leo, nice to meet you. No pressure!
                        Stay as long as you like.
                      </h3>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="p-3 text-start">
                      <p>
                        I strive to build excellent websites that are ahead of
                        their time; turning the hopes and dreams of my clients
                        into a reality. I specialize in web development for
                        clients ranging from individuals and small-businessess to 
                        large enterprise corporations and government organizations.
                        What would you do if you had an expert developer available 
                        at your fingertips? Consider it a reality. Your reality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third section */}

            <div className="container-fluid bg-secondary third-back-section">
              <div className="row">
                <Link to="/about" className="col-sm-12 col-md-6 col-lg-6 p-0 text-decoration-none" onMouseOver={changeshape} onMouseLeave={returnShape}>
                  <div className="third-bk-1">
                    <div id="tbk-1">
                      <div>
                        <i>So just who am I?</i>
                        <h2>About Me</h2>
                      </div>
                    </div>
                  </div>
              </Link>

              <Link to="/contact" className="col-sm-12 col-md-6 col-lg-6 p-0 text-decoration-none" onMouseOver={changeshape} onMouseLeave={returnShape}>
                <div className="third-bk-2">
                  <div id="tbk-2">
                    <div>
                      <i>Reality you say??</i>
                      <h2>Contact Me</h2>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
