import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './global-styles.css'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
