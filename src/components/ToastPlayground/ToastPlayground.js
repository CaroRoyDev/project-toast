import React from 'react'

import Button from '../Button'

import styles from './ToastPlayground.module.css'
import Toast from '../Toast'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const [message, setMessage] = React.useState('')
  const [isToastOpen, setIsToastOpen] = React.useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsToastOpen(true)
    console.log('Toast submitted!', { variant, message })
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {isToastOpen && (
        <Toast message={message} variant={variant} handleDismiss={() => setIsToastOpen(false)} />
      )}
      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={message}
              onChange={e => setMessage(e.target.value)}
              minLength={1}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map(option => {
              const id = `variant-${option}`

              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type='radio'
                    name='variant'
                    value={option}
                    checked={variant === option}
                    onChange={e => setVariant(e.target.value)}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type='submit'>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
