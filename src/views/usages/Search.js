import React from 'react'
import styled from 'styled-components'

import Categories from './search/Categories'
import Comparisons from './search/Comparisons'

const Wrapper = styled.div``
export default function Search() {
  return (
    <Wrapper>
      <Categories />
      <Comparisons />
    </Wrapper>
  )
}
