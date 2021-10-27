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
  const { data, categories, comparaisons } = useContext(SearchContext)
  const [lines, setLines] = useState([])

  useEffect(() => {
    setLines(
      data
        .filter(
          (data) =>
            categories.includes(data.category) || comparaisons.includes(data.id)
        )
        .sort((a, b) =>
          (a.values['4g'] || a.values['total']) >
          (b.values['4g'] || b.values['total'])
            ? 1
            : -1
        )
    )
  }, [data, categories, comparaisons])

  return (
    <Wrapper>
      <Flipper flipKey={lines.map((line) => line.id).join()}>
        {lines.map((line) => (
          <Flipped flipId={line.id} key={line.id}>
            <Line
              line={line}
              max={
                lines[lines.length - 1].values['4g'] ||
                lines[lines.length - 1].values['total']
              }
            />
          </Flipped>
        ))}
      </Flipper>
    </Wrapper>
  )
}
