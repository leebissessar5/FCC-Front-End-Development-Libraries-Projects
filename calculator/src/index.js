import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import expressionReducer from './reducers/expressionReducer'

import App from './App'

const store = configureStore({
    reducer: {
        expression: expressionReducer,
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
