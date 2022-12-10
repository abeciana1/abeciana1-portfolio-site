import '../styles/globals.css'
import '../styles/notion.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '../components/utils/_nav/NavBar'
import { StrictMode } from "react";

// todo create new SEO description field for page SEO
// todo create custom head export for a variety of page types
// todo create share buttons for blog posts
// todo create sidebar comp for sidebar sharing
// todo build portfolio page
// todo build portfolio [slug] pages
// todo build contact page

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
