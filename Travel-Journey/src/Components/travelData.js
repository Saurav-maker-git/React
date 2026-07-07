import fujiPic from "../assets/mount-fiji.jpg"
import opera from "../assets/operahouse.jpg"
import bigBen from "../assets/london.jpg"

const travelNote = [
    // Japan Data
    {
        id:1,
        image:{
            src: fujiPic,
            alt: "Mount Fuji"
        },
        title: "Mount Fuji",
        country: "Japan",
        googleMapLinks : "https://maps.app.goo.gl/8ghmMbfTZYndXHZc7",
        date: "12 Jan 2021 - 24 Jan 2021",
        text: `Mount Fuji is the highest mountain in Japan, standing at a majestic 3,776 meters tall. 
        Located on Honshu Island near Tokyo, this famous landmark is actually an active stratovolcano. 
        Fortunately, it has been completely quiet since its last major eruption in 1707.Known for its perfectly symmetrical, snow-capped cone, 
        Mount Fuji is a beautiful symbol of Japanese culture. It is deeply sacred in Shinto and Buddhist traditions. 
        Thousands of pilgrims and tourists climb to its summit every summer. Recognized as a UNESCO World Heritage site,
        it continues to inspire endless art, poetry, and travelers.`
    },
    //Australia Data
    {
        id: 2,
        image:{
            src: opera,
            alt: "Opera House Pic"
        },
        title: "Opera House",
        country: "Australia",
        googleMapLinks: "https://maps.app.goo.gl/rkmw8oqD1EzQRch2A",
        date: "15 Feb 2021 - 28 Feb 2021",
        text: `The Sydney Opera House is a world-famous performing arts centre in Sydney, Australia, 
        known for its iconic roof that looks like giant white sails or seashells. 
        Opened in 1973, it sits beautifully on Bennelong Point in Sydney Harbour and 
        is celebrated globally as a masterpiece of modern architecture.`
    },
    // London Data
    {
        id: 3,
        image:{
            src: bigBen,
            alt: "Westminster Pic"
        },
        title: "Westminster Palace",
        country: "England",
        googleMapLinks: "https://maps.app.goo.gl/XaWXMfhts8WerUxE7",
        date: "08 May 2021 - 18 May 2021",
        text:`This stunning view captures the historic heart of London, showcasing the magnificent Palace of Westminster and its world-famous clock tower, Big Ben, standing tall against a bright blue sky. 
        Bathed in warm sunlight, the sand-colored Gothic Revival architecture gleams beautifully above the sparkling waters of the River Thames. 
        Along the riverbank, white tour boats sit ready to take visitors on scenic cruises, 
        while an iconic red double-decker bus can be seen crossing the green arches of Westminster Bridge in the background. 
        It is a quintessential picture-perfect scene that beautifully blends London's rich political history with its bustling modern day-to-day life`
    }
];
export default travelNote;