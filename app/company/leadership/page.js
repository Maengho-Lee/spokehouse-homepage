'use client'
import Link from 'next/link'

export default function Leadership() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* 별빛 애니메이션 */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        {/* 회로 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor"/>
                <circle cx="18" cy="18" r="1" fill="currentColor"/>
                <path d="M2,2 L18,2 L18,18 L2,18 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              인사말
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              CEO Message
            </p>
          </div>
        </div>
      </section>

      {/* 대표이사 인사말 섹션 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* 대표이사 소개 카드 */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="lg:flex">
              {/* 프로필 이미지 영역 */}
              <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-purple-700 p-12 flex flex-col items-center justify-center text-white">
                <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30 overflow-hidden">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/only_logo.jpg" 
                      alt="SpokeHouse Logo" 
                      className="w-[90%] h-[90%] object-contain p-2"
                      onError={(e) => {
                        // 로고 파일이 없을 경우 대체 텍스트 표시
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-6xl font-bold text-blue-600 hidden">S</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">이맹호</h2>
                <p className="text-blue-200 text-lg font-medium">대표이사 / CEO</p>
                <div className="mt-6 space-y-2 text-center">
                  <p className="text-blue-100">SpokeHouse 창립자</p>
                  <p className="text-blue-100">전자공학 전문가</p>
                  <p className="text-blue-100">깊게 고민하고 작은일에도 최선을 다하는 'Spoke'</p>
                </div>
              </div>

              {/* 인사말 내용 */}
              <div className="lg:w-2/3 p-12">
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">CEO 인사말</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      안녕하세요. <span className="font-semibold text-blue-600">SpokeHouse 대표이사 이맹호</span>입니다.
                    </p>
                  </div>

                  <div className="space-y-5 text-gray-700 leading-relaxed">
                    <p>
                      SpokeHouse는 <span className="font-semibold text-purple-600">'바퀴살'</span> 이라는 의미인 <span className="font-semibold">Spoke</span>와  
                      <span className="font-semibold text-purple-600">'집'</span> 이라는 의미의 <span className="font-semibold">House</span>가 합쳐진 사명입니다.
                    </p>

                    <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      바퀴가 튼튼하게 잘 굴러가려면 구성된 많은 <span className="font-semibold text-blue-600">'Spoke'들</span>이 
                      각자의 위치에서 맡은 무게를 잘 지탱해주어야 합니다.
                    </p>

                    <p>
                      세상에 존재하는 모든 제품은 <span className="font-semibold">'기획' '개발' '수정' '테스트' '생산' '유통'</span> 등 
                      수많은 단계와 각 단계에서 최선을 다해준 사람들 덕분에 탄생할 수 있다고 생각합니다.
                    </p>

                    <p className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      이러한 많은 단계 중 <span className="font-semibold text-purple-600">회로, 소프트웨어 개발, Artwork, 기구설계, 제품생산</span>에서 
                      고객사의 중요한 <span className="font-semibold">Spoke</span>가 될 수 있도록 하겠습니다.
                    </p>

                    <p>
                      혼자 혹은 지인과 <span className="font-semibold text-blue-600">'Spoke'</span> 했었던 아이디어를 
                      저희 <span className="font-semibold text-purple-600">'House'</span>에서 실현해 보시는건 어떨까요?
                    </p>

                    <p className="text-gray-800 font-medium">
                      모든 아이디어에 대해 환영하고 찾아주시는 모든 분들께 감사합니다.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-right text-gray-600 italic">
                      매화가 흐드러지게 핀 어느 봄날 🌸
                    </p>
                    <p className="text-right text-gray-800 font-semibold mt-2">
                      이맹호 드림
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 경영 철학 섹션 */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">혁신적 사고</h3>
              <p className="text-blue-700">
                모든 아이디어를 환영하며, 창의적이고 혁신적인 솔루션을 통해 고객의 꿈을 현실로 만듭니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">팀워크</h3>
              <p className="text-purple-700">
                각자의 위치에서 최선을 다하는 팀원들과 함께 고객사의 든든한 파트너가 되겠습니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">신뢰와 품질</h3>
              <p className="text-green-700">
                다수의 솔루션을 개발한 경험을 바탕으로 신뢰할 수 있는 품질의 전자기기 개발 서비스를 제공합니다.
              </p>
            </div>
          </div>

          {/* CTA 섹션 */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">함께 이야기해보세요</h3>
              <p className="text-xl mb-8 text-blue-100">
                여러분의 아이디어를 SpokeHouse에서 현실로 만들어보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  개발 문의하기
                </Link>
                <Link 
                  href="/company" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  회사 더 알아보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}