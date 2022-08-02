import mainImage from './userProfile1.jpg'
import Button from './Button'

export default function Header(props) {
    return (
        <div>
            <img className='userImage' src={mainImage} alt="user Image" />
            <div className='userInfo'>
                <h2>{props.name}</h2>
                <h4>{props.profession}</h4>
                <small>{props.post}</small>
            </div>
        </div>
    )
}