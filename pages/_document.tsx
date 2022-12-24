import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


const MyDocument = () => {

    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Full stack software engineer with two years of experience with an entrepreneurial spirit. Previous experience with five years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps." />
                <link rel="icon preload" as="image" href="/waving.png" />
                <link rel="preload" as="image" href="/profile-callout-edited.png" />
                <link rel="preload" as="image" href="/profile-pic.png" />
                <link rel="preload" as="image" href="/github-png.png" />
                <link rel="preload" as="image" href="/linkedin-png.png" />
                <link rel="preload" as="image" href="/behance-png.png" />
                <link rel="preload stylesheet" as="font" href="/RerossQuadratic.otf" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" as="font" rel="stylesheet preload" crossOrigin="anonymous" />
                <Script
                    id="hs-script-loader"
                    src="//js.hs-scripts.com/21235958.js"
                    strategy="lazyOnload"
                />
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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y7HNS80HJT"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-Y7HNS80HJT');
                            `
                        }}></script>
                <Script
                    id="google-tag-manager"
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-Y7HNS80HJT"
                />
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
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument