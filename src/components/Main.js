import React from "react"
import memesData from "../memesData"
let memes = memesData.data.memes;
export default function Main(){
   
    const [memeImage, setMemeImage] = React.useState({
        topText:"", 
        bottomText:"", 
        randomImage:""
    });

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const memeArray = allMemes
        let randomNum = Math.floor(Math.random() * (100));
        setMemeImage(prevMeme => {
            return {...prevMeme,
                    randomImage: memeArray[randomNum].url
            }

        });
    }
    function handleChange(event){
        const {name, value} = event.target;
        setMemeImage((prevMeme)=>{
            return{
                ...prevMeme,
                [name]:value
            }
        })

    }
   
    return(
        <main>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        value={memeImage.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        value={memeImage.bottomText}
                        onChange={handleChange}
                    />
                    <button onClick={getMemeImage} className="form--button">Get a new meme image  🖼</button>
                </div>
                <div class="meme">
                    <img src={memeImage.randomImage} className="meme--image"/>
                    <h2 className="meme--text top">{memeImage.topText}</h2>
                    <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
                </div>
        </main>
    )
}