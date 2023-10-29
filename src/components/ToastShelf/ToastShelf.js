import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toasts, onToastDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variant, message, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismiss={() => onToastDismiss(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
