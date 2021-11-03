import React from 'react'
import { useEffect } from 'react';

function Resume() {
    const clickImg = `${process.env.PUBLIC_URL + "/click.png"}`
    const resume = `${process.env.PUBLIC_URL + "/resume.pdf"}`
    const qricon = `${process.env.PUBLIC_URL + "/qricon.png"}`

    const rel = () => {
        if (document.getElementById("close")) {
          document.getElementById("close").click();
        }
      };

      useEffect(() => {
        rel();
      });
    return (
        <div className="top">
            <div style={{ paddingTop: "70px", backgroundColor:"grey"}} ></div>
            <div style={{textAlign:"center"}}>
                <img src={clickImg} style={{width:"200px", height: "auto"}} />
                    <br /><a href={resume} download>
                    <img style={{width: "100px", height: "100px"}} src={qricon} /></a>
            </div>
        </div>
    )
}

export default Resume
