import React from 'react'
import styled from 'styled-components'

import Emoji from 'components/base/Emoji'
import Chart from './line/Chart'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.375rem;
`
const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.1;

  i {
    font-weight: 300;
    font-style: normal;
  }
`
const Label = styled.span`
  margin-left: 0.5rem;
  font-size: 1.125rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
export default function Line(props) {
  return (
    <Wrapper {...props}>
      <Title>
        <Emoji>
          {props.line.emoji ||
            (props.line.category === 'email'
              ? '✉️'
              : props.line.category === 'streaming'
              ? '🎞'
              : '🖥')}
        </Emoji>{' '}
        <Label
          dangerouslySetInnerHTML={{
            __html: props.line.label.fr,
          }}
        />
      </Title>
      {props.line.values['fixe'] && (
        <Chart
          type='Wifi'
          value={props.line.values['fixe']}
          percent={props.line.values['fixe'] / props.max}
        />
      )}
      {props.line.values['4g'] && (
        <Chart
          type='4G'
          value={props.line.values['4g']}
          percent={props.line.values['4g'] / props.max}
        />
      )}
      {props.line.values['total'] && (
        <Chart
          value={props.line.values['total']}
          percent={props.line.values['total'] / props.max}
        />
      )}
    </Wrapper>
  )
}
