import globeLogo from "../assets/globe.jpg";
export default function Header(){
    return(
        <header className = "header">
            <img src = {globeLogo} alt = "Globe Logo" className = "header-logo"/>
            <h1 className= "header-title">My Travel Journal</h1>
        </header>
    )
}