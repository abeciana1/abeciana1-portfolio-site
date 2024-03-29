import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { Partytown } from '@builder.io/partytown/react';

const MyDocument = () => {
    
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/waving.webp" />
                <link rel="shortcut icon" href="/waving.webp" />
                <link rel="apple-touch-icon" href="/waving.webp" />
                <link rel="preload" as="image" href="/profile-callout-edited.webp" />
                <link rel="preload" as="image" href="/profile-pic.webp" />
                {process.env.NODE_ENV === 'production' &&
                    <Partytown forward={['dataLayer.push']} />
                }
                <Script
                    id="msft-clarity"
                    strategy="worker"
                >
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "a78c5ntos1");
                        `}
                </Script>
            </Head>
            <body className="py-4 mx-auto px-5 md:px-20 page-margin">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument