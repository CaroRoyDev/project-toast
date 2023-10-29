import * as React from 'react'
import styles from './ToastForm.module.css'
import Button from '../Button'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastForm({ onSubmit }) {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const [message, setMessage] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ variant, message })

    setVariant(VARIANT_OPTIONS[0])
    setMessage('')
  }
  return (
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
  )
}

export default ToastForm
