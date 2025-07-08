export const metadata = {
  title: '회사 소개 - SpokeHouse',
  description: 'SpokeHouse의 역사, 비전, 그리고 전문 전자기기 개발 팀을 소개합니다.',
}

export default function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* 회사 소개 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">SpokeHouse 소개</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SpokeHouse는 전자기기의 하드웨어와 소프트웨어 개발 전문 기업으로 빠르게 성장하고 있습니다. 
            혁신적인 기술과 창의적인 아이디어로 고객의 비전을 현실로 만드는 것이 우리의 사명입니다.
          </p>
        </div>

        {/* 미션 & 비전 */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">우리의 미션</h2>
            <p className="text-gray-600">
              최첨단 하드웨어와 소프트웨어 기술을 융합하여 
              혁신적이고 실용적인 전자기기를 개발하고, 
              고객의 성공적인 제품 출시를 지원합니다.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">우리의 비전</h2>
            <p className="text-gray-600">
              전자기기 개발 분야의 선도 기업이 되어 
              IoT, AI, 스마트 디바이스 시대를 이끌어가는 
              기술 혁신의 중심이 되겠습니다.
            </p>
          </div>
        </div>

        {/* 핵심 역량 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">핵심 역량</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "하드웨어 설계", 
                desc: "회로 설계부터 PCB 제작까지",
                icon: "🔧"
              },
              { 
                title: "임베디드 SW", 
                desc: "MCU/MPU 기반 펌웨어 개발",
                icon: "💻"
              },
              { 
                title: "IoT 솔루션", 
                desc: "무선 통신 및 클라우드 연동",
                icon: "📡"
              },
              { 
                title: "제품 통합", 
                desc: "HW/SW 최적화 및 양산 지원",
                icon: "⚙️"
              }
            ].map((capability, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 기술 전문성 */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">기술 전문성</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">하드웨어</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ARM Cortex-M/A 시리즈</li>
                <li>• STM32, ESP32, Nordic nRF</li>
                <li>• 아날로그/디지털 회로 설계</li>
                <li>• 고속 PCB 설계</li>
                <li>• 전력 관리 회로</li>
                <li>• RF/무선 통신 모듈</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">소프트웨어</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 임베디드 C/C++</li>
                <li>• FreeRTOS, QNX</li>
                <li>• Python, C#</li>
                <li>• Flutter, Firebase</li>
                <li>• 모바일 앱 개발</li>
                <li>• 클라우드 플랫폼 연동</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">통신 & 프로토콜</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• WiFi, Bluetooth LE</li>
                <li>• LoRa, Zigbee </li>
                <li>• UART, SPI, I2C</li>
                <li>• MQTT, HTTP/HTTPS</li>
                <li>• TCP/IP, UDP</li>
                <li>• 보안 프로토콜</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 개발 프로세스 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">개발 프로세스</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            {[
              { step: "1", title: "요구사항 분석", desc: "고객 니즈 파악 및 기술 검토" },
              { step: "2", title: "설계 & 개발", desc: "HW/SW 통합 설계 및 구현" },
              { step: "3", title: "프로토타입", desc: "시제품 제작 및 검증" },
              { step: "4", title: "최적화", desc: "성능 튜닝 및 양산 준비" },
              { step: "5", title: "양산 지원", desc: "제조 지원 및 품질 관리" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">회사 정보</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">설립년도</h3>
              <p className="text-3xl font-bold text-blue-600">2024</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">완료 프로젝트</h3>
              <p className="text-3xl font-bold text-blue-600">50+</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">개발 엔지니어</h3>
              <p className="text-3xl font-bold text-blue-600">2명+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
