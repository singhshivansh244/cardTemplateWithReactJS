import '../style.css'
import logo from '../image/earthLogo.webp'

export default function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <img className='logo' src={logo} alt="earth logo" />
                <h4>My Travel Journal</h4>
            </div>
        </nav>
    )
}