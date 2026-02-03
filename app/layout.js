import './globals.css'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'SpokeHouse - 혁신적인 솔루션 제공',
  description: 'SpokeHouse는 고객의 비즈니스 성장을 위한 혁신적인 솔루션을 제공합니다.',
  keywords: 'SpokeHouse, 솔루션, 혁신, 비즈니스, 서비스',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2P6WX6Q');`}
        </Script>
        {/* End Google Tag Manager */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17887447554"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17887447554');
          `}
        </Script>
      </head>
      <body className="bg-gray-100 min-h-screen">
        <Navbar />        
        <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2P6WX6Q"
        height="0" width="0" style="display:none;visibility:hidden">
        </iframe>
        </noscript>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}