import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'

import SearchContext from 'utils/SearchContext'

import Line from './results/Line'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 2rem;
`
export default function Results() {
  const { data, categories } = useContext(SearchContext)
  const [lines, setLines] = useState([])

  useEffect(() => {
    setLines(
      data
        .filter((data) => categories.includes(data.category))
        .sort((a, b) => (a.value > b.value ? 1 : -1))
    )
  }, [data, categories])

  return (
    <Wrapper>
      <Flipper flipKey={lines.map((line) => line.id).join()}>
        {lines.map((line) => (
          <Flipped flipId={line.id} key={line.id}>
            <Line line={line} max={lines[lines.length - 1].value} />
          </Flipped>
        ))}
      </Flipper>
    </Wrapper>
  )
}
