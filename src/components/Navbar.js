import '../styles/navbar.css'
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/personal-webpage">
                <img src={logo} alt="logo" className="logo-img" />
            </Link>
            <Link to="/my-work" className="nav-link">
                My Work
            </Link>
        </div>
    )
}