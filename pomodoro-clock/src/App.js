import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {
    setTimer,
    resetTimers,
    decrementTimer,
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
} from './reducers/timerReducer'

import LengthControl from './components/LengthControl'
import Footer from './components/Footer'
import beepSound from './Audio/BeepSound.wav'

const App = () => {
    const [start, setStart] = useState(false)
    const [reset, setReset] = useState(true)
    const timer = useSelector((state) => state.timer)
    const dispatch = useDispatch()

    const audioElement = document.getElementById('beep')

    useEffect(() => {
        let countdown = null

        if (start && !reset) {
            countdown = setInterval(() => {
                dispatch(decrementTimer())
            }, 1000)
            if (timer.mins === 0 && timer.secs === 0) {
                // play audio
                audioElement.currentTime = 0
                const promise = audioElement.play()
                if (promise !== null) {
                    promise.catch(() => {
                        audioElement.play()
                    })
                }
            }
        } else {
            clearInterval(countdown)
        }

        return () => {
            clearInterval(countdown)
        }
    }, [start, reset, dispatch, timer, audioElement])

    const handleTimer = (event) => {
        event.preventDefault()

        setStart(!start)
        setReset(false)
    }

    const handleReset = (event) => {
        event.preventDefault()

        setReset(true)
        setStart(false)
        dispatch(resetTimers())
    }

    const handleSessionIncrement = () => {
        if (!start) {
            if (timer.mode === 'SESSION') {
                dispatch(incrementSession())
                dispatch(setTimer({ mins: timer.sessionLength + 1, secs: 0 }))
            } else {
                dispatch(incrementSession())
            }
        }
    }

    const handleSessionDecrement = () => {
        if (!start && timer.sessionLength > 1) {
            if (timer.mode === 'SESSION') {
                dispatch(decrementSession())
                dispatch(setTimer({ mins: timer.sessionLength - 1, secs: 0 }))
            } else {
                dispatch(decrementSession())
            }
        }
    }

    const handleBreakIncrement = () => {
        if (!start) {
            if (timer.mode === 'BREAK') {
                dispatch(incrementBreak())
                dispatch(setTimer({ mins: timer.breakLength + 1, secs: 0 }))
            } else {
                dispatch(incrementBreak())
            }
        }
    }

    const handleBreakDecrement = () => {
        if (!start && timer.breakLength > 1) {
            if (timer.mode === 'BREAK') {
                dispatch(decrementBreak())
                dispatch(setTimer({ mins: timer.breakLength - 1, secs: 0 }))
            } else {
                dispatch(decrementBreak())
            }
        }
    }

    const getTimerLabel = () => {
        return timer.mode === 'SESSION' ? 'Session' : 'Break'
    }

    return (
        <div className="App">
            <audio id="beep" src={beepSound} />
            <div className="header">25 + 5 Clock App</div>
            <div className="container">
                <div className="timer-section">
                    <div id="timer-label" className="timer-label">
                        {getTimerLabel()}
                    </div>
                    <div id="time-left" className="time-left">
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
                        onIncrement={handleBreakIncrement}
                        onDecrement={handleBreakDecrement}
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
                        onIncrement={handleSessionIncrement}
                        onDecrement={handleSessionDecrement}
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
