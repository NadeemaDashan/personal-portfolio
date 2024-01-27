import React from "react";
import './Work.css'
import img1 from '../assets/Rectangle 3-1.png'
import img2 from '../assets/Rectangle 3-2.png'
import img3 from '../assets/Rectangle 3-3.png'
import img4 from '../assets/Rectangle 3-4.png'
import img5 from '../assets/Rectangle 3-5.png'
import img6 from '../assets/Rectangle 3-6.png'
import img7 from '../assets/Rectangle 3-7.png'
import img8 from '../assets/Rectangle 3-8.png'
import img9 from '../assets/Rectangle 3-9.png'
import img10 from '../assets/Rectangle 3.png'

export default function Work() {
    return (
        <section className="work">
            <div className="top-work">
                <h1>My Work</h1>
                <p>Few of the projects I have completed </p>
            </div>
            <div className="work-content">
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
                <img src={img4}></img>
                <img src={img5}></img>
                <img src={img6}></img>
            </div>
            <div className="work-description">
                <img src={img2}></img>
                <div className="work-description-para">
                    <h5><strong><a href="#"></a>Project Name</strong></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className="work-description">
                <img src={img1}></img>
                <div className="work-description-para">
                    <h5><strong><a href="#"></a>Project Name</strong></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className="work-description">
                <img src={img2}></img>
                <div className="work-description-para">
                    <h5><strong><a href="#"></a>Project Name</strong></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className="work-description">
                <img src={img3}></img>
                <div className="work-description-para">
                    <h5><strong><a href="#"></a>Project Name</strong></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className="work-description">
                <img src={img5}></img>
                <div className="work-description-para">
                    <h5><strong><a href="#"></a>Project Name</strong></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="git-link">
                <p>All the project repositories are available in gitHub and
                    some are hosted<a href="#"> click here to check github</a></p>
            </div>
        </section>
    )
}