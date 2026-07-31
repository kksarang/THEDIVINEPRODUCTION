import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    let raf = 0
    let x = 0
    let y = 0
    let visible = false

    const render = () => {
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      el.style.opacity = visible ? '1' : '0'
      raf = 0
    }

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      visible = true
      if (!raf) raf = requestAnimationFrame(render)
    }

    const leave = () => {
      visible = false
      if (!raf) raf = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="cursor-glow hidden lg:block"
      style={{ left: 0, top: 0, opacity: 0 }}
      aria-hidden
    />
  )
}
