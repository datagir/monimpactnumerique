import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Emoji from 'components/base/Emoji'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.375rem;
`
const TitleWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  margin-bottom: 0.125rem;
`
const Title = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  font-size: 0.875rem;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }
`
const ChartWrapper = styled.div`
  flex: 1;
  max-width: 30rem;
`
const Chart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
const Bar = styled.div`
  position: relative;
  width: ${(props) => props.percent * 100}%;
  height: 1.75rem;
  transform-origin: left;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
  cursor: pointer;

  ${(props) => props.theme.mq.small} {
    width: calc(${(props) => props.percent * 70}vw + 1rem);
    height: 1.75rem;
    border-radius: 0.875rem;
  }
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
  margin-right: 0.6rem;
  font-size: 1.25rem;
  font-weight: 700;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
const Unit = styled.span`
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`

export default function Line(props) {
  const { setCO2E } = useContext(ModalContext)

  return (
    <Wrapper {...props}>
      <ChartWrapper>
        <TitleWrapper>
          <Title>
            <Emoji>{props.line.emoji}</Emoji>
            <span>{props.line.label.fr}</span>
          </Title>
        </TitleWrapper>
        <Chart>
          <Bar percent={props.line.value / props.max}>
            <Value
              noBar={props.line.value / props.max === 0}
              inside={props.line.value / props.max > 0.9}
            >
              <Number>{props.line.value}</Number>
              <Unit onClick={() => setCO2E(true)}>
                gCO
                <sub>2</sub>e
              </Unit>
            </Value>
          </Bar>
        </Chart>
      </ChartWrapper>
    </Wrapper>
  )
}
