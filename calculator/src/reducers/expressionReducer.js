/* eslint-disable no-eval */
import { createSlice } from '@reduxjs/toolkit'

function evaluateExpression(expression) {
    try {
        // Use the built-in JavaScript eval function to evaluate the expression
        const result = eval(expression)
        return String(result)
    } catch (error) {
        console.error('Error evaluating expression:', error)
        return ''
    }
}

const expressionSlice = createSlice({
    name: 'expression',
    initialState: {
        expression: '',
        result: '0',
        decimalUsed: false,
        reset: true,
    },
    reducers: {
        updateExpression(state, action) {
            const toPush = action.payload.toString()
            const isOperator = ['+', '-', '*', '/'].includes(toPush)
            const decimalFound = toPush === '.'

            if (state.decimalUsed && decimalFound) {
                return state
            }

            if (isOperator) {
                const updatedExpression =
                    state.expression.length > 0 &&
                    ['+', '-', '*', '/'].includes(state.expression.slice(-1))
                        ? state.expression.slice(0, -1) + toPush
                        : state.expression + toPush

                return {
                    ...state,
                    expression: updatedExpression,
                    result: toPush,
                    decimalUsed: false,
                    reset: false,
                }
            }

            return {
                ...state,
                expression: state.reset ? toPush : state.expression + toPush,
                result: state.reset
                    ? toPush
                    : isOperator
                    ? toPush
                    : state.result !== '0'
                    ? state.result + toPush
                    : toPush,
                decimalUsed: !isOperator && (state.decimalUsed || decimalFound),
                reset: false,
            }
        },
        clearExpression(state) {
            return {
                ...state,
                expression: '',
                result: '0',
                decimalUsed: false,
                reset: true,
            }
        },
        calculate(state) {
            const { expression } = state
            const result =
                Math.round(evaluateExpression(expression) * 10000) / 10000

            return {
                ...state,
                expression: `${state.expression}=${result}`,
                result,
                decimalUsed: false,
                reset: true,
            }
        },
    },
})

export const { updateExpression, clearExpression, calculate } =
    expressionSlice.actions
export default expressionSlice.reducer
