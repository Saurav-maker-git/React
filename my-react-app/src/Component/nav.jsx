import reactLogo from "../assets/react.svg";
export default function Nav(){
  return(
      <header className="header">
          <div id="header-logo">
              <img src={reactLogo} alt="React Logo" />
              <h1 className="header-text">React Facts</h1>
          </div>
         
          <nav>
            <ul className="nav-list">
              <li>Pricing</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </nav>
      </header>

  )
}