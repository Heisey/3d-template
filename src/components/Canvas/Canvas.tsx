
import * as Drei from '@react-three/drei'
import * as React from 'react'

import * as Styles from './styles'

export interface Props extends React.PropsWithChildren {
  className?: string
}

const Canvas: React.FC<Props> = (props) => {

  return (
    <Styles.Canvas className={props.className}>
      <React.Suspense fallback={null}>
        {props.children}

        <Drei.OrbitControls />
        <ambientLight intensity={5} />
      </React.Suspense>
    </Styles.Canvas>
  )
}

export const Component = Canvas