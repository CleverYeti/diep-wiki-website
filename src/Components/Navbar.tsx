import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "/diep docs logo.png"

export function Navbar() {
    return (
        <nav id="main-nav">
            <Link to="/">
                <img className="logo" src={logo} alt="" />
            </Link>
            <Link to="/tanks/">
                <div className="tab">Tanks</div>
            </Link>
            <Link to="/bosses/">
                <div className="tab">Bosses</div>
            </Link>
            <Link to="/shapes/">
                <div className="tab">Shapes</div>
            </Link>
        </nav>
    )
}