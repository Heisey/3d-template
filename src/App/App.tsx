
import * as React from 'react'
import * as ReactFiber from '@react-three/fiber'

import * as Canvas from 'components/Canvas'
import * as Experience from 'components/Experience'

import * as Styles from './styles'

const App: React.FC = () => {

  return (
    <Styles.App>
      <div className='title'>
        puppies
      </div>
      <Canvas.Component className='canvas' >
        <React.Suspense fallback={null}>
          <Experience.Component />
        </React.Suspense>
      </Canvas.Component>
    </Styles.App>
  )
}

export const Component = App