export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SpokeHouse</h3>
            <p className="text-gray-300">
              고객의 비즈니스 성장을 위한 혁신적인 솔루션을 제공하는 회사입니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <p className="text-gray-300">전화: 010-4143-7807</p>
            <p className="text-gray-300">이메일: leemaengho@spokehouse.co.kr</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">주소</h3>
            <p className="text-gray-300">
              경기도 광명시 범안로996번길 6<br />
              광명티아모IT타워 918호 (주)스포크하우스
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© 2025 SpokeHouse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}