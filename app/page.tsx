import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-cny-red to-cny-dark-red text-white py-12 px-4 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            2026 Zhejiang University Alumni Association
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Greater Washington DC Chapter
          </h2>
          <h3 className="text-xl md:text-2xl mb-4">Chinese New Year Festival</h3>
          <p className="text-lg italic text-amber-200">
            "Celebrating Culture, Community, and the Year of the Horse"
          </p>
        </div>
      </header>

      {/* Prominent Donate Button */}
      <div className="bg-cny-gold py-6 px-4 text-center shadow-md">
        <Link
          href="/fundraising"
          className="inline-block bg-white text-cny-red px-8 py-4 rounded-full text-xl font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg"
        >
          👉 Support the Festival – Donate Now
        </Link>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Agenda Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-cny-red mb-6 border-b-4 border-cny-gold pb-2">
            Festival Program
          </h2>

          <div className="space-y-6">
            {/* Opening Program */}
            <div className="border-l-4 border-cny-gold pl-6">
              <h3 className="text-xl font-semibold text-cny-dark-red mb-3">
                Opening Program
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>《鼓动天地》 — 大华府腰鼓队</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>开门红抽奖</span>
                </li>
              </ul>
            </div>

            {/* Performance Block 1 */}
            <div className="border-l-4 border-cny-red pl-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>男声独唱《我爱你中国》 — 余炫强</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>民族舞《子君书》 — Jennifer Zhang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>器乐演唱《浮光》《如愿》 — Be Our Own Light (BOOL) 乐队</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>舞蹈《醉清波》 — Olivia Wu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>女声独唱《世界属于我的》 — 徐张弛</span>
                </li>
              </ul>
            </div>

            {/* Game */}
            <div className="border-l-4 border-cny-gold pl-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span className="font-semibold text-cny-red">游戏抽奖</span>
                </li>
              </ul>
            </div>

            {/* Performance Block 2 */}
            <div className="border-l-4 border-cny-red pl-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>维吾尔族舞《一杯美酒》 — 亿舞社</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>男声独唱《但愿人长久》 — 吴梓廷</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>双人舞《芒种》 — 梁帆、乔桥</span>
                </li>
              </ul>
            </div>

            {/* Performance Block 3 */}
            <div className="border-l-4 border-cny-gold pl-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>
                    乐队演唱《曾经的你》《像风一样自由》 — Sounds of the Seasons (SOS) 乐队
                  </span>
                </li>
              </ul>
            </div>

            {/* Final Draw */}
            <div className="border-l-4 border-cny-red pl-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span className="font-semibold text-cny-red">抽奖</span>
                </li>
              </ul>
            </div>

            {/* Closing */}
            <div className="border-l-4 border-cny-gold pl-6">
              <h3 className="text-xl font-semibold text-cny-dark-red mb-3">
                Closing Performance
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cny-gold mr-2">•</span>
                  <span>合唱《平凡之路》 — 大华府浙江大学校友会合唱团</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mid-page Fundraising CTA */}
        <div className="bg-gradient-to-r from-cny-red to-cny-dark-red text-white rounded-lg shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Help Make This Festival Possible</h3>
          <p className="mb-6 text-lg">
            Your generous support helps us celebrate our culture and community
          </p>
          <Link
            href="/fundraising"
            className="inline-block bg-cny-gold text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-amber-600 transition-all transform hover:scale-105"
          >
            View Fundraising Progress
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cny-dark-red to-cny-red text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/fundraising"
            className="inline-block bg-cny-gold text-white px-6 py-3 rounded-full font-bold hover:bg-amber-600 transition-all mb-4"
          >
            Support the Festival
          </Link>
          <p className="text-sm text-amber-200 mt-4">
            © 2026 Zhejiang University Alumni Association, Greater Washington DC Chapter
          </p>
        </div>
      </footer>
    </div>
  );
}
