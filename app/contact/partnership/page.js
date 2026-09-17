'use client'
import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function Partnership() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    cooperationFields: [],
    projectScale: '',
    timeline: '',
    budget: '',
    projectDescription: '',
    planDocument: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
  const [emailjsLoaded, setEmailjsLoaded] = useState(false)

  // EmailJS 설정 (환경변수에서 가져옴)
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const cooperationAreas = [
    {
      title: '회로설계',
      icon: '⚡',
      description: 'PCB 설계부터 양산까지 전 과정 지원',
      services: ['회로 설계', '최적의 부품 선정', '다양한 개발 플랫폼 대응'],
      expertise: ['고속 신호 처리', 'RF 회로', '전원 회로', 'EMC/EMI 대응']
    },
    {
      title: '펌웨어개발',
      icon: '💻',
      description: '안정적이고 효율적인 임베디드 소프트웨어 개발',
      services: ['MCU 프로그래밍', 'RTOS 구현', '통신 프로토콜', '디바이스 드라이버', '성능 최적화'],
      expertise: ['STM32/ESP32', 'IoT 연결성', '무선 통신', '보안 구현']
    },
    {
      title: '아트웍',
      icon: '🎨',
      description: '기획안 중심의 PCB 디자인',
      services: ['PCB 디자인', '다층 보드 설계', '노이즈 저항', '고속통신'],
      expertise: ['PCB 3D 모델 제공', '사용성 테스트']
    }
  ]

  const handleChange = (e) => {
    if (e.target.name === 'cooperationFields') {
      const value = e.target.value
      const isChecked = e.target.checked
      
      setFormData(prev => ({
        ...prev,
        cooperationFields: isChecked 
          ? [...prev.cooperationFields, value]
          : prev.cooperationFields.filter(field => field !== value)
      }))
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const checkRateLimit = () => {
    const lastSubmit = localStorage.getItem('lastPartnershipSubmit')
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
      // 1. Rate Limiting 체크
      if (!checkRateLimit()) {
        alert('보안상 5분 후에 다시 시도해주세요.')
        setIsLoading(false)
        return
      }

      // 2. reCAPTCHA 검증
      if (!recaptchaLoaded) {
        alert('보안 모듈이 로딩 중입니다. 잠시 후 다시 시도해주세요.')
        setIsLoading(false)
        return
      }

      // 3. EmailJS 로딩 체크
      if (!emailjsLoaded) {
        alert('메일 전송 모듈이 로딩 중입니다. 잠시 후 다시 시도해주세요.')
        setIsLoading(false)
        return
      }

      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: 'partnership_form'
      })

      // 4. EmailJS로 메일 발송
      const templateParams = {
        name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        subject: `[기업 협업 문의] ${formData.companyName}`,
        message: `=== 기업 협업 문의서 ===

회사명: ${formData.companyName}
담당자: ${formData.contactName}
사업분야: ${formData.businessType}
연락처: ${formData.phone}
이메일: ${formData.email}

=== 협업 희망 분야 ===
${formData.cooperationFields.join(', ')}

=== 프로젝트 정보 ===
규모: ${formData.projectScale}
일정: ${formData.timeline}
예산: ${formData.budget}

=== 프로젝트 상세 설명 ===
${formData.projectDescription}

=== 기획안 문서 ===
${formData.planDocument ? formData.planDocument : '별도 공유 예정'}

---
SpokeHouse 기업 협업 시스템`,
        title: `기업 협업 - ${formData.companyName}`, // 템플릿의 {{title}} 변수
        reply_to: formData.email,
        'g-recaptcha-response': token
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // 5. 성공 처리
      alert('✅ 협업 문의가 성공적으로 전송되었습니다!\n기획안 검토 후 협업 방안을 제안드리겠습니다.')
      
      // Rate limiting을 위한 시간 저장
      localStorage.setItem('lastPartnershipSubmit', Date.now().toString())
      
      // 폼 초기화
      
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        businessType: '',
        cooperationFields: [],
        projectScale: '',
        timeline: '',
        budget: '',
        projectDescription: '',
        planDocument: ''
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
          setEmailjsLoaded(true)
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 relative overflow-hidden">
        {/* 기업용 배경 패턴 */}
        <div className="absolute inset-0">
          {/* 회로 패턴 */}
          <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 100 100">
            <defs>
              <pattern id="enterprise-circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="#3B82F6" opacity="0.6" />
                <circle cx="22" cy="22" r="1.5" fill="#6366F1" opacity="0.6" />
                <circle cx="12.5" cy="12.5" r="1" fill="#8B5CF6" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#enterprise-circuit)" />
          </svg>
          
          {/* 비즈니스 아이콘들 */}
          <div className="absolute top-10 left-10 text-2xl animate-float opacity-20" style={{animationDelay: '0s', animationDuration: '6s'}}>
            🏢
          </div>
          <div className="absolute top-1/4 right-20 text-xl animate-float opacity-15" style={{animationDelay: '1.5s', animationDuration: '5s'}}>
            🤝
          </div>
          <div className="absolute top-1/2 left-1/4 text-lg animate-float opacity-20" style={{animationDelay: '3s', animationDuration: '7s'}}>
            💼
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-xl animate-float opacity-15" style={{animationDelay: '4.5s', animationDuration: '6s'}}>
            🎯
          </div>
          <div className="absolute top-1/3 left-1/2 text-lg animate-float opacity-20" style={{animationDelay: '2s', animationDuration: '5.5s'}}>
            ⚡
          </div>
          <div className="absolute bottom-1/4 left-20 text-xl animate-float opacity-15" style={{animationDelay: '5s', animationDuration: '6.5s'}}>
            💡
          </div>
          <div className="absolute top-20 right-1/4 text-lg animate-float opacity-20" style={{animationDelay: '1s', animationDuration: '5s'}}>
            📈
          </div>
          <div className="absolute bottom-20 right-10 text-xl animate-float opacity-15" style={{animationDelay: '3.5s', animationDuration: '6s'}}>
            🔍
          </div>
        </div>

        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            {/* 헤더 */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  기업 협업 문의
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                혁신적인 제품 기획안을 보유한 기업과 함께 
                <span className="text-blue-300 font-semibold"> 회로설계, 펌웨어개발, 아트웍 </span>
                전 영역에서 기술 지원 및 협업을 제공합니다.
                <br />
                <span className="text-purple-300 font-semibold">기획안을 공유해주시면 맞춤형 협업 방안을 제안드립니다.</span>
              </p>
            </div>

            {/* 협업 분야 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">협업 가능 분야</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {cooperationAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{area.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                      <p className="text-gray-300">{area.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-300 mb-3">제공 서비스</h4>
                      <ul className="space-y-2">
                        {area.services.map((service, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">전문 영역</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.expertise.map((skill, idx) => (
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

            {/* 협업 프로세스 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">협업 프로세스</h2>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: '01', title: '기획안 공유', desc: '제품 아이디어 및 요구사항 전달', icon: '📋' },
                  { step: '02', title: '기술 검토', desc: '실현 가능성 및 기술 난이도 분석', icon: '🔍' },
                  { step: '03', title: '협업 제안', desc: '맞춤형 협업 방안 및 일정 제안', icon: '🤝' },
                  { step: '04', title: '프로젝트 시작', desc: '역할 분담 후 개발 착수', icon: '🚀' },
                  { step: '05', title: '완성 및 출시', desc: '테스트 완료 후 제품 출시', icon: '🎯' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <div className="text-sm text-blue-300 font-bold mb-1">{item.step}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 협업 문의 폼 */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">협업 문의하기</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 기업 정보 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-gray-200">회사명 *</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                        placeholder="(주)테크컴퍼니"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium mb-2 text-gray-200">사업 분야</label>
                      <input
                        type="text"
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                        placeholder="IoT, 의료기기, 스마트홈 등"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium mb-2 text-gray-200">담당자명 *</label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
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
                        placeholder="contact@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-200">연락처</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="02-1234-5678"
                    />
                  </div>

                  {/* 협업 분야 선택 */}
                  <div>
                    <label className="block text-sm font-medium mb-4 text-gray-200">협업 희망 분야 * (중복 선택 가능)</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {['회로설계', '펌웨어개발', '아트웍'].map((field) => (
                        <label key={field} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="cooperationFields"
                            value={field}
                            checked={formData.cooperationFields.includes(field)}
                            onChange={handleChange}
                            className="w-5 h-5 text-blue-500 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                          />
                          <span className="text-white font-medium">{field}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 프로젝트 정보 */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="projectScale" className="block text-sm font-medium mb-2 text-gray-200">프로젝트 규모</label>
                      <select
                        id="projectScale"
                        name="projectScale"
                        value={formData.projectScale}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="" className="text-gray-800">선택해주세요</option>
                        <option value="소규모 (프로토타입)" className="text-gray-800">소규모 (프로토타입)</option>
                        <option value="중간규모 (소량생산)" className="text-gray-800">중간규모 (소량생산)</option>
                        <option value="대규모 (대량생산)" className="text-gray-800">대규모 (대량생산)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2 text-gray-200">희망 일정</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="" className="text-gray-800">선택해주세요</option>
                        <option value="1-3개월" className="text-gray-800">1-3개월</option>
                        <option value="3-6개월" className="text-gray-800">3-6개월</option>
                        <option value="6개월-1년" className="text-gray-800">6개월-1년</option>
                        <option value="1년 이상" className="text-gray-800">1년 이상</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2 text-gray-200">예산 범위</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="" className="text-gray-800">선택해주세요</option>
                        <option value="1천만원 미만" className="text-gray-800">1천만원 미만</option>
                        <option value="1천만원-5천만원" className="text-gray-800">1천만원-5천만원</option>
                        <option value="5천만원-1억원" className="text-gray-800">5천만원-1억원</option>
                        <option value="1억원 이상" className="text-gray-800">1억원 이상</option>
                        <option value="협의 후 결정" className="text-gray-800">협의 후 결정</option>
                      </select>
                    </div>
                  </div>

                  {/* 프로젝트 설명 */}
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium mb-2 text-gray-200">프로젝트 상세 설명 *</label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="개발하고자 하는 제품의 기능, 목적, 특징 등을 상세히 설명해주세요."
                    />
                  </div>

                  {/* 기획안 문서 */}
                  <div>
                    <label htmlFor="planDocument" className="block text-sm font-medium mb-2 text-gray-200">기획안 문서 공유 방법</label>
                    <textarea
                      id="planDocument"
                      name="planDocument"
                      value={formData.planDocument}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="Google Drive 링크, 이메일 첨부, 별도 미팅 등 기획안 공유 방법을 알려주세요."
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
                        협업 문의 전송 중...
                      </div>
                    ) : (
                      '🚀 협업 문의 보내기'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-xl rounded-3xl p-10 border border-gray-600/30 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Contact Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                    <h4 className="font-bold text-blue-300 text-xl mb-4 flex items-center">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                      직접 연락
                    </h4>
                    <div className="space-y-3 text-gray-300">
                      <p className="flex items-center">
                        <span className="text-blue-400 mr-3">📧</span>
                        <span className="text-blue-300 font-medium">leemaengho@spokehouse.co.kr</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-blue-400 mr-3">📞</span>
                        <span className="text-blue-300 font-medium">010-4143-7807</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-blue-400 mr-3">🏢</span>
                        <span className="text-sm">경기도 오산시 경기대로761번길 30<br />현대프리미어캠퍼스 A동 1217호</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                    <h4 className="font-bold text-purple-300 text-xl mb-4 flex items-center">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                      협업 프로세스
                    </h4>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <p className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-0.5">•</span>
                        <span>기획안 검토 후 1-2일 내 답변</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-0.5">•</span>
                        <span>맞춤형 협업 방안 제안</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-0.5">•</span>
                        <span>단계별 진행 상황 공유</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-0.5">•</span>
                        <span>전용 프로젝트 매니저 배정</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-400/20">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    혁신적인 아이디어를 현실로 만들어보세요. 
                    <br className="hidden md:block" />
                    <span className="text-blue-300 font-semibold">SpokeHouse가 기술적 전문성으로 여러분의 비전을 실현해드립니다.</span>
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
