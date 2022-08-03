import star from '../image/star.png'
export default function Card(props) {
    let badgeText;
    if (props.openSpot === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === "online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={props.img} alt="product image" className='card--product' />
            <div className='card--line'>
                <img className='card--star' src={star} alt="star" />
                <h3><span className='bold'>{props.rating}</span><span className='gray'>({props.reviewCount}).{props.country} </span></h3>
            </div>
            <div className='card--info'>
                <h3>{props.desc}</h3>
            </div>
            <div className='card--price'>
                <h2><span className='bold'>From ${props.price} /</span><span className='gray'> Piece</span></h2>
            </div>
        </div>
    )
}