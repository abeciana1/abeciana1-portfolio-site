import '@/styles/globals.css'
import '@/styles/code-highlight.css'

import { useRef, useState, useEffect } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '@/components/utils/_nav/NavBar'
import { StrictMode } from "react";
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [ isClient, setClient ] = useState(false)

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setClient(true)
    }
  }, [isClient])


  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isClient) {
        window.dataLayer = window.dataLayer || []
        window?.dataLayer?.push({
            event: 'pageview',
            page: url,
          });
        };
    
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
        };
      }
  }, [router.events]);

  return (
    <StrictMode>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <NavBar mobileNavOpen={mobileNavOpen.current} toggleMobileNav={toggleMobileNav} />
      <Script id="google-tag-manager" strategy="worker" src="https://www.googletagmanager.com/gtag/js?id=G-Y7HNS80HJT" />
      <Script
          id="google-analytics"
          strategy="worker"
      >
          {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  
                  gtag('config', 'G-Y7HNS80HJT');
              `
          }
      </Script>
      {!mobileNavOpen.current && 
        <Component {...pageProps} />
      }
    </StrictMode>
  )
}
