import { createSlice } from '@reduxjs/toolkit'

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        mins: 25,
        secs: 0,
        sessionLength: 25,
        breakLength: 5,
    },
    reducers: {
        resetTimers(_state, _action) {
            return { mins: 25, secs: 0, sessionLength: 25, breakLength: 5 }
        },
        setTimer(state, action) {
            return { ...state, mins: action.mins, secs: action.secs }
        },
        decrementTimer(state, _action) {
            const secs = state.secs + state.mins * 60 - 1
            return {
                ...state,
                mins: Math.floor(secs / 60),
                secs: secs % 60,
            }
        },
        incrementSession(state, _action) {
            if (state.sessionLength < 60) {
                return { ...state, sessionLength: state.sessionLength + 1 }
            }
            return state
        },
        decrementSession(state, _action) {
            if (state.sessionLength > 1) {
                return { ...state, sessionLength: state.sessionLength - 1 }
            }
            return state
        },
        incrementBreak(state, _action) {
            if (state.breakLength < 60) {
                return { ...state, breakLength: state.breakLength + 1 }
            }
            return state
        },
        decrementBreak(state, _action) {
            if (state.breakLength > 1) {
                return { ...state, breakLength: state.breakLength - 1 }
            }
            return state
        },
    },
})

export const {
    resetTimers,
    setTimer,
    decrementTimer,
    incrementSession,
    decrementSession,
    incrementBreak,
    decrementBreak,
} = timerSlice.actions

export default timerSlice.reducer
