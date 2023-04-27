import Troll from '../assets/Troll.svg'

export default function Header(){
    return(
        <div id='TopBar'>
            <div id='Trollface'>
                <img src={Troll}/>
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}