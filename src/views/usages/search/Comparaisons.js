import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Comparaison from './comparaisons/Comparaison'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${(props) => props.theme.mq.small} {
    align-items: center;
    margin-bottom: 1rem;
  }
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
  transition: background-color 300ms;

  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
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
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? 'inherit' : 'none')};
  transition: opacity 300ms;

  ${(props) => props.theme.mq.small} {
    position: relative;
    justify-content: center;
    width: 100%;
    height: ${(props) => (props.open ? 3.75 : 0)}rem;
    border-radius: 0 0 0.5rem 0.5rem;
    transform: scaleY(${(props) => (props.open ? 1 : 0)});
    transform-origin: top;
    transition: transform 200ms;
    overflow: hidden;
  }
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
      <List open={open}>
        {data
          .filter((line) => line.category === 'comparaison')
          .map((line) => (
            <Comparaison comparaison={line} />
          ))}
      </List>
    </Wrapper>
  )
}
