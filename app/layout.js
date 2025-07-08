import './globals.css'
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
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}