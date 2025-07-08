import Link from 'next/link'

export const metadata = {
  title: '자료 다운로드 - SpokeHouse',
  description: 'SpokeHouse 자사 제품 관련 기술 자료를 다운로드하실 수 있습니다.',
}

export default function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        {/* 별들 */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse opacity-90" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-80" style={{animationDelay: '3s'}}></div>

        {/* 떠다니는 문서 아이콘들 */}
        <div className="absolute top-16 left-16 text-2xl animate-float opacity-20" style={{animationDelay: '0s', animationDuration: '6s'}}>
          📄
        </div>
        <div className="absolute top-1/3 right-24 text-xl animate-float opacity-15" style={{animationDelay: '1.5s', animationDuration: '5s'}}>
          📁
        </div>
        <div className="absolute top-1/2 left-1/3 text-lg animate-float opacity-20" style={{animationDelay: '3s', animationDuration: '7s'}}>
          📋
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-xl animate-float opacity-15" style={{animationDelay: '4.5s', animationDuration: '6s'}}>
          📊
        </div>
        <div className="absolute bottom-1/4 left-24 text-lg animate-float opacity-20" style={{animationDelay: '2s', animationDuration: '5.5s'}}>
          💾
        </div>
        <div className="absolute top-24 right-1/3 text-xl animate-float opacity-15" style={{animationDelay: '5s', animationDuration: '6.5s'}}>
          📐
        </div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          {/* 헤더 */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                자료 다운로드
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              SpokeHouse 자사 제품에 대한 
              <span className="text-blue-300 font-semibold"> 기술 자료 및 제품 문서 </span>
              다운로드를 준비하고 있습니다.
              <br />
              <span className="text-purple-300 font-semibold">곧 다양한 자료들을 만나보실 수 있습니다.</span>
            </p>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-12 border border-white/20 text-center">
              <div className="text-6xl mb-8">🔧</div>
              <h2 className="text-3xl font-bold text-white mb-6">준비 중입니다</h2>
              <div className="text-lg text-gray-300 mb-8 leading-relaxed">
                <p className="mb-4">
                  현재 자사 제품에 대한 상세한 기술 자료 및 제품 문서를 
                  <span className="text-blue-300 font-semibold"> 체계적으로 정리</span>하고 있습니다.
                </p>
                <p className="mb-4">
                  고객님들께서 필요로 하시는 
                  <span className="text-purple-300 font-semibold">회로도, 데이터시트, 사용 설명서</span> 등을 
                  쉽게 다운로드하실 수 있도록 준비하겠습니다.
                </p>
              </div>

              {/* 준비 예정 자료 */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">준비 예정 자료</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">제품 회로도 및 설계 도면</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">기술 사양서 및 데이터시트</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">사용자 매뉴얼</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">소프트웨어 및 펌웨어</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">개발 도구 및 SDK</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-300">응용 사례 및 참고 자료</span>
                  </div>
                </div>
              </div>

              {/* 알림 신청 */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30">
                <div className="text-2xl mb-4">🔔</div>
                <h3 className="text-xl font-semibold text-white mb-3">업데이트 알림</h3>
                <p className="text-gray-300 mb-4">
                  자료 준비가 완료되는 대로 알려드리겠습니다.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <span>📧</span>
                  <span>알림 신청하기</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 추가 정보 섹션 */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">현재 이용 가능한 서비스</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="text-4xl mb-6">📞</div>
                <h3 className="text-xl font-bold text-white mb-4">기술 지원</h3>
                <p className="text-gray-300 mb-6">
                  제품 관련 기술적 문의사항이 있으시면 전문 엔지니어가 직접 상담해드립니다.
                </p>
                <Link 
                  href="/contact" 
                  className="text-blue-300 hover:text-blue-400 font-medium transition-colors"
                >
                  문의하기 →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="text-4xl mb-6">💼</div>
                <h3 className="text-xl font-bold text-white mb-4">맞춤 개발</h3>
                <p className="text-gray-300 mb-6">
                  고객 요구사항에 맞는 맞춤형 하드웨어 및 소프트웨어 개발 서비스를 제공합니다.
                </p>
                <Link 
                  href="/contact/partnership" 
                  className="text-purple-300 hover:text-purple-400 font-medium transition-colors"
                >
                  협업 문의 →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="text-4xl mb-6">📋</div>
                <h3 className="text-xl font-bold text-white mb-4">포트폴리오</h3>
                <p className="text-gray-300 mb-6">
                  SpokeHouse의 다양한 개발 사례와 기술력을 포트폴리오에서 확인하세요.
                </p>
                <Link 
                  href="/portfolio" 
                  className="text-green-300 hover:text-green-400 font-medium transition-colors"
                >
                  포트폴리오 보기 →
                </Link>
              </div>
            </div>
          </div>

          {/* 문의 섹션 */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-xl rounded-3xl p-10 border border-gray-600/30 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">특별한 자료가 필요하신가요?</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                표준 자료 외에 특별한 기술 문서나 맞춤형 자료가 필요하시면
                <br />
                <span className="text-blue-300 font-semibold">언제든지 문의해 주세요.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 inline-block">
                  맞춤 자료 요청
                </Link>
                <Link href="/contact" className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 inline-block">
                  기술 문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
