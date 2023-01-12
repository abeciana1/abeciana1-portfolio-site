import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


const MyDocument = () => {

    return (
        <Html lang="en">
            <Head>
                <link rel="icon preload" as="image" href="/waving.webp" />
                <link rel="preload" as="image" href="/profile-callout-edited.webp" />
                <link rel="preload" as="image" href="/profile-pic.webp" />
                <Script
                    id="msft-clarity"
                    strategy="afterInteractive"
                >
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "a78c5ntos1");
                        `
                    }
                </Script>
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                >
                    {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-Y7HNS80HJT');
                        `
                    }
                </Script>
            </Head>
            <body className="py-4 mx-auto px-5 md:px-10">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument