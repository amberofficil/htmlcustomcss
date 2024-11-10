import "../style/services.css";
import { BsWebcam } from "react-icons/bs";
import { FaBuildingUser } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

function Services(){
    return(
        <main className="main">
            <div className="ser-container">
              {/* top div */}
              <div className="top-div-ser">
                <h2 className="title-ser">My Services</h2>
                <p className="des-ser">Trusted Professionals for Exceptional Quality and Service Our clients from various industries trust us to deliver top-notch quality and result. 
                Here's what they have to say about our work</p>
              </div>
              {/* bootom div */}
              <div className="boxes-con">
                <div className="box">
                  <FaLaptopCode className="ser-icon"/>
                  <h3>Web Development</h3>
                  <span>Blog , E-Commerce</span>
                </div>
                <div className="box">
                  <FaBuildingUser className="ser-icon"/>
                  <h3>UI/UX Design</h3>
                  <span>Mobile App, Website Design</span>
                </div>
                <div className="box">
                  <BsWebcam className="ser-icon"/>
                  <h3>Game Design</h3>
                  <span>Character Design</span>
                </div>
              </div>
            </div>
        </main>
    )
}
export default Services