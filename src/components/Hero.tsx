import Image from "next/image";
import "../style/hero.css";

function Hero(){
    return(
        <div className="hero-container">
              <div className="hero-boxes-con">
                {/* left */}
                <div>
                 <Image src={"/image1.jpg"}
                 width={200}
                 height={200}
                 className="header-image"
                  alt="profile"></Image>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I'm Amber Fayyaz Front-end Developer</h1>
                    <p className="des-hero">I'm Amber,a passionate web developer with expertise in HTML,CSS,JAVASCRIPT and TYPESCRIPT. I love building user-friendly web applications and continously improving my coding techniques.</p>
                    <button className="hero-btn">Hire me</button>
                </div>
              </div>
        </div>
    )
}
export default Hero 