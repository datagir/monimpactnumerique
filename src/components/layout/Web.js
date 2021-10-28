import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useIframe from 'hooks/useIframe'
import HeaderWrapper from 'components/wrappers/HeaderWrapper'
import ShareWrapper from 'components/wrappers/ShareWrapper'
import EmbedWrapper from 'components/wrappers/EmbedWrapper'
import ContactWrapper from 'components/wrappers/ContactWrapper'
import FooterWrapper from 'components/wrappers/FooterWrapper'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) => props.theme.mq.average} {
    flex-direction: column-reverse;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 39rem;
  max-width: 100%;
  min-height: ${(props) => (props.iframe ? 'none' : '100vh')};
  margin: 0 auto;
  padding: 0 0.75rem 5rem;

  ${(props) => props.theme.mq.small}  {
    padding: 0 0.75rem 5rem;
  }
`
export default function Web(props) {
  const iframe = useIframe()
  const [noHeader, setnoHeader] = useState(false)

  useEffect(() => {
    setnoHeader(window.location.search.includes('noheader'))
  }, [])

  return (
    <Wrapper>
      <Content>
        <FullScreen iframe={iframe}>
          <HeaderWrapper noHeader={noHeader} />
          {props.children}
        </FullScreen>
        <FooterWrapper iframe={iframe} />
      </Content>
      <EmbedWrapper />
      <ShareWrapper />
      <ContactWrapper />
    </Wrapper>
  )
}
