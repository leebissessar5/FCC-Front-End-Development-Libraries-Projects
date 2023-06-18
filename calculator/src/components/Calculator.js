import { useSelector, useDispatch } from 'react-redux'
import {
    clearExpression,
    calculate,
    updateExpression,
} from '../reducers/expressionReducer'

const Calculator = () => {
    const handleDigitClick = (digit) => {
        dispatch(updateExpression(digit))
    }

    const handleOperatorClick = (operator) => {
        dispatch(updateExpression(operator))
    }

    const handleEqualClick = () => {
        dispatch(calculate())
    }

    const handleClearClick = () => {
        dispatch(clearExpression())
    }

    const dispatch = useDispatch()
    const { expression, result } = useSelector((state) => state.expression)

    return (
        <div className="calculator">
            <div className="display">{expression}</div>
            <div id="display" className="display">
                {result}
            </div>
            <div className="buttons">
                <div className="row">
                    <button
                        id="seven"
                        className="digit"
                        onClick={() => handleDigitClick(7)}
                    >
                        7
                    </button>
                    <button
                        id="four"
                        className="digit"
                        onClick={() => handleDigitClick(4)}
                    >
                        4
                    </button>
                    <button
                        id="one"
                        className="digit"
                        onClick={() => handleDigitClick(1)}
                    >
                        1
                    </button>
                    <button
                        id="zero"
                        className="digit"
                        onClick={() => handleDigitClick(0)}
                    >
                        0
                    </button>
                </div>
                <div className="row">
                    <button
                        id="eight"
                        className="digit"
                        onClick={() => handleDigitClick(8)}
                    >
                        8
                    </button>
                    <button
                        id="five"
                        className="digit"
                        onClick={() => handleDigitClick(5)}
                    >
                        5
                    </button>
                    <button
                        id="two"
                        className="digit"
                        onClick={() => handleDigitClick(2)}
                    >
                        2
                    </button>
                    <button
                        id="decimal"
                        className="digit"
                        onClick={() => handleDigitClick('.')}
                    >
                        .
                    </button>
                </div>
                <div className="row">
                    <button
                        id="nine"
                        className="digit"
                        onClick={() => handleDigitClick(9)}
                    >
                        9
                    </button>
                    <button
                        id="six"
                        className="digit"
                        onClick={() => handleDigitClick(6)}
                    >
                        6
                    </button>
                    <button
                        id="three"
                        className="digit"
                        onClick={() => handleDigitClick(3)}
                    >
                        3
                    </button>
                    <button
                        id="add"
                        className="operator"
                        onClick={() => handleOperatorClick('+')}
                    >
                        +
                    </button>
                </div>
                <div className="row">
                    <button
                        id="clear"
                        className="red"
                        onClick={handleClearClick}
                    >
                        AC
                    </button>
                    <button
                        id="multiply"
                        className="operator"
                        onClick={() => handleOperatorClick('*')}
                    >
                        x
                    </button>
                    <button
                        id="divide"
                        className="operator"
                        onClick={() => handleOperatorClick('/')}
                    >
                        ÷
                    </button>
                    <button
                        id="subtract"
                        className="operator"
                        onClick={() => handleOperatorClick('-')}
                    >
                        -
                    </button>
                </div>
                <div className="row">
                    <button
                        id="equals"
                        className="equal"
                        onClick={handleEqualClick}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
