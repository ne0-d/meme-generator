import React from "react"
import memesData from "../memesData"
let memes = memesData.data.memes;
export default function Main(){
    const [memeImage, setMemeImage] = React.useState("");
     
    function getMemeImage(){
        let randomNum = Math.floor(Math.random() * (100)) ;
        setMemeImage(memes[randomNum].url);
        console.log(memeImage);
    }
    return(
        <main>
                <form action="#" className="form">
                    <input className="form--input" type='text' placeholder="First Text"/>
                    <input className="form--input" type='text' placeholder="Last Text"/>
                    <button onClick={getMemeImage} className="form--button">Get a new meme image  🖼</button>
                </form>
                <img src={memeImage} className="meme--image"/>
            
        </main>
    )
}