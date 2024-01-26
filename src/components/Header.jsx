import React from "react";
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    return(
        <header>
            <div className="header-content col-xs-3">
                <h1 id="header-h1"> [ ..Nadeema.. ] </h1>
                <ul className="header-items">
                    <li>Home</li>
                    <li>Socials</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </header>
    )
}