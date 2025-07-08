'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState(null)


  // 전자기기 개발 회사에 맞는 메뉴 구조
  const menuItems = [
    {
      title: 'COMPANY',
      path: '/about',
      subItems: [
        { title: '회사 소개', path: '/about' },
        { title: '인사말', path: '/company/leadership' },
        { title: '오시는 길', path: '/about/location' }
      ]
    },
    {
      title: 'PORTFOLIO',
      path: '/portfolio',
      subItems: [
        { title: 'PORTFOLIO', path: '/portfolio' }
      ]
    },
    {
      title: 'DOWNLOAD',
      path: '/download',
      subItems: [
        { title: '기술 문서', path: '/download' }
      ]
    },
    {
      title: 'CONTACT',
      path: '/contact',
      subItems: [
        { title: '개발 문의', path: '/contact' },
        { title: '협업 문의', path: '/contact/partnership' },
        { title: '채용 정보', path: '/contact/careers' }
      ]
    }
  ]

  const handleMouseEnter = (index) => {
    setActiveDropdown(index)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }



  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 backdrop-blur-sm bg-opacity-95 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 섹션 */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-2xl font-bold text-white tracking-wider transform group-hover:scale-105 transition-transform duration-200">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SPOKE
              </span>
              <span className="text-white">HOUSE</span>
            </div>
            <div className="hidden md:block text-xs text-gray-300 ml-2">
              Electronics Development
            </div>
          </Link>

          {/* 메인 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.path}
                  className={`text-white hover:text-blue-300 transition-all duration-200 font-medium tracking-wide py-2 px-1 relative ${
                    pathname === item.path ? 'text-blue-300' : ''
                  }`}
                >
                  {item.title}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform transition-transform duration-200 ${
                    pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>

                {/* 드롭다운 메뉴 */}
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-100 transition-all duration-300 ${
                  activeDropdown === index ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}>
                  <div className="py-3">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm font-medium"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 모바일 메뉴 */}
          <div className="flex items-center">
            {/* 모바일 메뉴 버튼 */}
            <button className="md:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
