// import Header from "./Components/header.jsx";
// import MountFuji from "./Components/japan.jsx";
// import OperaHouse from "./Components/australia.jsx";
// import London from "./Components/london.jsx";

// export default function App(){
//     return(
//         <>
//             <Header />
//             <MountFuji />
//             <OperaHouse />
//             <London />
//         </>
//     )
// }

/*
// Contact Project
import Contact from "./Components/contact.jsx"
import catImage from "./assets/cat.jpg"
import dogImage from "./assets/dog.jpg"
import cubImage from "./assets/cub.jpg"
import tigerImage from "./assets/tiger.jpg"


export default function App(){
    return(
        <>
            <Contact 
                name = "Mr. Bagad Billa"
                phone = "123-456-7890" 
                email = "bagadbilla@email.com" 
                image = {catImage}
            />
            <Contact 
                name = "Mr. Kutta Kurkure"
                phone = "098-765-4321" 
                email = "kuttakurkure@email.com" 
                image = {dogImage}
            />
            <Contact 
                name = "Mr. Lion Langda" 
                phone = "555-555-5555" 
                email = "lionlangda@email.com" 
                image = {cubImage}
            />
            <Contact 
                name = "Mr. Bagh Boka" 
                phone = "111-111-1111" 
                email = "baghboka@email.com" 
                image = {tigerImage}
            />
        </>
       
    )
}
*/



/*
// Using Props
// Joke Project
import Joke from "./Components/joke.jsx"

export default function App(){
    return(
        <>
            <Joke
                setup = "Why don’t programmers like nature?"
                punchline = "It has too many bugs."
                upvotes = {10}
                isPun = {false}
            />
                <Joke
                setup = "Why did the student eat his homework?"
                punchline = " Because the teacher said it was a piece of cake."
                upvotes = {15}
                isPun = {true}          
            />
            <Joke
                setup = "Why don’t skeletons fight each other?"
                punchline = " They don’t have the guts."    
                upvotes = {20}
                isPun = {false}
            />
            <Joke
                setup = "Why don’t eggs tell jokes?"
                punchline = " They’d crack each other up."
                upvotes = {25}
                isPun = {true}
            />
            <Joke
                setup = "Why did the scarecrow win an award?"
                punchline = " Because he was outstanding in his field."
                upvotes = {30}
                isPun = {false}
            />
        </>
    )
}
*/
/*
// Using Props in Travel Project
import Header from "./Components/header.jsx"
import { Fragment } from "react"
import Travel from "./Components/travel.jsx"
import fuji from "./assets/mount-fiji.jpg"
import londonPic from "./assets/london.jpg"
import opera from "./assets/operahouse.jpg"

export default function App(){
    return(
        <Fragment>
            <Header/>
            <Travel
                image = {fuji}
                locationName = "Japan"
                maplink = "https://maps.app.goo.gl/8ghmMbfTZYndXHZc7"
                date= "21 May 2026 - 30 May 2026"
                destination="Mount Fuji"
                info = "Mount Fuji is the highest mountain in Japan, standing at a majestic 3,776 meters tall. Located on Honshu Island near Tokyo, this famous landmark is actually an active stratovolcano. Fortunately, it has been completely quiet since its last major eruption in 1707.Known for its perfectly symmetrical, snow-capped cone, Mount Fuji is a beautiful symbol of Japanese culture. It is deeply sacred in Shinto and Buddhist traditions. Thousands of pilgrims and tourists climb to its summit every summer. Recognized as a UNESCO World Heritage site, it continues to inspire endless art, poetry, and travelers"
            />
            <Travel
                image={londonPic}
                locationName="London"
                maplink= "https://maps.app.goo.gl/XaWXMfhts8WerUxE7"
                date= "05 June 2026 - 10 June 2026"
                destination="Westminster Palace"
                info="This stunning view captures the historic heart of London, showcasing the magnificent Palace of Westminster and its world-famous clock tower, Big Ben, standing tall against a bright blue sky. Bathed in warm sunlight, the sand-colored Gothic Revival architecture gleams beautifully above the sparkling waters of the River Thames. Along the riverbank, white tour boats sit ready to take visitors on scenic cruises, while an iconic red double-decker bus can be seen crossing the green arches of Westminster Bridge in the background. It is a quintessential picture-perfect scene that beautifully blends London's rich political history with its bustling modern day-to-day life"
            />
            <Travel
                image = {opera}
                locationName="Australia"
                maplink= "https://maps.app.goo.gl/XaWXMfhts8WerUxE7"
                date= "12 June 2026 - 21 June 2026"
                destination="Opera House"
                info="The Sydney Opera House is a world-famous performing arts centre in Sydney, Australia, known for its iconic roof that looks like giant white sails or seashells. Opened in 1973, it sits beautifully on Bennelong Point in Sydney Harbour and is celebrated globally as a masterpiece of modern architecture."
            />
        </Fragment>
    )
}
*/

// Travel Project using array rendering
// import travelNote from "./Components/travelData.js";
// import Travel from "./Components/travel.jsx";
// import Header from "./Components/header.jsx";

// export default function App(){
//     return(
//         <>
//             <Header/>  
//             {travelNote.map(
//                 note=>(
//                     <Travel
//                         key= {note.id}{...note}
//                         // image = {note.image.src}
//                         // alt = {note.alt}
//                         // locationName= {note.title}
//                         // destination = {note.country}
//                         // maplink = {note.googleMapLinks}
//                         // date = {note.date}
//                         // info= {note.text}
//                     />

//                 )  
//             )
//         }
//         </>
//     )
    
// }


//Book Project
import BookNav from "./Components/bookNav.jsx";
import books from "./Components/booksData.js";
import MainContent from "./Components/bookMainContent.jsx"

function App(){
    return(
        <>
            <BookNav/>
            {books.map(
                book =>(
                    <MainContent 
                    key = {book.id}{...book}
                    />
                )
            )}

        </>
    )
}
export default App;