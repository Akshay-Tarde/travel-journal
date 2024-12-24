
export default function Entry(props) {
    return (
        <article className="article">
            <div className="article-img">
                <img src={props.img.src} alt={props.img.alt} />
            </div> 
            <div className="article-main">
                <div className="subtext">
                    <img src="./marker.png" alt="Location marker" /><span>{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google maps</a>
                </div>
                <h2 className="article-title">{props.title}</h2>
                <p className="dates">{props.dates}</p>
                <p className="body-text">{props.text}</p>
            </div>
        </article>
    )
}