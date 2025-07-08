import Link from 'next/link'

export const metadata = {
  title: '기술 문서 - SpokeHouse',
  description: 'SpokeHouse의 기술 문서, 개발 가이드, SDK 및 하드웨어 설계 자료를 다운로드하세요.',
}

export default function Download() {
  const downloadItems = [
    {
      category: '회로도 & 설계 파일',
      description: '하드웨어 설계 참조 자료',
      items: [
        { title: 'MCU 개발보드 회로도', size: '-', format: 'PDF', description: '준비중', status: 'preparing' },
        { title: 'IoT 모듈 설계 파일', size: '-', format: 'ZIP', description: '준비중', status: 'preparing' },
        { title: '전력관리 회로 설계', size: '-', format: 'PDF', description: '준비중', status: 'preparing' }
      ]
    },
    {
      category: '데이터시트',
      description: '주요 부품 및 모듈 사양서',
      items: [
        { title: 'WiFi 모듈 데이터시트', size: '-', format: 'PDF', description: '준비중', status: 'preparing' },
        { title: 'BLE 센서 모듈', size: '-', format: 'PDF', description: '준비중', status: 'preparing' },
        { title: 'MCU 컨트롤러 보드', size: '-', format: 'PDF', description: '준비중', status: 'preparing' }
      ]
    },
    {
      category: '기술 문서',
      description: '제품 개발에 필요한 핵심 기술 문서',
      items: [
        { title: '하드웨어 설계 가이드', size: '-', format: 'PDF', description: '준비중', status: 'preparing' },
        { title: '임베디드 소프트웨어 개발 가이드', size: '-', format: 'PDF', description: '준비중', status: 'preparing' },
        { title: 'PCB 설계 표준서', size: '-', format: 'PDF', description: '준비중', status: 'preparing' }
      ]
    },
    {
      category: 'SDK & API',
      description: '개발자를 위한 소프트웨어 개발 키트',
      items: [
        { title: 'IoT 개발 SDK', size: '-', format: 'ZIP', description: '준비중', status: 'preparing' },
        { title: '무선통신 라이브러리', size: '-', format: 'ZIP', description: '준비중', status: 'preparing' },
        { title: '네트워크 모듈 API', size: '-', format: 'ZIP', description: '준비중', status: 'preparing' }
      ]
    }
  ]

  const categories = [
    { name: '전체', count: 12 },
    { name: '하드웨어', count: 5 },
    { name: '소프트웨어', count: 4 },
    { name: 'IoT', count: 3 }
  ]

  return (
    <div className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            기술 문서
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            전자기기 개발에 필요한 기술 문서, SDK, 회로도 및 설계 가이드를 무료로 다운로드하실 수 있습니다.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* 다운로드 섹션 */}
        <div className="space-y-16">
          {downloadItems.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{category.category}</h2>
                <p className="text-blue-100">{category.description}</p>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <div className="mb-3">
                            {item.status === 'preparing' ? (
                              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 border border-yellow-200">
                                <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {item.description}
                              </div>
                            ) : (
                              <p className="text-sm text-gray-600">{item.description}</p>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                              {item.format}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                              {item.size}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        disabled={item.status === 'preparing'}
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                          item.status === 'preparing' 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 group'
                        }`}
                      >
                        {item.status === 'preparing' ? (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>준비중</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>다운로드</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 개발 지원 섹션 */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">개발 지원 서비스</h2>
            <p className="text-lg text-gray-600">기술 자료 외에도 다양한 개발 지원 서비스를 제공합니다</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-gray-800 mb-2">기술 지원</h3>
              <p className="text-sm text-gray-600 mb-4">전문 엔지니어의 1:1 기술 상담</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">문의하기 →</button>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-semibold text-gray-800 mb-2">기술 교육</h3>
              <p className="text-sm text-gray-600 mb-4">개발자 대상 기술 교육 프로그램</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">신청하기 →</button>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-gray-800 mb-2">개발 파트너십</h3>
              <p className="text-sm text-gray-600 mb-4">공동 개발 및 기술 제휴</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">제안하기 →</button>
            </div>
          </div>
        </div>

        {/* 문의 섹션 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">필요한 자료를 찾지 못하셨나요?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            맞춤형 기술 문서나 특별한 개발 자료가 필요하시면 언제든지 문의해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block text-center">
              맞춤 자료 요청
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-block text-center">
              기술 지원 문의
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
