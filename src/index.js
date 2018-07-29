import React                         from 'react'
import ReactDOM                      from 'react-dom'
import { createStore, compose }      from 'redux'
import { Provider }                  from 'react-redux'
import { BrowserRouter }             from 'react-router-dom'
import App                           from './components/App/App'
import reducer                       from './reducers'

import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers())

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
