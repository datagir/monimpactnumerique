import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Modal from 'components/base/Modal'

const Title = styled.h2``
const Subtitle = styled.h4`
  margin-bottom: 0.5rem;
`
const Text = styled.p``
export default function PerimetreModal() {
  const { perimetre, setPerimetre } = useContext(ModalContext)
  return (
    <Modal open={perimetre} setOpen={setPerimetre}>
      <Title>Périmètre</Title>
      <Subtitle>Email</Subtitle>
      <Text>Rédaction, envoi et lecture</Text>
      <Subtitle>Streaming</Subtitle>
      <Text>Visionnage d'1h de streaming</Text>
      <Subtitle>Conférence</Subtitle>
      <Text>Participer pendant 1h</Text>
    </Modal>
  )
}
