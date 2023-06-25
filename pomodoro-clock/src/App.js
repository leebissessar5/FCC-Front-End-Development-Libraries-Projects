import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {
    reset,
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
} from './reducers/timerReducer' // import your actions

import LengthControl from './components/LengthControl'

const App = () => {
    const timer = useSelector((state) => state.timer)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <div id="timer-label">Session</div>
            <div id="time-left">{`${timer.mins}:${
                timer.secs < 10 ? `0${timer.secs}` : timer.secs
            }`}</div>
            <button id="start_stop">Start</button>
            <button id="reset" onClick={dispatch(reset())}>
                Reset
            </button>

            <LengthControl
                label="Break Length"
                length={timer.breakLength}
                onIncrement={() => dispatch(incrementBreak())}
                onDecrement={() => dispatch(decrementBreak())}
                ids={{
                    header: 'break-label',
                    body: 'break-length',
                    increment: 'break-increment',
                    decrement: 'break-decrement',
                }}
            />

            <LengthControl
                label="Session Length"
                length={timer.sessionLength}
                onIncrement={() => dispatch(incrementSession())}
                onDecrement={() => dispatch(decrementSession())}
                ids={{
                    header: 'session-label',
                    body: 'session-length',
                    increment: 'session-increment',
                    decrement: 'session-decrement',
                }}
            />
        </div>
    )
}

export default App
