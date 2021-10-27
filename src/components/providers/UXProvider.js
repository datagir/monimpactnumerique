import React, { useState, useEffect } from 'react'

import UXContext from 'utils/UXContext'
import usePageView from 'hooks/usePageView'

export default function UXProvider(props) {
  usePageView('Mon Impact Numérique')

  const [embedOpen, setEmbedOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [typeShare, setTypeShare] = useState('simulator')

  const [configuratorOpen, setConfiguratorOpen] = useState(false)

  const [installPrompt, setInstallPrompt] = useState(null)
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      setInstallPrompt(e)
      console.log(`'beforeinstallprompt' event was fired.`)
    })
  }, [])

  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    return /iphone|ipad|ipod/.test(userAgent)
  }
  const isInStandaloneMode = () =>
    'standalone' in window.navigator && window.navigator.standalone
  const [iOSPrompt, setIOSPrompt] = useState(false)
  useEffect(() => {
    if (isIos() && !isInStandaloneMode()) {
      setIOSPrompt(true)
    }
  }, [])

  return (
    <UXContext.Provider
      value={{
        embedOpen,
        setEmbedOpen: (value) => {
          if (value) {
            window._paq.push(['trackEvent', 'panel', 'embed', 'open'])

            setShareOpen(false)
            setContactOpen(false)
            setConfiguratorOpen(false)
            setTypeShare('simulator')
          }
          setEmbedOpen(value)
        },
        shareOpen,
        setShareOpen: (value) => {
          if (value) {
            window._paq.push(['trackEvent', 'panel', 'share', 'open'])

            setEmbedOpen(false)
            setContactOpen(false)
            setConfiguratorOpen(false)
            setTypeShare('simulator')
          }
          setShareOpen(value)
        },
        contactOpen,
        setContactOpen: (value) => {
          window._paq.push(['trackEvent', 'panel', 'contact', 'open'])
          if (value) {
            setShareOpen(false)
            setEmbedOpen(false)
            setConfiguratorOpen(false)
            setTypeShare('simulator')
          }
          setContactOpen(value)
        },
        configuratorOpen,
        setConfiguratorOpen: (value) => {
          window._paq.push(['trackEvent', 'panel', 'configurator', 'open'])
          if (value) {
            setShareOpen(false)
            setEmbedOpen(false)
            setContactOpen(false)
          }
          setConfiguratorOpen(value)
        },
        typeShare,
        setTypeShare,
        installPrompt,
        iOSPrompt,
      }}
    >
      {props.children}
    </UXContext.Provider>
  )
}
