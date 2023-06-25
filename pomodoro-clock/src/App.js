import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
    resetTimers,
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
} from './reducers/timerReducer'

import LengthControl from './components/LengthControl'

const App = () => {
    const timer = useSelector((state) => state.timer)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <div className="container">
                <div className="timer-section">
                    <div id="timer-label" className="timer-label">
                        Session
                    </div>
                    <div className="time-left">
                        {`${timer.mins}:${
                            timer.secs < 10 ? `0${timer.secs}` : timer.secs
                        }`}
                    </div>
                    <div className="button-section">
                        <button id="start_stop" className="btn btn-primary">
                            Start
                        </button>
                        <button
                            id="reset"
                            className="btn btn-danger"
                            onClick={() => dispatch(resetTimers())}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            <div className="length-control-box">
                <div className="length-control-container">
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
            </div>
        </div>
    )
}

export default App
