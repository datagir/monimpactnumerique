import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Comparaison from './comparaisons/Comparaison'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Button = styled.button`
  padding: 0.5rem 0.75rem 0.25rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background-color: ${(props) =>
    props.open ? props.theme.colors.secondLight : 'transparent'};
  border: none;
  border-radius: 0.5rem 0.5rem 0 0;
  cursor: pointer;
`
const List = styled.div`
  position: absolute;
  z-index: 5;
  top: 100%;
  right: 0;
  display: flex;
  padding: 0.75rem 0.375rem;
  background-color: ${(props) => props.theme.colors.secondLight};
  border: none;
  border-radius: 0.5rem 0 0.5rem 0.5rem;
`
export default function Comparaisons() {
  const { data, comparaisons } = useContext(SearchContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    comparaisons.length && setOpen(true)
  }, [comparaisons])

  return (
    <Wrapper>
      <Button onClick={() => setOpen((prevOpen) => !prevOpen)} open={open}>
        Afficher des comparaisons
      </Button>
      {open && (
        <List>
          {data
            .filter((line) => line.category === 'comparaison')
            .map((line) => (
              <Comparaison comparaison={line} />
            ))}
        </List>
      )}
    </Wrapper>
  )
}
