import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`
const Svg = styled.svg`
  width: 3.5rem;
  height: auto;
  margin-right: 0.5rem;
`
const Title = styled.h1`
  margin: 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
`
export default function Logo() {
  return (
    <Wrapper to='/'>
      <Svg
        width='56'
        height='56'
        viewBox='0 0 56 56'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      ></Svg>

      <Title>
        Mon
        <br />
        Impact
        <br />
        Numérique
      </Title>
    </Wrapper>
  )
}
