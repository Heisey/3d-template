
import * as Fiber from '@react-three/fiber'
import * as React from 'react'
import * as Three from 'three'

const Experience: React.FC = () => {

  const ref = React.useRef<Three.Mesh>(null)

  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo'
  ]

  Fiber.useFrame(() => {
    if (!ref.current) return 
    ref.current.rotation.y += 0.01
    ref.current.rotation.x += 0.01
  })

  return (
    <mesh ref={ref}>
      {[...Array(6)].map((_, index) => (
        <meshLambertMaterial attach={`material-${index}`} key={index} color={colors[index]} />
      ))}
      <boxGeometry args={[3, 3, 3]} />
    </mesh>
  )
}

export const Component = Experience