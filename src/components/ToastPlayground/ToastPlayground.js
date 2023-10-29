import React from 'react'

import styles from './ToastPlayground.module.css'
import ToastForm from '../ToastForm'
import ToastShelf from '../ToastShelf/ToastShelf'

function ToastPlayground() {
  const [toasts, setToasts] = React.useState([])
  const handleSubmit = toast => {
    setToasts([...toasts, { ...toast, id: crypto.randomUUID() }])
  }

  const onToastDismiss = id => {
    setToasts(toasts.filter(toast => toast.id !== id))
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} onToastDismiss={onToastDismiss} />
      <ToastForm onSubmit={handleSubmit} />
    </div>
  )
}

export default ToastPlayground
