import { Fragment } from "react"
export default function MainContent({image,title,author,publish,theme}){
    return(
        <>
            <main>
              <div className="content">
                    <img src= {image.src} alt= {image.alt} className="book-image"/>
                    <div className="sideContent">
                        <h2>{title}</h2>
                        <h3>{author}</h3>
                        <h4>{publish}</h4>
                        <p>{theme}</p>
                    </div>
                </div>  
            </main>
        </>
    )
}