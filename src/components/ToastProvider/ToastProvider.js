import * as React from 'react'

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

  const value = React.useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  )

  React.useEffect(() => {
    const onEscDown = e => {
      if (e.key === 'Escape') {
        setToasts([])
      }
    }
    window.addEventListener('keydown', onEscDown)
    return () => window.removeEventListener('keydown', onEscDown)
  }, [])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
export default ToastProvider
