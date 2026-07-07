import london from "../assets/london.jpg"
export default function London(){
    return(
        <main className = "place">
            <img src={london} alt = "London" className = "image"/>
            <div className = "image-info">
                <div className = "location">
                    <p>📍 London</p>
                    <a href= "https://maps.app.goo.gl/XaWXMfhts8WerUxE7" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2>Palace of Westminster</h2>
                <h3>27 May, 2021 - 8 Jun, 2021</h3>
                <h4>This stunning view captures the historic heart of London, showcasing the magnificent Palace of Westminster and its world-famous clock tower, Big Ben, standing tall against a bright blue sky. Bathed in warm sunlight, the sand-colored Gothic Revival architecture gleams beautifully above the sparkling waters of the River Thames. Along the riverbank, white tour boats sit ready to take visitors on scenic cruises, while an iconic red double-decker bus can be seen crossing the green arches of Westminster Bridge in the background. It is a quintessential picture-perfect scene that beautifully blends London's rich political history with its bustling modern day-to-day life</h4>
            </div>
        </main>
    )
}
