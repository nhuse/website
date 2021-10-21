import { Link } from 'react-router-dom'
import '../styles/home.css'
import Aside from './Aside'
import Navbar from './Navbar'

export default function Home() {
    return (
    <>
    <Navbar />
    <div className="home-screen">
        <Aside />
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
            <p className="line-2">Thanks for checking out my site. <br/>
            Feel free to reach out to me and be sure to check out my <Link to="/my-work" className="work-link">previous work!</Link></p>
        </div>
    </div>
    </>
    )
}
    