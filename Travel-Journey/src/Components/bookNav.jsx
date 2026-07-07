import icon from "../assets/bookIcon.png"
function BookNav(){
    return(
        <>
            <div className="nav">
                <img src= {icon} alt="Book Icon" className="navIcon"/>
                <h1 className="header">Book Store</h1>
            </div>
        </>
    )
}
export default BookNav;