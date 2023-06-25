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
                    +
                </button>
                <span className="length-value" id={body}>
                    {length}
                </span>
                <button
                    className="decrement-button"
                    id={decrement}
                    onClick={onDecrement}
                >
                    -
                </button>
            </div>
        </div>
    )
}

export default LengthControl
