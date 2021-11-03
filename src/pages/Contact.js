import React from 'react'
import { useEffect , useState} from 'react';
import "./Contact.css"

function Contact() {
    const rel = () => {
        if (document.getElementById("close")) {
            document.getElementById("close").click()
        }
    }

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
        rel()
      });
    return (
        <div style={{ paddingTop: "0px" }}>
            <div style={{ paddingTop: "80px", backgroundColor:"grey"}} ></div>
            <div className="container-fluid" style={{backgroundColor:"#f6f6f6", padding:"50px"}}>
                <div className="mt-3">
                    <h1 style={{fontFamily:"Playfair", fontSize:"70px", fontWeight:"400", color:"#444"}}>Contact</h1>
                    <hr className="mb-5" />
                    {success && (
                        <p style={{ color: "green" }}>Thanks for your message! </p>
                    )}
                </div>

                <form name="contact" method="POST" action="/contact/?success=true" data-netlify="true" >
                <input type="hidden" name="form-name" value="contact" required />
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name (required)</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Your Email (required)</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" name="subject" className="form-control" id="subject" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" name="message" id="message" rows="3" />
                    </div>
                    <input type="submit" className="btn send" value="SEND" />
                </form>
            </div>
        </div>
    )
}

export default Contact
