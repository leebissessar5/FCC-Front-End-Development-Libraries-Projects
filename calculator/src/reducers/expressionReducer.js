import { createSlice } from '@reduxjs/toolkit'

const expressionSlice = createSlice({
  name: 'expression',
  initialState: {
    op1: '',
    op2: '0',
    operator: '',
    decimalUsed: false,
  },
  reducers: {
    updateOperand(state, action) {
      const operand = action.payload.toString()

      const decimalFound = operand === '.'

      if (state.decimalUsed && decimalFound) {
        return state
      }

      if (state.operator.length !== 0) {
        const op1 = state.op1 === '0' ? operand : state.op1 + operand
        return {
          ...state,
          decimalUsed: state.decimalUsed || decimalFound,
          op1,
        }
      } else {
        const op2 = state.op2 === '0' ? operand : state.op2 + operand
        return {
          ...state,
          decimalUsed: state.decimalUsed || decimalFound,
          op1: '',
          op2,
        }
      }
    },
    updateOperator(state, action) {
      const operator = action.payload.toString()
      return {
        ...state,
        operator,
        decimalUsed: false,
      }
    },
    clear(state) {
      return {
        op1: '',
        op2: '0',
        operator: '',
        decimalUsed: false,
      }
    },
    calculate(state) {
      const { op1, op2, operator } = state
      if (op1 && op2 && operator) {
        let result
        switch (operator) {
          case '+':
            result = op1 + op2
            break
          case '-':
            result = op2 - op1
            break
          case '*':
            result = op1 * op2
            break
          case '/':
            result = op2 / op1
            break
          default:
            result = op2
        }
        return {
          ...state,
          op1: result,
          op2: '',
          operator: '',
          decimalUsed: false,
        }
      }
      return state
    },
  },
})

export const { updateOperand, updateOperator, clear, calculate } =
  expressionSlice.actions
export default expressionSlice.reducer
