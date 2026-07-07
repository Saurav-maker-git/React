

export default function Contact({name,phone,email,image}){
    return(
        <div className = "container">
            <img src= {image} alt = {name} className = "contact-picc"/>
            <div className = "contact-info">
                <h1>{name}</h1>
                <h2>☎️ {phone}</h2>
                <h2>📧 {email}</h2>
            </div>
        </div>

    )
}