import React from 'react'

export default function Meme(){

    const [Mem, setMem] = React.useState({ //All of our data for this specific UI
        topTx: '',
        botTx: '',
        Img: 'https://i.imgflip.com/30b1gx.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function GetMeme(){
        let Rng = Math.floor(Math.random() * allMemes.length)
        let Murl = allMemes[Rng].url
        setMem(prevMem => ({
            ...prevMem,
            Img: Murl
        }))
    }

    function handleChange(Ev){
        const {name, value} = Ev.target
        setMem(old => {
            return {
                ...old,
                [name]: value
            }
        })
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