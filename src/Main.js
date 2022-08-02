export default function Main(props) {
    return (
        <div className="main">
            <h2 style={{ color: "white", left: '10px'}}>{props.title}</h2>
            <p className="main-para">
                {props.about}
            </p>
        </div>
    )
}