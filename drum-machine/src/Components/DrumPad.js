import { useEffect } from 'react'

const DrumPad = ({ id, keyTrigger, clip, handleClick }) => {
    const handleKeyPress = (event) => {
        if (event.key.toUpperCase() === keyTrigger) {
            handleClick()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    return (
        <div
            className="drum-pad btn btn-secondary"
            id={id}
            onClick={handleClick}
        >
            {keyTrigger}
            <audio className="clip" id={keyTrigger} src={clip}></audio>
        </div>
    )
}

export default DrumPad
