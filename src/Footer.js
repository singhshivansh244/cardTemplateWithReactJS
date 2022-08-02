import twitter from './twitter.png'
import facebook from './facebook.png'
import insta from './insta.png'

export default function Footer() {
    return (
        <div className="footer">
            <img style={{ borderRadius: '8px' }} src={twitter} alt="twitter logo" width='30px' />
            <img style={{ borderRadius: '8px' }} src={facebook} alt="facebook logo" width='30px' />
            <img style={{ borderRadius: '8px' }} src={insta} alt="insta logo" width='30px' />
            <img style={{ borderRadius: '8px' }} src={facebook} alt="facebook logo" width='30px' />
        </div>
    )
}