import { Link } from "react-router-dom";
import './MainNavigation.css'

function MainNavigation() {
    const openNav = () => {
        document.getElementById("myNav").style.height = "100%";
        const openSpan = document.getElementById("open");
        openSpan.style.display = "none";
        const closeSpan = document.createElement("span")
        closeSpan.textContent = "X";
        closeSpan.style.fontSize = "20px"
        closeSpan.style.cursor = "pointer";
        closeSpan.className="closebtn";
        closeSpan.onclick = closeNav;
        closeSpan.onmouseover = function () {
          closeSpan.style.transition = "1s"
          closeSpan.style.fontSize = "30px"; 
        }
        // closeSpan.style.transform = "rotateX(180deg)"
        closeSpan.id = "close";
        console.log(closeSpan);

        const navCon = document.getElementById("nav-con")
        navCon.appendChild(closeSpan)
    }
    
    const closeNav =() => {
      document.getElementById("close").remove();
        document.getElementById("myNav").style.height = "0%";
        document.getElementById("open").style.display = "block";
    }

  return (
    <div className="container-fluid p-0">
      <div id="myNav" className="overlay">
        
        <div className="overlay-content">
          <Link to="/">Home</Link> 
          <Link to="/about">About</Link> 
          <Link to="/resume">Resume</Link>{" "}
          <Link to="/contact">Contact</Link>{" "}
        </div>
      </div>
      <div id="nav-con" className="d-flex justify-content-between nav-con pt-4 px-4">
          <h4>Leo Ashcraft III</h4>
          <span id="open" style={{fontSize:"30px",cursor:"pointer"}} onClick={openNav}>
        &#9776;
      </span>
      </div>
      
    </div>
  );
}

export default MainNavigation;
