import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'

const Wrapper = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  margin: 0 0.375rem;
  background-color: ${(props) =>
    props.active ? props.theme.colors.main : 'transparent'};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.5rem;
  cursor: pointer;
`
export default function Comparaison(props) {
  const { comparaisons, setComparaisons } = useContext(SearchContext)

  const active = comparaisons.includes(props.comparaison.id)

  return (
    <Wrapper
      onClick={() =>
        setComparaisons((prevComparaisons) =>
          active
            ? prevComparaisons.filter(
                (comparaison) => comparaison !== props.comparaison.id
              )
            : [...prevComparaisons, props.comparaison.id]
        )
      }
      active={active}
    >
      {props.comparaison.emoji}
    </Wrapper>
  )
}
