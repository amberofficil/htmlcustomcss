import "../style/education.css";
function Education(){
    return(
        <main className="edu-main">
        <div className="edu-text">
            <h1>Education</h1>
            <p>Trusted Professionals for Exceptional Quality and Service Our clients from various industries trust us to deliver top-notch quality and result. 
                Here's what they have to say about our work</p>
        </div>
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name">University of Karachi</h1>
                <span>B.A 2016 to 2018</span>
            </div>
            <div className="arts">
               <h1>Bachelor in Arts</h1>
               <p> I am pursuing a B.A degree in Arts at the prestigious University of Karachi.</p>
            </div>
        </div>
        {/* box 2 */}
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Women's Collage</h1>
                <span>Intermediate 2013 to 2015</span>
            </div>
            <div className="arts">
               <h1>Intermediate in Arts</h1>
               <p>I am pursuing a Inter Certificate in Arts at the prestigious Women's College.</p>
            </div>
        </div>
        {/* box 3 */}
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Government IT Initiative</h1>
                <span>Student (going on)</span>
            </div>
            <div className="arts">
               <h1></h1>
               <p>At the Governor IT Initiative,students explore AI,Metaverse and Blockchain technologies in an accessible manner.This free programe is an excellent opportunitynfor those interested in these innovative fields.</p>
            </div>
        </div>
        </main>
    )
}
export default Education

