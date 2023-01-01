import React from 'react'
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {configureStore} from './store'
import App from './App.js'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(
    <Provider store={configureStore()}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)
// ReactDOM.render(<App />, document.getElementById('root'))