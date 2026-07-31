import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenisContext } from '../context/LenisContext'

export function useScrollTop() {
  const { pathname } = useLocation()
  const { scrollTo } = useLenisContext()

  useEffect(() => {
    scrollTo(0, { immediate: true })
  }, [pathname, scrollTo])
}
