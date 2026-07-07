/*
        // import {createRoot} from "react-dom/client"
        // import App from "./App.jsx"
        // import "./index.css"

        // let root = createRoot(document.getElementById('root'))
        // root.render(
        //     <App/>
        // )

*/
        // import {createRoot} from "react-dom/client"

        // let root = createRoot(document.getElementById('root'))

        // function UserName(){
        //     const hours = new Date().getHours()
        //     let timeOfDay
        //     if(hours < 12){
        //         timeOfDay =  "Good Morning"
        //     }
        //     else if(hours >= 12 && hours < 17){
        //         timeOfDay = "Good Afternoon"
        //     }
        //     else if(hours >= 17 && hours <20){
        //         timeOfDay = "Good Evening"
        //     }
        //     else{
        //         timeOfDay = "Good Night"
        //     }
        //     return(
        //         <h1>{timeOfDay}</h1>
        //     )
        // }

// root.render(
//     <UserName/>
// )

/*
        // Contact Project
        // import {createRoot} from "react-dom/client"
        // import App from "./App.jsx"
        // import "./index.css"

        // let root = createRoot(document.getElementById('root'))

        // root.render(
        //     <App/>
        // )
*/

/*
        // Destructuring Props 
        // const person ={
        //     name: "Mohit Bagad",
        //     course: "Master's in Computer Sciences",
        //     age : 24,
        //     img : "./assets/cub.jpg"

        // }

        // // const {name,course} = person
        // // Changing the variable name in destructuring
        // const {name: myName, course: myCourse} = person

        // console.log(myName)
        // console.log(name)
*/

/*
// Travel Journey Project using Props

        // import {createRoot} from "react-dom/client"
        // import App from "./App.jsx"
        // import "./index.css"

        // let root = createRoot(document.getElementById('root'))
        // root.render(
        //     <App/>
        // )
*/


//Returning square of numbers presented into an array
        // Old School Method
                // let numbersForSquare = [1,2,3,4,5]
                // let square = []
                // for(let num of numbersForSquare){
                // square.push(num*num)
                // }
                // console.log(square)
        
        // Using Map
//                 let nums = [1,2,3,4,5]
//                 let squares = nums.map(function(num){
//                         return num*num
//                 })
//                 console.log(squares)

// // Returning an array of capital letter of each word
//         let words=["mango","apple","grapes"]
//         let capitalize= words.map(
//             word=> word.charAt(0).toUpperCase() + word.slice(1)
//         )
//         console.log(capitalize)

// Returning values inside html tags like <p>

        //   let names = ["Alice","Bob","David", "Mia","Daniel"]
        //   let inTags = names.map((name)=>{
        //         return `<p>${name}</p>`
        //   })
        //   console.log(inTags)

/*
import {createRoot} from "react-dom/client"
function ArrayRendering(){
        const places = [
                <h2>London</h2>, 
                <h2>America</h2>, 
                <h2>Netherlands</h2>,
                <h2>Berlin</h2>
        ]
        return(
                <main>
                       {places}
                </main>
                
        )
}
let root = createRoot(document.getElementById('root'))
root.render(
       <ArrayRendering/>
)
*/

import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let root = createRoot(document.getElementById('root'))
root.render(
        <App/>
)