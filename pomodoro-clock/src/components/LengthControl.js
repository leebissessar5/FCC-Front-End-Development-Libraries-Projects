const LengthControl = ({ label, length, onIncrement, onDecrement, ids }) => {
    const { header, body, increment, decrement } = ids
    return (
        <>
            <div id={header}>{label}</div>
            <div>
                <button id={increment} onClick={onDecrement}>
                    -
                </button>
                <span id={body}>{length}</span>
                <button id={decrement} onClick={onIncrement}>
                    +
                </button>
            </div>
        </>
    )
}

export default LengthControl
