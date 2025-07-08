'use client'
import { useState } from 'react'
import Script from 'next/script'

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    field: '',
    experience: '',
    portfolio: '',
    introduction: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  // EmailJS 설정 (환경변수에서 가져옴)
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const freelanceFields = [
    {
      title: '회로설계',
      icon: '⚡',
      description: '회로도 작성, 부품 선정',
      requirements: ['Altium Designer/KiCad/EasyEDA', 'PCB 설계 경험 2년+', '고속신호/RF 설계 우대', '전력전자 설계 우대'],
      skills: ['Altium Designer', 'KiCad', 'EasyEDA' , 'Signal Integrity']
    },
    {
      title: '펌웨어개발',
      icon: '💻',
      description: '임베디드 소프트웨어 개발',
      requirements: ['C/C++ 프로그래밍 숙련', 'MCU 개발 경험 2년+', 'RTOS 경험 우대'],
      skills: ['C/C++', 'STM32', 'ESP32', 'FreeRTOS', 'Arduino']
    },
    {
      title: '아트웍',
      icon: '🎨',
      description: 'PCB 디자인',
      requirements: ['디자인 툴 숙련', '포트폴리오 필요', '다층 보드 설계 경험 우대'],
      skills: ['EasyEDA', 'KiCad', 'Altium', '3D Modeling']
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const checkRateLimit = () => {
    const lastSubmit = localStorage.getItem('lastCareerSubmit')
    const now = Date.now()
    const fiveMinutes = 5 * 60 * 1000
    
    if (lastSubmit && (now - parseInt(lastSubmit)) < fiveMinutes) {
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (!checkRateLimit()) {
        alert('보안상 5분 후에 다시 시도해주세요.')
        setIsLoading(false)
        return
      }

      if (!recaptchaLoaded) {
        alert('보안 모듈이 로딩 중입니다. 잠시 후 다시 시도해주세요.')
        setIsLoading(false)
        return
      }

      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: 'career_form'
      })

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `[프리랜서 지원] ${formData.field} - ${formData.name}`,
        message: `=== 프리랜서 지원서 ===
        
분야: ${formData.field}
경력: ${formData.experience}
포트폴리오 URL: ${formData.portfolio}

자기소개:
${formData.introduction}

연락처: ${formData.phone}
이메일: ${formData.email}`,
        title: `프리랜서 지원 - ${formData.field}`,
        reply_to: formData.email,
        'g-recaptcha-response': token
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      alert('✅ 지원서가 성공적으로 전송되었습니다!\n포트폴리오 검토 후 연락드리겠습니다.')
      
      localStorage.setItem('lastCareerSubmit', Date.now().toString())
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        field: '',
        experience: '',
        portfolio: '',
        introduction: ''
      })

    } catch (error) {
      console.error('Email send error:', error)
      alert('❌ 전송 중 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Scripts */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        onLoad={() => setRecaptchaLoaded(true)}
      />
      
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        onLoad={() => {
          window.emailjs.init(EMAILJS_PUBLIC_KEY)
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              ⭐
            </div>
          ))}
        </div>

        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            {/* 헤더 */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  엔지니어 모집
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                SpokeHouse와 함께 혁신적인 전자기기 개발 프로젝트에 참여하실 전문 엔지니어를 모십니다.
                <br />
                <span className="text-blue-300 font-semibold">포트폴리오 검토 후 개별 연락드립니다.</span>
              </p>
            </div>

            {/* 모집 분야 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">모집 분야</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {freelanceFields.map((field, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{field.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{field.title}</h3>
                      <p className="text-gray-300">{field.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-300 mb-3">필수 요구사항</h4>
                      <ul className="space-y-2">
                        {field.requirements.map((req, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">기술 스택</h4>
                      <div className="flex flex-wrap gap-2">
                        {field.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-white border border-blue-400/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 지원 절차 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">지원 절차</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: '지원서 작성', desc: '아래 양식에 정보 입력' },
                  { step: '02', title: '포트폴리오 제출', desc: '관련 작업물 URL 첨부' },
                  { step: '03', title: '서류 검토', desc: '보유 기술 검토' },
                  { step: '04', title: '개별 연락', desc: '적합시 프로젝트 협의' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 지원 폼 */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">엔지니어 지원하기</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">이름 *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">이메일 *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-200">연락처</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                        placeholder="010-1234-5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="field" className="block text-sm font-medium mb-2 text-gray-200">지원 분야 *</label>
                      <select
                        id="field"
                        name="field"
                        value={formData.field}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="" className="text-gray-800">분야를 선택해주세요</option>
                        <option value="회로설계" className="text-gray-800">회로설계</option>
                        <option value="펌웨어개발" className="text-gray-800">펌웨어개발</option>
                        <option value="아트웍" className="text-gray-800">아트웍</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-2 text-gray-200">경력 사항 *</label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="예: 회로설계 3년, STM32 개발 2년 등"
                    />
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium mb-2 text-gray-200">포트폴리오 URL *</label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="https://github.com/username 또는 개인 포트폴리오 사이트"
                    />
                  </div>

                  <div>
                    <label htmlFor="introduction" className="block text-sm font-medium mb-2 text-gray-200">자기소개 및 지원동기 *</label>
                    <textarea
                      id="introduction"
                      name="introduction"
                      value={formData.introduction}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="프로젝트 경험, 기술 스택, 지원동기 등을 자유롭게 작성해주세요."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105'
                    } text-white shadow-xl`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        지원서 전송 중...
                      </div>
                    ) : (
                      '🚀 지원서 제출하기'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">문의사항</h3>
                <p className="text-gray-300 mb-4">
                  엔지니어 모집에 대한 추가 문의사항이 있으시면 언제든지 연락해주세요.
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>📧 <span className="text-blue-300">leemaengho@spokehouse.co.kr</span></p>
                  <p>📞 <span className="text-blue-300">010-4143-7807</span></p>
                  <p className="text-sm text-gray-400 mt-4">
                    * 포트폴리오 검토 후 신규 프로젝트 진행에 필요한 기술 내용에 맞춰 개별 연락드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
