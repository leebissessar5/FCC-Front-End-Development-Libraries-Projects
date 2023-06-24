import { useState } from 'react'
import './App.scss'

import audio1 from './Audio/Heater-1.mp3'
import audio2 from './Audio/Heater-2.mp3'
import audio3 from './Audio/Heater-3.mp3'
import audio4 from './Audio/Heater-4_1.mp3'
import audio5 from './Audio/Heater-6.mp3'
import audio6 from './Audio/Dsc_Oh.mp3'
import audio7 from './Audio/Kick_n_Hat.mp3'
import audio8 from './Audio/RP4_KICK_1.mp3'
import audio9 from './Audio/Cev_H2.mp3'

import DrumPad from './Components/DrumPad'

const App = () => {
    const [display, setDisplay] = useState('')

    const drumPads = [
        {
            id: 'Q',
            keyTrigger: 'Q',
            clip: audio1,
            description: 'Heater 1',
        },
        {
            id: 'W',
            keyTrigger: 'W',
            clip: audio2,
            description: 'Heater 2',
        },
        {
            id: 'E',
            keyTrigger: 'E',
            clip: audio3,
            description: 'Heater 3',
        },
        {
            id: 'A',
            keyTrigger: 'A',
            clip: audio4,
            description: 'Heater 4',
        },
        {
            id: 'S',
            keyTrigger: 'S',
            clip: audio5,
            description: 'Clap',
        },
        {
            id: 'D',
            keyTrigger: 'D',
            clip: audio6,
            description: 'Open-HH',
        },
        {
            id: 'Z',
            keyTrigger: 'Z',
            clip: audio7,
            description: "Kick-n'-Hat",
        },
        {
            id: 'X',
            keyTrigger: 'X',
            clip: audio8,
            description: 'Kick',
        },
        {
            id: 'C',
            keyTrigger: 'C',
            clip: audio9,
            description: 'Closed-HH',
        },
    ]

    const handleClick = (clipId, description) => {
        setDisplay(description)
        const audioElement = document
            .getElementById(clipId)
            .getElementsByClassName('clip')[0]
        audioElement.currentTime = 0
        audioElement.play()
    }

    return (
        <div id="drum-machine" className="container">
            <h1>Drum Machine</h1>
            <div id="display" className="text-center mb-4">
                {display}
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="drum-pad-container">
                        {drumPads.map((drumPad) => (
                            <DrumPad
                                key={drumPad.id}
                                {...drumPad}
                                handleClick={() =>
                                    handleClick(drumPad.id, drumPad.description)
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
            <footer className="text-center mt-4">This is the footer.</footer>
        </div>
    )
}

export default App
