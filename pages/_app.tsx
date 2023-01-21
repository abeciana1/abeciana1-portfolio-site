import '../styles/globals.css'
import '../styles/notion.css'

import { useRef, useState, useEffect } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '../components/utils/_nav/NavBar'
import { StrictMode } from "react";

// todo Add liking / claps feature
// todo Add section for personal updates from me

export default function App({ Component, pageProps }: AppProps) {

  let mobileNavOpen = useRef(false)
  const [navIsOpen, setNavOpen] = useState(false);

  useEffect(() => {
    mobileNavOpen.current
  }, [navIsOpen, mobileNavOpen])

  const toggleMobileNav = () => {
    setNavOpen(toggle => {
      mobileNavOpen.current = !toggle
      return !toggle
    })
  }

  return (
    <StrictMode>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <NavBar mobileNavOpen={mobileNavOpen.current} toggleMobileNav={toggleMobileNav} />
      {!mobileNavOpen.current && 
        <Component {...pageProps} />
      }
    </StrictMode>
  )
}
