import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "/modernised diep wiki logo.png"

export function Navbar() {
    return (
        <nav id="main-nav">
            <Link to="/">
                <img className="logo" src={logo} alt="" />
            </Link>
            <Link to="/tanks">
                <div className="tab">Tanks</div>
            </Link>
            <Link to="/bosses/">
                <div className="tab">Bosses</div>
            </Link>
            <Link to="/shapes/">
                <div className="tab">Shapes</div>
            </Link>
            <Link to="/formulas/">
                <div className="tab">Formulas</div>
            </Link>
            <Link to="/records">
                <div className="tab">World Records</div>
            </Link>
        </nav>
    )
}