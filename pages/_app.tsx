import '../styles/globals.css'
import '../styles/notion.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '../components/utils/_nav/NavBar'
import { StrictMode } from "react";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <StrictMode>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </StrictMode>
  )
}
