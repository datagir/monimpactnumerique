import React from 'react'

import MagicLink from 'components/base/MagicLink'
import Emoji from 'components/base/Emoji'
import Footer from 'components/layout/Footer'

export default function FooterWrapper() {
  return (
    <Footer>
      <h2>D'ou viennent ces données ?</h2>
      <p>
        C'est un secret <Emoji>🤫</Emoji>
      </p>
      <p>
        Si vous souhaitez aller plus loin dans votre démarche, vous pouvez{' '}
        <strong>
          calculer votre empreinte sur le climat grace à notre simulateur{' '}
          <MagicLink to={'https://nosgestesclimat.fr/'}>
            Nos Gestes Climat
          </MagicLink>
        </strong>
        .
      </p>
    </Footer>
  )
}
