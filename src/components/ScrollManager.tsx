import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function ScrollManager() {
  const { pathname, state } = useLocation()
  const target = (state as { scrollTo?: string } | null)?.scrollTo

  useEffect(() => {
    if (target) {
      requestAnimationFrame(() => scrollToSection(target))
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, target])

  return null
}
