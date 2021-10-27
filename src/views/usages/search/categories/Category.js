import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Emoji from 'components/base/Emoji'
import Checkbox from './category/Checkbox'

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
  width: 11rem;
  height: 9rem;
  margin: 0 auto;
  padding: 0.75rem 0.25rem;
  color: ${(props) => props.theme.colors[props.active ? 'background' : 'main']};
  border: 0.25rem solid ${(props) => props.theme.colors.main};
  border-radius: 2rem;
  background-color: ${(props) =>
    props.theme.colors[props.active ? 'main' : 'background']};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};
  transition: all 200ms ease-out;
`
const StyledEmoji = styled(Emoji)`
  font-size: 2rem;
`
const Label = styled.span`
  display: block;
  font-size: 1.25rem;
  text-align: center;
`
const Detail = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
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
      <Detail>{props.detail}</Detail>
    </Wrapper>
  )
}
