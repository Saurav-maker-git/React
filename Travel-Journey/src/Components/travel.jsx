
function Travel({image,title,googleMapLinks,text,date,country}){
    return(
        <main>
            <div className="place">
            <img src= {image.src} alt= {image.alt} className="image" />
            <div className="side">
                <p className="location">
                    {title}
                    <a href={googleMapLinks}>View on Google Maps</a>
                </p>
                <h2>{country}</h2>
                <h3 className="date">{date}</h3>
                <p className="image-info">{text}</p>
            </div>
        </div>
        </main>
    )
}
export default Travel