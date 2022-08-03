import '../style.css'
import logo from '../image/AirbnbLogo.png'

export default function Navbar() {
    return (
        <nav>
            <img className='logo' src={logo} alt="airbnb logo" />
            <hr />
        </nav>
    )
}