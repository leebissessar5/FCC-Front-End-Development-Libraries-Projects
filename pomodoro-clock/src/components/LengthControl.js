import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const LengthControl = ({ label, length, onIncrement, onDecrement, ids }) => {
    const { header, body, increment, decrement } = ids
    return (
        <div className="length-control">
            <div className="length-label" id={header}>
                {label}
            </div>
            <div className="length-buttons">
                <button
                    className="increment-button"
                    id={increment}
                    onClick={onIncrement}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <span className="length-value" id={body}>
                    {length}
                </span>
                <button
                    className="decrement-button"
                    id={decrement}
                    onClick={onDecrement}
                >
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
            </div>
        </div>
    )
}

export default LengthControl
