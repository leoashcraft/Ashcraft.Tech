import React, { useContext } from "react";
import { useEffect } from "react";
import "./About.css";
import Footer from "../components/Footer";
import { UserContext } from "../UserContext";


function About() {
  const {current, setCurrent} = useContext(UserContext)

  const rel = () => {
    if (document.getElementById("close")) {
      document.getElementById("close").click();
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    rel();
    setCurrent(true)
  });
  return (
    <div style={{ paddingTop: "0px" }}>
      <div className="container-fluid bg-secondary first-sec">
        <div className="row">
          <div
            style={{
              backgroundColor: "black",
              backgroundImage: `url(${process.env.PUBLIC_URL + "/about.jpg"})`,
              backgroundPosition: "center",
              position: "relative",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "700px"
            }}
            className="col-sm-12 col-md-12 col-lg-6 fdi"
          ></div>
          <div className="col-sm-12 col-md-12 col-lg-6 first-sec-2">
            <div>
              <h1>Leo Ashcraft III</h1>
              <p>
                I am well versed across the technology world. Beginning my
                technological career at 16 building and repairing computers,
                slowly transitioning into Network Administration and finally,
                Web Development. I have worked closely with the State of Texas
                for the past several years as well as clients ranging from
                insurance call centers to Doctor's Offices. I am certified in
                several languages such as Python, JavaScript and React, keeping
                up to date on cutting edge platforms like GitHub and Shopify.
                I specialize in direct communication and the evolving business 
                needs of my clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="second-sec">
        <div className="container-fluid bg-secondary third-back-section">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 p-0">
              <div>
                <div>
                  <h3 style={{ fontSize: "158px", color: "#141e55" }}>
                    100<sup>+</sup>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 p-0">
              <div>
                <div style={{ textAlign: "left", paddingTop: "30px" }}>
                  <h3>Projects Completed</h3>
                  <p>
                    Over the past ten years, I have completed over 100
                    projects including iOS, Android and Web Apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third sec */}

      <div className="container-fluid">
        <div className="row t-sec">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <h3 style={{color:"#141e55", fontFamily:"Montserrat"}}>01.&nbsp;Research</h3>
            <p>The client's vision is the most important piece for building out their reality. It's vital for me to "plug in" and become familiar with the subject at hand. Not unlike interior home design, it's important to have a myriad of ideas. </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <h3 style={{color:"#141e55", fontFamily:"Montserrat"}}>02. Design</h3>
            <p>Not to be confused with the framework and backbone of the website, the design is just as important. Becoming an all encompassing process to pull in research including proof of concept, color palettes and prototype mockups for crowdtesting.</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <h3 style={{color:"#141e55", fontFamily:"Montserrat"}}>03. Develop</h3>
            <p>Becoming all immersive in both, the research and design findings, we expand on the specific functionality of the website including materials, systems and methods. The end result being the exact vision of the client's ideal web presence.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
