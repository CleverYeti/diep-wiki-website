import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"
import logo from "/modernised diep wiki logo.png"
import { ReactNode } from "react";

function Tab({
    link,
    name,
}: {
    link: string,
    name: string,
}) {
    const location = useLocation()
    return (
        <Link to={link}>
            <div className="tab" data-is-active={link == location.pathname}>{name}</div>
        </Link>
    )
}

export function Navbar() {
    return (
        <nav id="main-nav">
            <Link to="/">
                <div className="logo">
                    <img className="logo" src="/diepWikiLogo.png" alt="" />
                </div>
            </Link>
            <Tab link="/tanks" name="Tanks"/>
            <Tab link="/bosses/" name="Bosses"/>
            <Tab link="/shapes/" name="Shapes"/>
            <Tab link="/formulas/" name="Formulas"/>
            <Tab link="/records" name="World Records"/>
        </nav>
    )
}