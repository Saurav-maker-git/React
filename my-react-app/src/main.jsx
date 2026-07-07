// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import {createRoot} from "react-dom/client"
// const root = createRoot(document.getElementById('root')).render(<h1>Hello, from React world!</h1>)

/*
Rendering a unordered list
    import {createRoot} from "react-dom/client"
    import './index.css'

    const list = createRoot(document.querySelector('#root'))
    list.render(<ul>
      <h1>Why do I wanna learn react</h1>
      <li>For boosting my frontend development skill</li>
      <li>For a job</li>
      <li>I just wanna learn new things</li>
    </ul>)
*/


// Using a component
      // import {createRoot} from "react-dom/client"
      // import './index.css'

      // const root = createRoot(document.getElementById('root'))
      // function MainContent(){
      //   return <h1>React is great!</h1>
      // }

      // root.render(
      //   <div>
      //       <MainContent/>
      //   </div>
      // )

// Using JS in React

    // import {createRoot} from "react-dom/client"
    // import  './index.css'

    // const root = document.getElementById('root')

    // const hi = document.createElement('h1')
    // hi.textContent = "React is great!"

    // // Displaying Vanila JS code on page
    // root.append(hi)

/*
// Using Image
    import {createRoot} from "react-dom/client"
    import './index.css'
    import reactLogo from './assets/react.svg'

    let root = createRoot(document.getElementById('root'))
    root.render(
      // Can't render 2 elements like this in React
          // <img src= {reactLogo} alt= "log-react"/>
          // <h1>Hello</h1>

      // Do this instead, add a parent like div ,article ,main
          <article>
              <img src= {reactLogo} alt= "log-react"/>
              <h1>Hello from React</h1>
          </article>
    )
*/

/*
React Fun Fact Page Project

    import {createRoot} from "react-dom/client"
    import './index.css'
    import reactLogo from './assets/react.svg'
    const root = createRoot(document.getElementById('root'))
    root.render(
      <div id="display">
          <img src={reactLogo} alt="Logo" />
          <ul>
            <h1>Fun facts about React!</h1>
            <li>React is developed by Jordan Walke</li>
            <li>It was released in 2013</li>
            <li>It is maintanied by Meta</li>
            <li>Powers thousands of applications</li>
          </ul>
      </div>
    )
*/

/*
import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById('root'))
root.render(
  console.log(<h1>Hello World</h1>)
  // it will return object on console
)
*/

/*
//Creating Component
    import {createRoot} from "react-dom/client"
    import './index.css'
    import reactLogo from './assets/react.svg'
    const root = createRoot(document.getElementById('root'))

    function temp(){
        return(
        <div id="display">
          <img src={reactLogo} alt="Logo" />
            <ul>
                <h1>Fun facts about React!</h1>
                <li>React is developed by Jordan Walke</li>
                <li>It was released in 2013</li>
                <li>It is maintanied by Meta</li>
                <li>Powers thousands of applications</li>
            </ul>
        </div>
      )
    }
    root.render(
        temp()
    )
*/

/*
import {createRoot} from 'react-dom/client'
import './index.css'

let root = createRoot(document.getElementById('root'))


//Creating component
    // Component is always named in Pascal Case Convention
function Page(){
    return(
      <ol>
        <h1>Why do I wanna learn React</h1>
        <li>Gives experience in creating UI components</li>
        <li>High demand</li>
        <li>For creating my own superb apps and webs</li>
      </ol>
    )
}

root.render(
  <Page />
)
*/

/*
//Creating component
import {createRoot} from "react-dom/client"
import "./index.css"
import reactLogo from "./assets/react.svg"

let root = createRoot(document.getElementById('root'))

function HeaderSection(){
  return(
    <img src={reactLogo} alt="React Logo" />
  );
}
function MainComponentSection(){
  return(
    <div>
        <h1>Why I am excited to learn React?</h1>
      <ol>
        <li>It is industry requirement</li>
        <li>It is modern framework</li>
        <li>It will enhance my development skills</li>
      </ol>
    </div>
    
  );
}

function FooterSection(){
  return(
    "All rights are reserved"
  );
}

function App(){
  return(
    <>
    <header>
        <HeaderSection/>
      </header>
      <main>
        <MainComponentSection/>
      </main>
      <footer>
        <FooterSection/>
      </footer>
    </>    
  );
}

root.render(
  <App/>
)
*/

/*
// Calling a component inside a component
import {createRoot} from 'react-dom/client'
import './index.css'
import reactLogo from './assets/react.svg'
import { Fragment } from 'react'

let root = createRoot(document.getElementById('root'))

function HeaderSection(){
  return(
    <header>
        <img src={reactLogo} alt="React Logo" />
    </header>
    
  )
}

function Main(){
  return(
    <Fragment>
      <HeaderSection/>
        <h1>Why I am excited to learn React?</h1>
      <ol>
        <li>It is industry requirement</li>
        <li>It is modern framework</li>
        <li>It will enhance my development skills</li>
      </ol>
    </Fragment>
  )
}

root.render(
  <Main/>
)
*/

/*
// CSS Styling
import {createRoot} from "react-dom/client"
import { Fragment } from "react"
import Nav from './nav.jsx'
import reactLogo from "./assets/react.svg"
import Main from './maincomponent.jsx'
import './index.css'

let root = createRoot(document.getElementById('root'))

function Page(){
  return(
    <Fragment>
      <Nav/>
      <Main/>
    </Fragment>
  )

}

root.render(
  <Page/>
)
*/

/*
// Creating and importing multiple components from diiferent files and folders

import {createRoot} from "react-dom/client"
import { Fragment } from "react"
import Nav from './Component/nav.jsx'
import Main from './Component/maincomponent.jsx'
import Hello from './App.jsx'
import './index.css'

let root = createRoot(document.getElementById('root'))

function Page(){
  return(
    <Fragment>
      <Nav/>
      <Hello/>
      <Main/>
    </Fragment>
  )
}
root.render(
  <Page/>
)
*/

// Working on Navigation bar and styling it with CSS
import {createRoot} from "react-dom/client"
import reactLogo from "./assets/react.svg"
import { Fragment } from "react"

let root = createRoot(document.getElementById('root'))

function NavBar(){
  return(
    <header className = "header-logo">
      <nav id="nav-bar">
          <img src = {reactLogo} alt = "React Logo"/>
          <h1 className= "header-title">ReactFacts</h1>
      </nav>
    </header>
  )
}

function MainComponent(){
  return(
    <main>
      <h1 id="fun-facts">Fun facts about React</h1>
      <ul className="facts-list">
        <li>React is a JavaScript library for building user interfaces.</li>
        <li>React is maintained by Facebook and a community of individual developers and companies.</li>
        <li>React makes it painless to create interactive UIs.</li>
        <li>React uses a virtual DOM to improve performance.</li>
      </ul>
    </main>
  )
}
function Page(){
  return(
    <Fragment>
      <NavBar/>
      <MainComponent/>
    </Fragment>
  )
}
root.render(
  <Page/>
)