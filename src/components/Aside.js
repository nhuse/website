import '../styles/aside.css'
import linkedin from '../assets/images/linkedin.jpg'
import github from '../assets/images/github.jpg'
import gmail from '../assets/images/gmail.jpg'
import medium from '../assets/images/medium.png'
import resumeLogo from '../assets/images/resume.png'
import resume from '../assets/Nate Resume.docx'

export default function Aside() {
    return (
    <aside>
        <div className="aside-img-wrapper">
            <p style={{ margin: "0 0 20px 5px", fontSize: "19px" }}>Get in<br/> Touch</p>
            <img src={linkedin} alt="linkedin" className="contact-img" id="linkedin" onClick={() => window.open('https://www.linkedin.com/in/nathan-huse-64a52016b/')} />
            <div id="resume">
                <a href={resume} target="_blank">
                    <img src={resumeLogo} alt="resume" className="contact-img"/>
                </a>
            </div>
            <div id="gmail-wrapper">
                <img src={gmail} alt="gmail" id="gmail" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=nate.huse1023@gmail.com')} />
                <p className="contact-hide">nate.huse1023@gmail.com</p> <br/>
            </div>
            <img src={github} alt="github" className="contact-img" id="github" onClick={() => window.open('https://github.com/nhuse')} />
            <img src={medium} alt="medium" className="contact-img" id="medium" onClick={() => window.open('https://medium.com/@nathan.huse')} />
        </div>
    </aside>
    )
}