import React from "react";
import "./Intro.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import img from '../assets/programmer.svg'

export default function Intro(){
    return(
        <section className="intro">
            <div className="img">
            <img id="img-programmer" src={img}/>
            </div>
            <div className="content">
            <h1>Hi I am<br/><strong>Dashan Nadeema</strong> </h1>
            <p id="para-dev">Full-Stack-Dev</p>
            </div>
        </section>
    )
}