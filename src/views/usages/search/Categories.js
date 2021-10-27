import React from 'react'
import styled from 'styled-components'

import Category from './categories/Category'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export default function Categories() {
  return (
    <Wrapper>
      <Category
        label='Email'
        emoji='✉️'
        value='email'
        detail={`Rédaction, envoi et lecture`}
      />
      <Category
        label='Streaming'
        emoji='🎞'
        value='streaming'
        detail={`Visionnage d'1h de streaming`}
      />
      <Category
        label='Conférence'
        emoji='🖥'
        value='conference'
        detail={`Participer pendant 1h`}
      />
    </Wrapper>
  )
}
