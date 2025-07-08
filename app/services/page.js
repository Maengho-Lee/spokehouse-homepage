export const metadata = {
  title: '개발 서비스 - SpokeHouse',
  description: 'SpokeHouse에서 제공하는 전자기기 하드웨어 및 소프트웨어 개발 서비스를 확인하세요.',
}

export default function Services() {
  const services = [
    {
      title: "하드웨어 개발",
      description: "회로 설계부터 PCB 제작까지 완벽한 하드웨어 솔루션",
      features: [
        "아날로그/디지털 회로 설계",
        "PCB 설계 및 레이아웃",
        "부품 선정 및 최적화",
        "EMC/EMI 테스트 및 인증",
        "시제품 제작 및 검증",
        "양산 지원"
      ],
      icon: "🔧",
      color: "blue"
    },
    {
      title: "소프트웨어 개발",
      description: "임베디드 펌웨어부터 애플리케이션까지 통합 SW 개발",
      features: [
        "임베디드 C/C++ 개발",
        "RTOS 기반 멀티태스킹",
        "디바이스 드라이버 개발",
        "통신 프로토콜 구현",
        "모바일/웹 애플리케이션",
        "클라우드 플랫폼 연동"
      ],
      icon: "💻",
      color: "purple"
    },
    {
      title: "IoT 솔루션",
      description: "사물인터넷 기기부터 클라우드까지 End-to-End 개발",
      features: [
        "무선 통신 모듈 개발",
        "센서 데이터 수집/처리",
        "클라우드 서버 구축",
        "실시간 모니터링 시스템",
        "데이터 분석 및 시각화",
        "보안 및 암호화"
      ],
      icon: "📡",
      color: "green"
    }
  ]

  const developmentProcess = [
    {
      phase: "분석",
      title: "요구사항 분석",
      description: "고객의 요구사항을 정확히 파악하고 기술적 검토를 진행합니다.",
      details: ["요구사항 정의서 작성", "기술적 실현 가능성 검토", "개발 일정 및 비용 산정"]
    },
    {
      phase: "설계",
      title: "시스템 설계",
      description: "하드웨어와 소프트웨어의 통합 설계를 진행합니다.",
      details: ["시스템 아키텍처 설계", "하드웨어 회로 설계", "소프트웨어 구조 설계"]
    },
    {
      phase: "개발",
      title: "구현 및 개발",
      description: "설계된 시스템을 실제로 구현하고 개발합니다.",
      details: ["PCB 제작 및 조립", "펌웨어 및 소프트웨어 개발", "단위 테스트 수행"]
    },
    {
      phase: "검증",
      title: "테스트 및 검증",
      description: "개발된 제품의 성능과 안정성을 검증합니다.",
      details: ["기능 테스트", "성능 최적화", "인증 테스트 지원"]
    },
    {
      phase: "양산",
      title: "양산 지원",
      description: "제품의 대량 생산을 위한 지원을 제공합니다.",
      details: ["양산 공정 최적화", "품질 관리 시스템", "기술 지원 및 유지보수"]
    }
  ]

  return (
    <div className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            전자기기 개발 서비스
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            하드웨어와 소프트웨어가 완벽하게 조화된 혁신적인 전자기기 개발 서비스를 제공합니다.
          </p>
        </div>

        {/* 주요 서비스 */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`bg-gradient-to-r ${
                service.color === 'blue' ? 'from-blue-500 to-blue-600' :
                service.color === 'purple' ? 'from-purple-500 to-purple-600' :
                'from-green-500 to-green-600'
              } p-6 text-white`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-blue-100">{service.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 개발 프로세스 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">개발 프로세스</h2>
            <p className="text-lg text-gray-600">체계적이고 검증된 개발 프로세스로 최고 품질의 제품을 제공합니다</p>
          </div>
          
          <div className="relative">
            {/* 프로세스 라인 */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-200"></div>
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {developmentProcess.map((process, index) => (
                <div key={index} className="relative">
                  {/* 프로세스 원 */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                    {index + 1}
                  </div>
                  
                  {/* 프로세스 카드 */}
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center mb-4">
                      <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">{process.phase}</span>
                      <h3 className="text-lg font-bold text-gray-800 mt-1">{process.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{process.description}</p>
                    <ul className="space-y-1">
                      {process.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-start">
                          <span className="text-blue-500 mr-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">기술 스택 & 플랫폼</h2>
            <p className="text-lg text-gray-600">최신 기술과 검증된 플랫폼을 활용합니다</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="font-semibold text-gray-800 mb-3">MCU/MPU</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>STM32 시리즈</p>
                <p>ESP32/ESP8266</p>
                <p>Nordic nRF</p>
                <p>Raspberry Pi</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-semibold text-gray-800 mb-3">개발 환경</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>STM32CubeIDE</p>
                <p>Arduino IDE</p>
                <p>PlatformIO</p>
                <p>Keil MDK</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-800 mb-3">모바일/웹</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>React Native</p>
                <p>Flutter</p>
                <p>React.js</p>
                <p>Node.js</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="font-semibold text-gray-800 mb-3">클라우드</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>AWS IoT Core</p>
                <p>Azure IoT</p>
                <p>Firebase</p>
                <p>MQTT Broker</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">프로젝트를 시작할 준비가 되셨나요?</h2>
          <p className="text-lg mb-8 text-blue-100">
            전문 엔지니어와 함께 귀하의 아이디어를 현실로 만들어보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              개발 상담 받기
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
              포트폴리오 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
