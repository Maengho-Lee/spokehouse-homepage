'use client'
import Link from 'next/link'

export default function Location() {
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
              오시는 길
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              SpokeHouse Location & Directions
            </p>
          </div>
        </div>
      </section>

      {/* 주소 및 교통 정보 섹션 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* 회사 주소 카드 */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">SpokeHouse 본사</h2>
                <p className="text-blue-100 text-lg">전자기기 개발 전문 기업</p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">주소</h3>
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-semibold text-blue-600">경기도 광명시 범안로996번길 6</span><br/>
                        광명티아모IT타워 918호
                      </p>
                      <p className="text-sm text-gray-500 mt-2">우편번호: 14322</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">연락처</h3>
                      <p className="text-gray-600">대표전화: 010-4143-7807</p>
                      <p className="text-gray-600">이메일: leemaengho@spokehouse.co.kr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">운영시간</h3>
                      <p className="text-gray-600">평일: 09:00 - 18:00</p>
                      <p className="text-gray-600">점심시간: 12:00 - 13:00</p>
                      <p className="text-gray-600">주말 및 공휴일: 휴무</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-800 mb-4">🚗 자가용 이용시</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 경부고속도로 → 서울외곽순환고속도로</li>
                      <li>• 광명IC 또는 일직IC 이용</li>
                      <li>• 광명시청 방향으로 진행</li>
                      <li>• 광명티모아IT타워 (주차장 이용 가능)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-lg font-bold text-green-800 mb-4">🚇 대중교통 이용시</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <span className="font-semibold">지하철 1호선</span> 광명역 하차</li>
                      <li>• 광명역에서 버스 이용 (약 10분)</li>
                      <li>• <span className="font-semibold">광명 11번, 15번</span> 버스 탑승</li>
                      <li>• 광명티모아IT타워 정류장 하차</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-orange-800 mb-4">📍 주요 랜드마크</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 광명시청 (도보 5분)</li>
                      <li>• 광명전통시장 (도보 10분)</li>
                      <li>• 광명역 (차량 15분)</li>
                      <li>• 광명사거리역 (차량 10분)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 지도 섹션 */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 text-white">
              <h2 className="text-2xl font-bold text-center">찾아오시는 길</h2>
              <p className="text-center text-gray-300 mt-2">SpokeHouse 위치 안내</p>
            </div>
            
            <div className="p-8">
              {/* 구글맵 iframe - 새로운 정확한 좌표와 마커 */}
              <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=ko&amp;q=37.4588899,126.8747852+(SpokeHouse+-+경기도+광명시+범안로996번길+6)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="SpokeHouse 위치 지도 - 경기도 광명시 범안로 996번길 6"
                ></iframe>
              </div>

              {/* 지도 하단 버튼들 */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.google.com/maps/place/경기도+광명시+범안로996번길+6/data=!4m6!3m5!1s0x357b618edd646353:0x8455fce827790ebe!8m2!3d37.4588899!4d126.8747852!16s%2Fg%2F11bz7xwq4p?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300 hover:scale-105"
                >
                  📍 구글맵에서 보기
                </a>
                <button 
                  onClick={() => navigator.clipboard.writeText('경기도 광명시 범안로996번길 6 광명티아모IT타워 918호')}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300"
                >
                  📋 주소 복사하기
                </button>
              </div>
            </div>
          </div>

          {/* CTA 섹션 */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">언제든지 방문해 주세요</h3>
              <p className="text-xl mb-8 text-blue-100">
                전자기기 개발에 대한 모든 궁금증을 해결해드립니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  방문 예약하기
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  개발 문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}