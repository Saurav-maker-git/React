import opera from "../assets/operahouse.jpg"
export default function OperaHouse(){
    return(
        <main className = "place">
            <img src={opera} alt = "Opera House" className = "image"/>
            <div className = "image-info">
                <div className = "location">
                    <p>📍 Australia</p>
                    <a href= "https://maps.app.goo.gl/rkmw8oqD1EzQRch2A" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2>Sydney Opera House</h2>
                <h3>27 May, 2021 - 8 Jun, 2021</h3>
                <h4>The Sydney Opera House is a world-famous performing arts centre in Sydney, Australia, known for its iconic roof that looks like giant white sails or seashells. Opened in 1973, it sits beautifully on Bennelong Point in Sydney Harbour and is celebrated globally as a masterpiece of modern architecture.</h4>
            </div>
        </main>
    )
}
