import { useMousePosition } from '../../hooks/useMousePosition'

export default function CursorGlow() {
  const { x, y } = useMousePosition()
  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{ left: x, top: y }}
      aria-hidden
    />
  )
}
