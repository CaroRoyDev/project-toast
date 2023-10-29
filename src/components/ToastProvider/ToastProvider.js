import * as React from 'react'
import { useKeyWatch } from '../../hooks/useKeyWatch'

export const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = React.useCallback(toast => {
    setToasts(currentToasts => [...currentToasts, { ...toast, id: crypto.randomUUID() }])
  }, [])

  const removeToast = React.useCallback(id => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id))
  }, [])

  const clearToasts = React.useCallback(() => {
    setToasts([])
  }, [])

  useKeyWatch('Escape', clearToasts)

  const value = React.useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  )

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
export default ToastProvider
