import locationIcon from '../image/location.png'

export default function Card(props) {
    return (
        <div className="card--main">
            <img className="card--img1" src={props.item.img} alt="mount fuji" />
            <div className='card--info'>
                <div className='card--info--firstline'>
                    <img className='card--location' src={locationIcon} alt="location icon" />
                    <h3 className='card--country'>{props.item.country}</h3>
                    <a className='gray' href="#">View on Google Maps</a>
                </div>
            </div>
            <div className='card--desc'>
                <h1>{props.item.location}</h1>
                <h4>{props.item.dateFrom} {props.item.dateTo}</h4>
                <p>
                    {props.item.desc}
                </p>
            </div>
        </div>
    )
}