import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";


function About(){
    return(
        <div className="hero-container">
              <div className="hero-boxes-con">
                {/* left */}
                <div>
                 <Image src={"/image1.jpg"}
                 width={200}
                 height={200}
                 className="header-image"
                  alt="profile"/>
                  <div className="social-icon">
                 <Link href={""}> < FaYoutube className="s-icon1"/> </Link>
                <Link href={""}> <FaFacebook className="s-icon2"/> </Link>
                <Link href={""}> <FaInstagram className="s-icon3"/> </Link>
                  </div>
                  
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                    <p className="des-hero">I'm a student at GIAIC,pursuing a course in Artificial Intelligence,Web3 & Metaverse.Passionate about technology and constantly learning new skill to stay up-to-date with the latest innovation.</p>
                </div>
              </div>
        </div>
    )
}
export default About 