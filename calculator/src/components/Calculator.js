import { useSelector, useDispatch } from 'react-redux'
import {
  clear,
  updateOperand,
  updateOperator,
  calculate,
} from '../reducers/expressionReducer'

const Calculator = () => {
  const handleDigitClick = (digit) => {
    dispatch(updateOperand(digit))
  }

  const handleOperatorClick = (operator) => {
    dispatch(updateOperator(operator))
  }

  const handleEqualClick = () => {
    dispatch(calculate())
  }

  const handleClearClick = () => {
    dispatch(clear())
  }

  const dispatch = useDispatch()
  const { op1, op2, operator } = useSelector((state) => state.expression)

  return (
    <div className="calculator">
      <div className="display">{`${op2} ${operator} ${op1}`}</div>
      <div className="display">{op2}</div>
      <div className="buttons">
        <div className="row">
          <button className="digit" onClick={() => handleDigitClick(7)}>
            7
          </button>
          <button className="digit" onClick={() => handleDigitClick(4)}>
            4
          </button>
          <button className="digit" onClick={() => handleDigitClick(1)}>
            1
          </button>
          <button className="digit" onClick={() => handleDigitClick(0)}>
            0
          </button>
        </div>
        <div className="row">
          <button className="digit" onClick={() => handleDigitClick(8)}>
            8
          </button>
          <button className="digit" onClick={() => handleDigitClick(5)}>
            5
          </button>
          <button className="digit" onClick={() => handleDigitClick(2)}>
            2
          </button>
          <button className="digit" onClick={() => handleDigitClick('.')}>
            .
          </button>
        </div>
        <div className="row">
          <button className="digit" onClick={() => handleDigitClick(9)}>
            9
          </button>
          <button className="digit" onClick={() => handleDigitClick(6)}>
            6
          </button>
          <button className="digit" onClick={() => handleDigitClick(3)}>
            3
          </button>
          <button className="operator" onClick={() => handleOperatorClick('+')}>
            +
          </button>
        </div>
        <div className="row">
          <button className="red" onClick={handleClearClick}>
            AC
          </button>
          <button className="operator" onClick={() => handleOperatorClick('*')}>
            x
          </button>
          <button className="operator" onClick={() => handleOperatorClick('/')}>
            ÷
          </button>
          <button className="operator" onClick={() => handleOperatorClick('-')}>
            -
          </button>
        </div>
        <div className="row">
          <button className="equal" onClick={handleEqualClick}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
