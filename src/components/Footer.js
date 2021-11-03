import { Link } from "react-router-dom"

function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer>
              <div id="footer" className="d-flex justify-content-between container align-items-center p-3">
              <div><p className="p-0 m-0">© 2021 Leo Ashcraft III.</p></div>
              <div className="d-flex">
                <Link to="/"><i className="fab fa-linkedin me-3"></i></Link>
                <Link to="/"><i className="fab fa-github me-3"></i></Link>
                <Link to="/"><i className="fab fa-twitter me-3"></i></Link>
              </div>
              </div>
            </footer>
        </div>
    )
}

export default Footer
