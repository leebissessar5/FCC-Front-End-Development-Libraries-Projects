import { createSlice } from '@reduxjs/toolkit'

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        mins: 25,
        secs: 0,
        sessionLength: 25,
        breakLength: 5,
        mode: 'SESSION',
    },
    reducers: {
        resetTimers(_state, _action) {
            return {
                mins: 25,
                secs: 0,
                sessionLength: 25,
                breakLength: 5,
                mode: 'SESSION',
            }
        },
        setTimer(state, action) {
            return {
                ...state,
                mins: action.payload.mins,
                secs: action.payload.secs,
            }
        },
        decrementTimer(state, action) {
            let { mins, secs, mode } = state
            const totalSecs = mins * 60 + secs - 1

            if (totalSecs < 0) {
                if (mode === 'SESSION') {
                    mins = state.breakLength
                    mode = 'BREAK'
                } else {
                    mins = state.sessionLength
                    mode = 'SESSION'
                }
                secs = 0
            } else {
                mins = Math.floor(totalSecs / 60)
                secs = totalSecs % 60
            }

            return { ...state, mins, secs, mode }
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
