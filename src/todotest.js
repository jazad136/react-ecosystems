import React from 'react'
import ReactDOM from 'react-dom/client';
import TodoTestApp from './TodoTestApp.js';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(
    <React.StrictMode>
        <TodoTestApp />
    </React.StrictMode>
)
// ReactDOM.render(<App />, document.getElementById('root'))