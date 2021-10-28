import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Emoji from 'components/base/Emoji'
import Checkbox from './category/Checkbox'
import Detail from './category/Detail'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
`
const Button = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 11.5rem;
  height: 9rem;
  margin: 0 auto;
  padding: 0.75rem 0.25rem;
  color: ${(props) => props.theme.colors[props.active ? 'background' : 'main']};
  border: 0.25rem solid ${(props) => props.theme.colors.main};
  border-radius: 2rem;
  background-color: ${(props) =>
    props.theme.colors[props.active ? 'main' : 'background']};
  cursor: pointer;
  transition: color 200ms ease-out, background-color 200ms ease-out;

  ${(props) => props.theme.mq.small} {
    width: calc(33.3333vw - 1rem);
    height: clamp(4rem, calc(33.3333vw - 1rem), 9rem);
    border: 0.1875rem solid ${(props) => props.theme.colors.main};
    border-radius: clamp(0.75rem, 6vw, 1.5rem);
  }
`
const StyledEmoji = styled(Emoji)`
  font-size: 2rem;

  ${(props) => props.theme.mq.small} {
    font-size: clamp(1rem, 6vw, 2rem);
  }
`
const Label = styled.span`
  display: block;
  font-size: 1.25rem;
  text-align: center;

  ${(props) => props.theme.mq.small} {
    font-size: clamp(0.875rem, 4.4vw, 1.25rem);
  }
`

export default function Category(props) {
  const { categories, setCategories } = useContext(SearchContext)
  const active = categories.includes(props.value)

  return (
    <Wrapper>
      <Button
        active={active}
        onClick={() =>
          setCategories((prevCategories) =>
            active
              ? prevCategories.filter((category) => category !== props.value)
              : [...prevCategories, props.value]
          )
        }
      >
        <StyledEmoji>{props.emoji}</StyledEmoji>
        <Label
          dangerouslySetInnerHTML={{
            __html: props.label,
          }}
        />
        <Checkbox active={active} />
      </Button>
      <Detail detail={props.detail} />
    </Wrapper>
  )
}
