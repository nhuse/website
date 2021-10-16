import Navbar from './Navbar'
import linkedin from '../assets/images/linkedin.jpg'
import github from '../assets/images/github.jpg'
import gmail from '../assets/images/gmail.jpg'
import medium from '../assets/images/medium.png'

export default function Home() {
    return (
    <>
    <Navbar />
    <div className="home-screen">
        <aside>
            <div className="aside-img-wrapper">
                <p style={{ marginBottom: "20px", fontSize: "19px" }}>Get in Touch</p>
                <img src={linkedin} alt="linkedin" className="contact-img" id="linkedin" onClick={() => window.open('https://www.linkedin.com/in/nathan-huse-64a52016b/')} /> <br/>
                <div id="gmail-wrapper">
                    <img src={gmail} alt="gmail" id="gmail" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=nate.huse1023@gmail.com')} />
                    <p className="contact-hide">nate.huse1023@gmail.com</p> <br/>
                </div>
                <img src={github} alt="github" className="contact-img" id="github" onClick={() => window.open('https://github.com/nhuse')} /><br />
                <img src={medium} alt="medium" className="contact-img" id="medium" onClick={() => window.open('https://medium.com/@nathan.huse')} /><br/>
            </div>
        </aside>
        <div className="main">
            <p className="line-1">Howdy! It's Nathan.</p>
            <div className="wrapper">
                <div className="static">I'm a</div>
                <ul className="dynamic">
                    <li id="d"><span>Developer</span></li>
                    <li id="tj"><span>Tech Junkie</span></li>
                    <li id="g"><span>Gamer</span></li>
                    <li id="ce"><span>Car Enthusiast</span></li>
                </ul>
            </div>
            <p className="line-2">Thanks for checking out my site. <br/> Feel free to reach out to me and check out my previous work!</p>
        </div>
    </div>
    </>
    )
}
    