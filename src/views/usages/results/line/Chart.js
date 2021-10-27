import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import useMounted from 'hooks/useMounted'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  opacity: ${(props) => (props.light ? 0.73 : 1)};
`
const Bar = styled.div`
  position: relative;
  width: ${(props) => (props.mounted ? props.percent * 100 : 0)}%;
  height: 1.75rem;
  transform-origin: left;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
  cursor: pointer;
  transition: width 400ms ease-in-out;

  ${(props) => props.theme.mq.small} {
    width: calc(${(props) => props.percent * 70}vw + 1rem);
    height: 1.75rem;
    border-radius: 0.875rem;
  }
`
const Type = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.background};
`
const Value = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  display: flex;
  align-items: baseline;
  padding-left: ${(props) => (props.noBar ? 0 : 0.5)}rem;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.second};
  transition: color 200ms ease-out;

  ${(props) => props.theme.mq.small} {
    left: ${(props) => (props.inside ? 'auto' : '100%')};
    right: ${(props) => (props.inside ? '1rem' : 'auto')};
    color: ${(props) =>
      props.theme.colors[props.inside ? 'background' : 'second']};
  }
`
const Number = styled.span`
  margin-right: 0.3rem;
  font-size: 1.25rem;
  font-weight: 700;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
const Unit = styled.span`
  cursor: pointer;
  font-size: 0.75rem;

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`
const SmallType = styled.span`
  margin-left: 0.3rem;
  font-size: 0.75rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
`
export default function Chart(props) {
  const { setCO2E } = useContext(ModalContext)

  const mounted = useMounted()

  return (
    <Wrapper light={props.type === 'Wifi'}>
      <Bar mounted={mounted} percent={props.percent}>
        {props.percent > 0.15 && <Type>{props.type}</Type>}
        <Value inside={props.percent > 0.9}>
          <Number>{props.value}</Number>
          <Unit onClick={() => setCO2E(true)}>
            gCO
            <sub>2</sub>e
          </Unit>
          {props.percent <= 0.15 && <SmallType>({props.type})</SmallType>}
        </Value>
      </Bar>
    </Wrapper>
  )
}
