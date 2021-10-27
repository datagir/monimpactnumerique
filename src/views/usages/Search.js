import React from 'react'
import styled from 'styled-components'

import Categories from './search/Categories'
import Comparaisons from './search/Comparaisons'

const Wrapper = styled.div``
export default function Search() {
  return (
    <Wrapper>
      <Categories />
      <Comparaisons />
    </Wrapper>
  )
}
