import fuji from "../assets/mount-fiji.jpg"
import opera from "../assets/operahouse.jpg"


export default function MountFuji(){
    return(
        <main className = "place">
            <img src = {fuji} alt = "Mout Fuji" className = "image" />
            <div className = "image-info">
                <div className = "location">
                    <p>📍 Japan</p>
                    <a href= "https://maps.app.goo.gl/8ghmMbfTZYndXHZc7" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                 <h2>Mount Fuji</h2>
                 <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                 <h4>Mount Fuji is the highest mountain in Japan, standing at a majestic 3,776 meters tall. Located on Honshu Island near Tokyo, this famous landmark is actually an active stratovolcano. Fortunately, it has been completely quiet since its last major eruption in 1707.Known for its perfectly symmetrical, snow-capped cone, Mount Fuji is a beautiful symbol of Japanese culture. It is deeply sacred in Shinto and Buddhist traditions. Thousands of pilgrims and tourists climb to its summit every summer. Recognized as a UNESCO World Heritage site, it continues to inspire endless art, poetry, and travelers.</h4>
            </div>
        </main>
    )
}

