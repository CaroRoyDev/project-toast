import React from 'react'

import styles from './ToastPlayground.module.css'
import ToastForm from '../ToastForm'

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastForm />
    </div>
  )
}

export default ToastPlayground
