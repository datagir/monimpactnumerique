import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
`
const Content = styled.span`
  ${(props) => props.theme.mq.small} {
    display: none;
  }
`
const Button = styled.button`
  display: none;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-weight: 300;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;

  ${(props) => props.theme.mq.small} {
    display: inline;
  }
`
export default function Detail(props) {
  const { setPerimetre } = useContext(ModalContext)
  return (
    <Wrapper>
      <Content>{props.detail}</Content>
      <Button onClick={() => setPerimetre(true)}>Périmètre</Button>
    </Wrapper>
  )
}
