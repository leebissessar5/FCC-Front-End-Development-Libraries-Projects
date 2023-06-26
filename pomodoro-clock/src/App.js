import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {
    resetTimers,
    decrementTimer,
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
} from './reducers/timerReducer'

import LengthControl from './components/LengthControl'
import Footer from './components/Footer'

const App = () => {
    const [start, setStart] = useState(false)
    const [reset, setReset] = useState(true)
    const timer = useSelector((state) => state.timer)
    const dispatch = useDispatch()

    useEffect(() => {
        let countdown = null

        if (start && !reset) {
            countdown = setInterval(() => {
                dispatch(decrementTimer())
            }, 1000)
        } else {
            clearInterval(countdown)
        }

        return () => {
            clearInterval(countdown)
        }
    }, [start, reset, dispatch])

    const handleTimer = (event) => {
        event.preventDefault()

        setStart(!start)
        setReset(false)
    }

    const handleReset = (event) => {
        event.preventDefault()

        setReset(true)
        dispatch(resetTimers())
    }

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
                        <button
                            onClick={handleTimer}
                            id="start_stop"
                            className="btn btn-primary"
                        >
                            {!start ? (reset ? 'Start' : 'Resume') : 'Pause'}
                        </button>
                        <button
                            id="reset"
                            className="btn btn-danger"
                            onClick={handleReset}
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
            <Footer />
        </div>
    )
}

export default App
