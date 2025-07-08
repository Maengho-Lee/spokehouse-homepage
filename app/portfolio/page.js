'use client'

export default function Portfolio() {
  // 포트폴리오 프로젝트 데이터
  const portfolioProjects = [
    {
      id: 15,
      title: 'STM32F303활용 이더켓 통신 모듈',
      category: '하드웨어 개발',
      tags: ['단독 진행', 'ODM'],
      image: '/portfolio/smart-lighting.jpg',
      description: '산업용 이더켓 통신 모듈',
      technologies: ['STM32', '회로설계', 'PCB Design'],
      status: 'completed'
    },
    {
      id: 14,
      title: '24V IO 확장 모듈',
      category: '하드웨어 개발',
      tags: ['단독 진행', 'ODM'],
      image: '/portfolio/smart-lighting.jpg',
      description: '산업용 제품에서 활용가능한 32I/O 보드 모듈',
      technologies: ['회로설계', 'PCB Design', '소형화', '안정성'],
      status: 'completed'
    },
    {
      id: 13,
      title: '24VDC-Input 5VDC,3V3DC,1V2DC 출력 파워보드',
      category: '하드웨어 개발',
      tags: ['단독 진행', '자체 개발'],
      image: '/portfolio/smart-lighting.jpg',
      description: '산업용 제품에서 활용가능한 다양한 전압 출력 소형 파워보드',
      technologies: ['회로설계', 'PCB Design', '소형화', '안정성'],
      status: 'completed'
    },
    {
      id: 12,
      title: 'STM32-H7활용 터치 디스플레이 모듈',
      category: '하드웨어 개발',
      tags: ['단독 진행', '자체 개발'],
      image: '/portfolio/smart-lighting.jpg',
      description: '산업용 압전식 터치 디스플레이 모듈',
      technologies: ['STM32', '회로설계', 'PCB Design','디스플레이','압전식 터치'],
      status: 'completed'
    },
    {
      id: 11,
      title: '환경측정 데이터 무선 송출 제품',
      category: '하드웨어 개발',
      tags: ['단독 진행', 'ODM'],
      image: '/portfolio/smart-lighting.jpg',
      description: '사용 환경 온습도 측정 데이터 무선 송출',
      technologies: ['STM32', '회로설계', 'PCB Design', 'LoRa'],
      status: 'completed'
    },
    {
      id: 10,
      title: 'Smart_Lighting System',
      category: '하드웨어 개발',
      tags: ['단독 진행', '국책과제', '연구개발용'],
      image: '/portfolio/smart-lighting.jpg',
      description: 'IoT 기반 스마트 조명 시스템 개발',
      technologies: ['STM32', 'WiFi', 'PCB Design','레이더센서','AC-DC컨버터'],
      status: 'completed'
    },
    {
      id: 9,
      title: '고속 LED 스위칭 DSP 보드 - 광학검사장비',
      category: '하드웨어 개발',
      tags: ['ODM', '양산', '공동 진행'],
      image: '/portfolio/led-switching-dsp.jpg',
      description: '고속 LED 스위칭 및 DSP 처리 보드',
      technologies: ['DSP', 'LED Control', 'High-Speed Switching','PCB Design'],
      status: 'completed'
    },
    {
      id: 8,
      title: '고성능 LED 보드 30종 - 광학검사장비',
      category: '하드웨어 개발',
      tags: ['단독 진행', 'ODM', '양산'],
      image: '/portfolio/led-600-types.jpg',
      description: '다양한 고성능 LED 보드 600여 종 개발',
      technologies: ['LED Driver', 'Multi-Channel', 'PCB Design'],
      status: 'completed'
    },
    {
      id: 7,
      title: '의료장비 FPGA 보드 개발',
      category: '하드웨어 개발',
      tags: ['공동 진행', 'ODM', '양산'],
      image: '/portfolio/medical-fpga.jpg',
      description: '의료용 뇌수술 로봇을 위한 FPGA 기반 제어 보드',
      technologies: ['FPGA', 'Medical Device', 'PCB Design'],
      status: 'completed'
    },
    {
      id: 6,
      title: 'MFC(질량 유량계) 센사 모듈 사전 개발',
      category: '하드웨어 개발',
      tags: ['단독 진행', '연구개발용', 'ODM'],
      image: '/portfolio/mfc-sensor.jpg',
      description: '질량 유량계(가스량) 센사 모듈 사전 개발',
      technologies: ['Sensor Module', 'Mass Flow Control'],
      status: 'completed'
    },
    {
      id: 5,
      title: '광통신 서브 보드 서브랙 모듈(7U)',
      category: '하드웨어 개발',
      tags: ['단독 진행', 'ODM', '양산'],
      image: '/portfolio/optical-subboard-7u.jpg',
      description: '7U 규격의 광통신 서브보드 시스템',
      technologies: ['Optical Interface', '7U Standard','PCB Design','기구설계'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'XILINX FPGA 교육용 보드 개발',
      category: '하드웨어 개발',
      tags: ['단독 진행', 'ODM', '양산'],
      image: '/portfolio/xilinx-fpga-education.jpg',
      description: 'XILINX FPGA 기반 교육용 개발 보드',
      technologies: ['XILINX FPGA', 'Educational Platform', 'Development Board','PCB Design'],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Following_IVpole',
      category: '소프트웨어 개발', 
      tags: ['단독 진행', '국책과제', '연구개발용'],
      image: '/portfolio/following-ivpole.jpg',
      description: '사용자 자동 추적 IV폴 제품',
      technologies: ['Vision', 'C', 'Embedded'],
      status: 'completed'
    },
    {
      id: 2,
      title: '블록식 양방향 운송시스템 및 모니터링 기술',
      category: '하드웨어 개발',
      tags: ['단독 진행', '국책과제'],
      image: '/portfolio/block-transport.jpg',
      description: '블록형 운송 시스템 개발',
      technologies: ['MCU', 'Sensor', 'Communication'],
      status: 'completed'
    },
    {
      id: 1,
      title: 'IO_확장 보드 - 광학검사장비',
      category: '하드웨어 개발',
      tags: ['단독 진행', 'ODM', '양산'],
      image: '/portfolio/io-expansion.jpg',
      description: '광학 검사 장비용 IO 확장 보드',
      technologies: ['PCB', 'I/O Control', 'Industrial'],
      status: 'completed'
    },
  ]

  const categories = [
    { name: '전체' },
    { name: '하드웨어' },
    { name: '소프트웨어' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 relative overflow-hidden">
      {/* 우주 테마 배경 */}
      <div className="absolute inset-0">
        {/* 별들 */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse opacity-90" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-80" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-20 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-70" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-blue-200 rounded-full animate-pulse opacity-50" style={{animationDelay: '4s'}}></div>

        {/* 떠다니는 개발 아이콘들 */}
        <div className="absolute top-16 left-16 text-2xl animate-float opacity-20" style={{animationDelay: '0s', animationDuration: '6s'}}>
          💻
        </div>
        <div className="absolute top-1/3 right-24 text-xl animate-float opacity-15" style={{animationDelay: '1.5s', animationDuration: '5s'}}>
          ⚡
        </div>
        <div className="absolute top-1/2 left-1/3 text-lg animate-float opacity-20" style={{animationDelay: '3s', animationDuration: '7s'}}>
          🔧
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-xl animate-float opacity-15" style={{animationDelay: '4.5s', animationDuration: '6s'}}>
          📡
        </div>
        <div className="absolute bottom-1/4 left-24 text-lg animate-float opacity-20" style={{animationDelay: '2s', animationDuration: '5.5s'}}>
          🚀
        </div>
        <div className="absolute top-24 right-1/3 text-xl animate-float opacity-15" style={{animationDelay: '5s', animationDuration: '6.5s'}}>
          💡
        </div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          {/* 헤더 */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                포트폴리오
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              SpokeHouse가 개발한 
              <span className="text-blue-300 font-semibold"> 하드웨어 및 소프트웨어 프로젝트 </span>
              포트폴리오입니다.
              <br />
              <span className="text-purple-300 font-semibold">혁신적인 기술력으로 구현한 다양한 개발 사례를 확인해보세요.</span>
            </p>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* 포트폴리오 그리드 */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {portfolioProjects
              .sort((a, b) => b.id - a.id)
              .map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-6">
                  {/* 상태 배지 */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-2xl">
                      {(
                        Array.isArray(project.category)
                          ? (
                              project.category.includes('하드웨어 개발') && project.category.includes('소프트웨어 개발')
                                ? '🔧'
                                : project.category.includes('하드웨어 개발')
                                  ? '⚡'
                                  : '💻'
                            )
                          : project.category === '하드웨어 개발' ? '⚡' : '💻'
                      )}
                    </div>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      완료
                    </span>
                  </div>
                  {/* 프로젝트 제목 */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* 카테고리 */}
                  <div className="text-sm text-blue-300 mb-3 font-medium">
                    {Array.isArray(project.category) 
                      ? project.category.join(' + ') 
                      : project.category
                    }
                  </div>

                  {/* 설명 */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 태그들 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tag === '단독 진행' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                          tag === '공동 진행' ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30' :
                          tag === '국책과제' ? 'bg-green-500/20 text-green-300 border border-green-400/30' :
                          tag === 'ODM' ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30' :
                          tag === '양산' ? 'bg-red-500/20 text-red-300 border border-red-400/30' :
                          'bg-gray-500/20 text-gray-300 border border-gray-400/30'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 기술 스택 */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">기술 스택</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 주요 성과 & 특징 */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">주요 성과 & 특징</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-6">🏆</div>
                  <h3 className="text-xl font-bold text-white mb-4">국책과제 참여</h3>
                  <div className="text-lg font-bold text-green-300 mb-2">연구개발 사업 참여</div>
                  <p className="text-gray-300 text-sm">국가 주도 연구개발 사업에 참여하여<br />고급 기술력과 다양한 경험을 보유하고 있습니다</p>
                  <div className="mt-4 flex flex-wrap gap-1 justify-center">
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">레이더센서 활용 무선 조명 컨트롤</span>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">블록식 운송시스템</span>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">팔로잉 모빌리티</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-6">🏭</div>
                  <h3 className="text-xl font-bold text-white mb-4">상용화 경험</h3>
                  <div className="text-lg font-bold text-orange-300 mb-2">ODM & 대량 생산</div>
                  <p className="text-gray-300 text-sm">설계부터 대량 생산까지<br />실제 상용화 가능한 제품 개발 경험</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-300">설계</div>
                      <div className="text-xs text-gray-400">설계부터</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-300">양산</div>
                      <div className="text-xs text-gray-400">생산까지</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-300">출시</div>
                      <div className="text-xs text-gray-400">상용화</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl mb-6">🌐</div>
                  <h3 className="text-xl font-bold text-white mb-4">전문 영역</h3>
                  <div className="text-lg font-bold text-blue-300 mb-2">다양한 산업 경험</div>
                  <p className="text-gray-300 text-sm">의료, 광학, IoT, 교육 등<br />다양한 영역에서의 전문 경험</p>
                  <div className="mt-4 flex flex-wrap gap-1 justify-center">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">의료기기</span>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">광학검사</span>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">IoT 시스템</span>
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">교육 플랫폼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 협업 방식 */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">협업 방식</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🚀</div>
                  <h3 className="text-xl font-bold text-white">유연한 협업 방식</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-blue-300 font-medium text-sm mb-1">단독 진행</div>
                    <div className="text-gray-300 text-xs">전체 프로젝트를 직접 책임지고 수행</div>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-purple-300 font-medium text-sm mb-1">공동 진행</div>
                    <div className="text-gray-300 text-xs">고객과 함께 역할을 분담하여 진행</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-green-300 font-medium text-sm mb-1">턴키 솔루션</div>
                    <div className="text-gray-300 text-xs">아이디어부터 완성제품까지 통합 지원</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">💬</div>
                  <h3 className="text-xl font-bold text-white">체계적 소통</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-blue-300 font-medium text-sm">정기 진행 보고</div>
                      <div className="text-gray-300 text-xs">주간/월간 진행상황 공유 및 피드백</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-green-300 font-medium text-sm">실시간 상담</div>
                      <div className="text-gray-300 text-xs">전화/이메일/온라인 미팅 지원</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-purple-300 font-medium text-sm">상세 문서화</div>
                      <div className="text-gray-300 text-xs">기술 사양서, 매뉴얼, 소스코드 제공</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">📅</div>
                  <h3 className="text-xl font-bold text-white">체계적 개발</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-300 mb-1">전문 프로세스</div>
                    <div className="text-sm text-gray-300">체계적 개발 방법론 적용</div>
                  </div>
                  <div className="grid grid-cols-5 gap-1 text-xs text-gray-400">
                    <div className="text-center p-2 bg-blue-500/10 rounded">상담</div>
                    <div className="text-center p-2 bg-blue-500/10 rounded">설계</div>
                    <div className="text-center p-2 bg-blue-500/10 rounded">개발</div>
                    <div className="text-center p-2 bg-blue-500/10 rounded">테스트</div>
                    <div className="text-center p-2 bg-blue-500/10 rounded">완료</div>
                  </div>
                  <div className="w-full h-2 bg-gray-600 rounded-full">
                    <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4">명확한 마일스톤과 품질 검증을 통해 안정적인 프로젝트 진행을 보장합니다.</p>
              </div>
            </div>
          </div>

          {/* 문의 섹션 */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-xl rounded-3xl p-10 border border-gray-600/30 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">프로젝트 문의</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                비슷한 프로젝트 개발이나 기술 협업에 관심이 있으시다면
                <br />
                <span className="text-blue-300 font-semibold">언제든지 문의해 주세요.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 inline-block">
                  개발 문의하기
                </a>
                <a href="/contact/partnership" className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 inline-block">
                  협업 제안하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
