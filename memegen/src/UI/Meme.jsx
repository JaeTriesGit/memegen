import React from 'react'
import MemeData from '../Data/memeData'
const Memes = MemeData.data.memes

export default function Meme(){

    const [Mem, setMem] = React.useState({ //All of our data for this specific UI
        topTx: '',
        botTx: '',
        Img: 'https://i.imgflip.com/30b1gx.jpg'
    })

    const [allMemes, setAllMemes] = React.useState(MemeData)

    function GetMeme(){
        let Rng = Math.floor(Math.random() * Memes.length)
        let Murl = Memes[Rng].url
        setMem(prevMem => ({
            ...prevMem,
            Img: Murl
        }))
    }

    function handleChange(Ev){
        const name = Ev.target.name
        const val = Ev.target.value
        console.log(Ev, name, val)
        setMem(old => {
            return {
                ...old,
                [name]: val
            }
        })
    }

    function ChangeText(Type){
        const UpperTx = document.getElementById('upper') //Top Input
        const LowerTx = document.getElementById('lower') //Bottom Input

        if (Type==='top' && UpperTx && UpperTx.value !== null){
            Mem.topTx = UpperTx.value
        } else if (Type==='bottom' && LowerTx && LowerTx.value !== null){
            Mem.botTx = LowerTx.value
        }
    }

    return(
        <div id='MemeFrame'>
            <div id='MainFrame'>
                <div id='PlrInput'>
                    <input id='upper' className='TextInput' onChange={handleChange} name='topTx' placeholder='Upper Text'></input>
                    <input id='lower' className='TextInput' onChange={handleChange} name='botTx' placeholder='Lower Text'></input>
                </div>
                <button id='GetMeme' onClick={GetMeme}>Get a new meme image 🖼</button>
            </div>
            <div id='MemeFrame'>
                <img id='Meme' src={Mem.Img}/>
                <p id='UpperText' className='MemeTx'>{Mem.topTx}</p>
                <p id='LowerText' className='MemeTx'>{Mem.botTx}</p>
            </div>
        </div>
    )
}

/*
    We can create a ternary to determine things, i.e:

    isGoingOut ? "Yes" : "No"       <-This would output "Yes" if isGoingOut is true, and "No" if it isn't

    We can use this as a shorthand

    ------------------------------

    QUIZ:

    1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

   A: The State variable & the callback function
   


    2. When would you want to pass the first option (from answer
    above) to the state setter function?
    
    If we don't care about the old value & want to give the state a variable name, we can set it with the first one


    3. When would you want to pass the second option (from answer
    above) to the state setter function?

    When we want to edit / change the state
*/