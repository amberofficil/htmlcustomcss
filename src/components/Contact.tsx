import "../style/contact.css";
function Contact(){
    return(
        <main className="contact-main">
            <div className="form-container">
                <h1 className="con-title">Contact us</h1>
                <form className="form">
                    <input className="input" type="text" placeholder="Enter Your Name" />
                    <input className="mail" type="mail" placeholder="Enter Your Emai" />
                    <input className="msg" type="text" placeholder="Your Message" />
                </form>
                <button className="btn-sub">Submit</button>
            </div>
        </main>
    )
}
export default Contact