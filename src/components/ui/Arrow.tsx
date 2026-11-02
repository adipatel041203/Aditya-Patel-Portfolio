interface ArrowProps {
  direction?: 'up' | 'down' | 'right'
}

const glyphs = { up: '↑', down: '↓', right: '↗' } as const

export function Arrow({ direction = 'right' }: ArrowProps) {
  return <span aria-hidden="true">{glyphs[direction]}</span>
}
