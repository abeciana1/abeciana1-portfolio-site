import '../styles/globals.css'
import '../styles/notion.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '../components/utils/_nav/NavBar'
import { StrictMode } from "react";

// todo create new SEO description field for page SEO
// todo build portfolio page
// todo build portfolio [slug] pages
// todo build contact page
// todo Add back to top button blog post article page
// todo 

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
