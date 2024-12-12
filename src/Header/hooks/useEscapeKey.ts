import { useEffect } from "react"

export const useEscapeKey = (handler: (event: KeyboardEvent) => void, when: boolean) => {
  useEffect(() => {
    if (!when) return
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [handler, when])
}