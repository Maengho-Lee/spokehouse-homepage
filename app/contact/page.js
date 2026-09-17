'use client'
import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  // OpenAI Ads 픽셀 전환 이벤트 - /contact 페이지 방문 시 발화
  useEffect(() => {
    window.oaiq?.('measure', 'lead_created', {
      type: 'customer_action'
    })
  }, [])

  // EmailJS 설정 (환경변수에서 가져옴)
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Rate Limiting 체크 (같은 IP에서 연속 제출 방지)
  const checkRateLimit = () => {
    const lastSubmit = localStorage.getItem('lastContactSubmit')
    const now = Date.now()
    const fiveMinutes = 5 * 60 * 1000 // 5분
    
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

      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: 'contact_form'
      })

      // 3. EmailJS로 메일 발송
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        title: formData.subject, // 템플릿의 {{title}} 변수
        reply_to: formData.email,
        'g-recaptcha-response': token
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // 4. 성공 처리
      alert('✅ 문의가 성공적으로 전송되었습니다!\n빠른 시일 내에 답변드리겠습니다.')

      // Rate limiting을 위한 시간 저장
      localStorage.setItem('lastContactSubmit', Date.now().toString())
      
      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
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
      {/* reCAPTCHA v3 스크립트 */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        onLoad={() => setRecaptchaLoaded(true)}
      />
      
      {/* EmailJS 스크립트 */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        onLoad={() => {
          window.emailjs.init(EMAILJS_PUBLIC_KEY)
        }}
      />
      
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">개발 문의하기</h1>
          <p className="text-lg text-gray-600">
            전자기기 개발 관련 문의사항이 있으시면 언제든지 연락해 주세요. 전문 엔지니어가 도와드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">전화번호</h3>
                  <p className="text-gray-600">010-4143-7807</p>
                  <p className="text-sm text-gray-500">평일 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">이메일</h3>
                  <p className="text-gray-600">leemaengho@spokehouse.co.kr</p>
                  <p className="text-sm text-gray-500">기술 지원 24시간 접수</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">주소</h3>
                  <p className="text-gray-600">경기도 오산시 경기대로761번길 30<br />현대프리미어캠퍼스 A동 1217호</p>
                </div>
              </div>
            </div>

            {/* 운영시간 */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">운영시간</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>평일</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span>09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일/공휴일</span>
                  <span>휴무</span>
                </div>
              </div>
            </div>
          </div>

          {/* 문의 폼 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">온라인 문의</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">이메일 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">문의 제목 *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">문의 내용 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="문의하실 내용을 자세히 적어주세요."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-md font-semibold transition ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    전송 중...
                  </div>
                ) : (
                  '🚀 문의 보내기'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}