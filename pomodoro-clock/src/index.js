import ReactDOM from 'react-dom/client'
import App from './App'

import timerReducer from './reducers/timerReducer'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        timer: timerReducer,
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
