import React from 'react'

export const useKeyWatch = (key, callback) => {
  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === key) {
        callback()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback])
}
