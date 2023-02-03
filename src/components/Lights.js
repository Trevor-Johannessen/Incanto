import {useState} from 'react'

export default function Lights(props){
    let [lights, updateLights] = useState([false, false, false, false, false, false, false, false])
    let positions = [
        {left: '1vw', top: '26vh', transform: 'scale(1)'}, // 0
        {left: '22vw', top: '38vh', transform: 'scale(.6)'}, // 1
        {left: '31vw', top: '43vh', transform: 'scale(.4)'}, // 2
        {left: '60vw', top: '42.5vh', transform: 'scale(.4)'}, // 3
        {left: '63vw', top: '40.5vh', transform: 'scale(.4)'}, // 4
        {left: '67vw', top: '38.5vh', transform: 'scale(.5)'}, // 5
        {left: '74.2vw', top: '34.5vh', transform: 'scale(.7)'}, // 6
        {left: '82.5vw', top: '29.5vh', transform: 'scale(.9)'}, // 7
    ]
    // 8 lights

    let toggleLight = (index) => {
        console.log("clicked!");
        let tempLights = [...lights];
        tempLights[index] = !tempLights[index];
        updateLights(tempLights);
    }

    let lightElements = []
    let lightTouch = []
    for(let i = 0; i < 8; i++){
        let lightStyle = {
            ...positions[i],
            position: 'absolute',
            width: '10vw',
            height: '10vw',
        }
        lightTouch.push((<div style={{...lightStyle}} onClick={() => toggleLight(i)}></div>))
        lightElements.push((<div style={{...lightStyle, backgroundImage: 'radial-gradient(#000000, transparent)', opacity: lights[i] ? '.5' : '0',}}/>))
    }

    let fullShadow = (
        <div style={{pointerEvents: 'none', position: 'absolute', top: '0vh', left: '0px', width: '100vw', height: '100vh', backgroundImage: 'radial-gradient( transparent, #000000'}}/>
    )

    return(
        <div>
            {lightElements}
            {props.children}
            {!lights.includes(false) ? fullShadow : ''}
            {lightTouch}
        </div>
    )
}