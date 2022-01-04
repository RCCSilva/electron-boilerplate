import React from 'react'
import { startSomething } from '../../services/startService'
import * as S from './Start.styles'

export const Start = (): React.ReactElement => {
  return <S.Button onClick={startSomething}>Start!</S.Button>
}
