import MemeData from '../Data/memeData'
const Memes = MemeData.data.memes

export default function MainFrame() {

    //For functionality we need to include all functions inside this function
    function GetMeme(){ //Get random meme
        const Mem = document.getElementById('Meme')
        let Rng = Math.floor(Math.random() * Memes.length) //Get random number between 0 & length of memes
        let Murl = Memes[Rng].url //The url of the chosen meme
        if (Mem) { //If Mem exists, proceed
            Mem.src = Murl //Set Mem.src to Murl
        }
    }

    function ChangeText(Type){
        const Upper = document.getElementById('UpperText') //Top Txt
        const Lower = document.getElementById('LowerText') //Bottom Txt
        const UpperTx = document.getElementById('upper') //Top Input
        const LowerTx = document.getElementById('lower') //Bottom Input
        if (Type==='top' && Upper && UpperTx){
            Upper.innerText = UpperTx.value
        } else if (Type==='bottom' && Lower && LowerTx){
            Lower.innerText = LowerTx.value
        }
    }

    return(
        <div id='MainFrame'>
            <div id='PlrInput'>
                <input id='upper' className='TextInput' onKeyPress={ChangeText('top')} placeholder='Upper Text'></input>
                <input id='lower' className='TextInput' onKeyPress={ChangeText('bottom')} placeholder='Lower Text'></input>
            </div>
            <button id='GetMeme' onClick={GetMeme}>Get a new meme image 🖼</button>
        </div>
    )
}

/*
    We are able to edit & overwrite React's states, i.e:

    export default funcion Test(){
        const [Cont, setCont] = React.useState({
            firstName: 'John',
            lastName: 'Doe',
            phone: '+123456789000',
            email: 'example@hmail.com',
            isFav: true
        })
    }

    function Set(){
        setCont(prevCont => {       <- setCont function outputs the old version of Cont & we save it as prevCont
            return {
                ...prevCont,
                isFav: !prevCont.isFav
            }
        })
    }


*/