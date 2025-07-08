import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 - 전자기기 테마 */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-32 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        
        {/* 회사 로고 배경 */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
          style={{
            backgroundImage: 'url(/only_logo.jpg)',
            backgroundSize: '560px 560px'
          }}
        ></div>
        
        <div className="absolute inset-0">
          {/* 회로 패턴 효과 */}
          <div className="circuit-pattern absolute inset-0 opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SPOKE
              </span>
              <span className="text-white">HOUSE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Advanced Electronics Development Solutions
            </p>
            <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
              하드웨어와 소프트웨어가 만나는 혁신적인 전자기기 개발
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-block text-center">
                개발 문의하기
              </Link>
              <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center">
                포트폴리오 보기
              </Link>
            </div>
          </div>
        </div>

        {/* 하단 화살표 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 전문 분야 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              전자기기 개발 전문 영역
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              하드웨어 설계부터 소프트웨어 개발까지, 완성도 높은 전자제품을 위한 종합 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">하드웨어 개발</h3>
              <p className="text-gray-600 leading-relaxed mb-4">회로 설계, PCB 레이아웃, 부품 선정부터 시제품 제작까지 전 과정을 지원합니다.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 아날로그/디지털 회로 설계</li>
                <li>• PCB 설계 및 레이아웃</li>
                <li>• EMC/EMI 최적화</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">소프트웨어 개발</h3>
              <p className="text-gray-600 leading-relaxed mb-4">임베디드 소프트웨어부터 애플리케이션까지 완벽한 소프트웨어 솔루션을 제공합니다.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 임베디드 C/C++ 개발</li>
                <li>• RTOS 기반 시스템</li>
                <li>• 모바일/웹 애플리케이션</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IoT 솔루션</h3>
              <p className="text-gray-600 leading-relaxed mb-4">사물인터넷 기기 개발부터 클라우드 연동까지 통합 IoT 솔루션을 구현합니다.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• WiFi/Bluetooth/LoRa 통신</li>
                <li>• 클라우드 플랫폼 연동</li>
                <li>• 데이터 분석 및 시각화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              핵심 기술 스택
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              최신 기술과 검증된 플랫폼을 활용하여 안정적이고 혁신적인 제품을 개발합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-semibold text-gray-800 mb-2">하드웨어</h3>
              <p className="text-sm text-gray-600">ARM Cortex, STM32, ESP32, Arduino, Raspberry Pi etc.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-300">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="font-semibold text-gray-800 mb-2">소프트웨어</h3>
              <p className="text-sm text-gray-600">C/C++, Python, C#, Linux, Window, QNX</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300">
              <div className="text-3xl mb-4">📡</div>
              <h3 className="font-semibold text-gray-800 mb-2">통신</h3>
              <p className="text-sm text-gray-600">WiFi, Bluetooth, LoRa, Cellular</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="font-semibold text-gray-800 mb-2">클라우드</h3>
              <p className="text-sm text-gray-600">Firebase, MQTT, HTTPS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            혁신적인 전자기기 개발 파트너
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
            아이디어부터 제품 출시까지, SpokeHouse가 함께합니다. 전문적인 기술 상담을 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl inline-block text-center">
              개발 상담 받기
            </Link>
            <Link href="/download" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center">
              기술 문서 다운로드
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
