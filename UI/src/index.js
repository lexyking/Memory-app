import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App'

import reducers from './reducers'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)