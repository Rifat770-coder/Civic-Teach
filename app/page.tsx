import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]" suppressHydrationWarning={true}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3E2D] via-[#2A5A3F] to-[#1E3E2D] text-[#FFFFFF] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10" suppressHydrationWarning={true}></div>
        <div className="container mx-auto px-4 py-24 relative z-10" suppressHydrationWarning={true}>
          <div className="max-w-5xl mx-auto text-center" suppressHydrationWarning={true}>
            <div className="mb-8" suppressHydrationWarning={true}>
              <span className="inline-block px-4 py-2 bg-[#00A859] text-[#FFFFFF] rounded-full text-sm font-bold mb-6">
                🏛️ Legal Compliance Platform
              </span>
            </div>
            <h1 className="text-6xl font-black mb-8 leading-tight">
              Building a<br/>
              <span className="text-[#00A859]">Corruption-Free</span><br/>
              Legal Future
            </h1>
            <p className="text-xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive gateway to transparent governance, legal accountability, and digital public services. 
              Join us in creating a more transparent, legally compliant, and efficient government system.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center" suppressHydrationWarning={true}>
              <Link 
                href="/transparency" 
                className="bg-[#00A859] text-[#FFFFFF] px-10 py-4 rounded-md font-black hover:bg-[#007A45] hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                🔍 Explore Transparency Portal
              </Link>
              <Link 
                href="/report" 
                className="border-2 border-[#00A859] text-[#00A859] bg-[#FFFFFF] px-10 py-4 rounded-md font-black hover:bg-[#00A859] hover:text-[#FFFFFF] hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                📢 Report Legal Issues
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00A859] rounded-full opacity-10 animate-pulse" suppressHydrationWarning={true}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#00A859] rounded-full opacity-10 animate-pulse delay-1000" suppressHydrationWarning={true}></div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#F9F9F9] relative">
        <div className="container mx-auto px-4" suppressHydrationWarning={true}>
          <div className="text-center mb-16" suppressHydrationWarning={true}>
            <h2 className="text-4xl font-black text-[#000000] mb-4">
              Legal Impact <span className="text-[#00A859]">Statistics</span>
            </h2>
            <p className="text-lg text-[#555555] max-w-2xl mx-auto">
              Real-time data showcasing our commitment to legal transparency and accountability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" suppressHydrationWarning={true}>
            <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border-l-4 border-[#00A859]" suppressHydrationWarning={true}>
              <div className="text-5xl font-black text-[#1E3E2D] mb-3" suppressHydrationWarning={true}>2,847</div>
              <div className="text-[#555555] font-semibold text-lg" suppressHydrationWarning={true}>Legal Cases Processed</div>
              <div className="text-[#00A859] text-sm font-bold mt-2" suppressHydrationWarning={true}>↑ 23% this quarter</div>
            </div>
            <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border-l-4 border-[#00A859]" suppressHydrationWarning={true}>
              <div className="text-5xl font-black text-[#1E3E2D] mb-3" suppressHydrationWarning={true}>95%</div>
              <div className="text-[#555555] font-semibold text-lg" suppressHydrationWarning={true}>Compliance Score</div>
              <div className="text-[#00A859] text-sm font-bold mt-2" suppressHydrationWarning={true}>↑ 8% improvement</div>
            </div>
            <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border-l-4 border-[#00A859]" suppressHydrationWarning={true}>
              <div className="text-5xl font-black text-[#1E3E2D] mb-3" suppressHydrationWarning={true}>₹47.2Cr</div>
              <div className="text-[#555555] font-semibold text-lg" suppressHydrationWarning={true}>Legal Funds Tracked</div>
              <div className="text-[#00A859] text-sm font-bold mt-2" suppressHydrationWarning={true}>100% transparent</div>
            </div>
            <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border-l-4 border-[#00A859]" suppressHydrationWarning={true}>
              <div className="text-5xl font-black text-[#1E3E2D] mb-3" suppressHydrationWarning={true}>156</div>
              <div className="text-[#555555] font-semibold text-lg" suppressHydrationWarning={true}>Cases Resolved</div>
              <div className="text-[#00A859] text-sm font-bold mt-2" suppressHydrationWarning={true}>↑ 15% faster resolution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4" suppressHydrationWarning={true}>
          <div className="text-center mb-16" suppressHydrationWarning={true}>
            <h2 className="text-4xl font-black text-[#000000] mb-6">
              Digital <span className="text-[#00A859]">Legal</span> Governance Features
            </h2>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal tools and services designed to enhance transparency, 
              legal accountability, and citizen engagement in governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" suppressHydrationWarning={true}>
            {/* Legal Transparency Portal */}
            <div className="bg-[#F9F9F9] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#00A859]" suppressHydrationWarning={true}>
              <div className="w-16 h-16 bg-[#00A859] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" suppressHydrationWarning={true}>
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#000000]">Legal Transparency Portal</h3>
              <p className="text-[#555555] mb-6 leading-relaxed">
                Access real-time information about government budgets, legal contracts, 
                court decisions, and public spending with full legal documentation.
              </p>
              <Link href="/transparency" className="text-[#00A859] font-bold hover:text-[#007A45] flex items-center">
                Access Portal →
              </Link>
            </div>

            {/* Legal Issue Reporting */}
            <div className="bg-[#F9F9F9] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#00A859]" suppressHydrationWarning={true}>
              <div className="w-16 h-16 bg-[#000000] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" suppressHydrationWarning={true}>
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#000000]">Legal Issue Reporting</h3>
              <p className="text-[#555555] mb-6 leading-relaxed">
                Secure and confidential legal reporting system for corruption cases 
                with professional legal tracking and follow-up capabilities.
              </p>
              <Link href="/report" className="text-[#00A859] font-bold hover:text-[#007A45] flex items-center">
                File Report →
              </Link>
            </div>

            {/* Legal Analytics Dashboard */}
            <div className="bg-[#F9F9F9] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#00A859]" suppressHydrationWarning={true}>
              <div className="w-16 h-16 bg-[#1E3E2D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" suppressHydrationWarning={true}>
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#000000]">Legal Analytics Dashboard</h3>
              <p className="text-[#555555] mb-6 leading-relaxed">
                Comprehensive legal data analytics and insights with real-time 
                performance metrics and compliance tracking.
              </p>
              <Link href="/dashboard" className="text-[#00A859] font-bold hover:text-[#007A45] flex items-center">
                View Analytics →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1E3E2D] text-[#FFFFFF] py-20">
        <div className="container mx-auto px-4 text-center" suppressHydrationWarning={true}>
          <h2 className="text-4xl font-black mb-6">
            Join the Movement for <span className="text-[#00A859]">Legal Transparency</span>
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-200">
            Be part of building a corruption-free future with legal compliance at its foundation. 
            Your participation makes governance more transparent and accountable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" suppressHydrationWarning={true}>
            <Link
              href="/register"
              className="bg-[#00A859] text-[#FFFFFF] px-10 py-4 rounded-md font-black hover:bg-[#007A45] hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Register as Legal Partner
            </Link>
            <Link
              href="/transparency"
              className="border-2 border-[#00A859] text-[#00A859] bg-[#FFFFFF] px-10 py-4 rounded-md font-black hover:bg-[#00A859] hover:text-[#FFFFFF] hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Explore Legal Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}