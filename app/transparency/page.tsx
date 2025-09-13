export default function TransparencyPage() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-100 min-h-screen py-12" suppressHydrationWarning={true}>
      <div className="container mx-auto px-4" suppressHydrationWarning={true}>
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-cyan-200 backdrop-blur-sm" suppressHydrationWarning={true}>
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
                🔍 Transparency Portal
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Access real-time information about government operations, budgets, contracts, 
                and public spending with complete transparency. Promoting accountability through open data and democratic oversight.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-cyan-700">₹47.2Cr</div>
                <div className="text-sm text-slate-600 font-semibold">💰 Total Budget</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-700">1,247</div>
                <div className="text-sm text-slate-600 font-semibold">📄 Active Contracts</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 13h10l-2-13m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-teal-700">₹38.9Cr</div>
                <div className="text-sm text-slate-600 font-semibold">📊 Funds Utilized</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-700">95%</div>
                <div className="text-sm text-slate-600 font-semibold">🎯 Transparency Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-10 mb-12 border border-cyan-200 backdrop-blur-sm" suppressHydrationWarning={true}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-slate-800">
                  📈 Recent Government Activities
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-black text-cyan-900 text-lg mb-2">💡 Budget Allocation for Education</h3>
                      <p className="text-cyan-700 text-sm font-semibold leading-relaxed">
                        ₹12.5 Crores allocated for primary education infrastructure development with complete transparency
                      </p>
                    </div>
                    <span className="text-xs text-cyan-600 font-bold bg-cyan-200 px-3 py-1 rounded-full">2 hours ago</span>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6 py-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-black text-emerald-900 text-lg mb-2">🛣️ Road Construction Contract Awarded</h3>
                      <p className="text-emerald-700 text-sm font-semibold leading-relaxed">
                        Highway expansion project contract worth ₹8.2 Crores awarded to ABC Construction through transparent bidding
                      </p>
                    </div>
                    <span className="text-xs text-emerald-600 font-bold bg-emerald-200 px-3 py-1 rounded-full">1 day ago</span>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6 py-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-black text-teal-900 text-lg mb-2">🏥 Healthcare Equipment Procurement</h3>
                      <p className="text-teal-700 text-sm font-semibold leading-relaxed">
                        Medical equipment worth ₹5.8 Crores procured for district hospitals with public procurement transparency
                      </p>
                    </div>
                    <span className="text-xs text-teal-600 font-bold bg-teal-200 px-3 py-1 rounded-full">3 days ago</span>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-black text-orange-900 text-lg mb-2">🚰 Public Works Department Update</h3>
                      <p className="text-orange-700 text-sm font-semibold leading-relaxed">
                        Water supply infrastructure project 78% completed ahead of schedule with full cost transparency
                      </p>
                    </div>
                    <span className="text-xs text-orange-600 font-bold bg-orange-200 px-3 py-1 rounded-full">1 week ago</span>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-4 px-8 rounded-2xl font-black text-lg hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                📊 View All Transparency Activities
              </button>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-cyan-200 backdrop-blur-sm" suppressHydrationWarning={true}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-slate-800">
                  💰 Budget Breakdown 2024-25
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-6 px-6 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-cyan-500 rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-white font-black text-lg">🎓</span>
                    </div>
                    <span className="font-black text-cyan-900 text-lg">Education Development</span>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-2xl text-cyan-900">₹15.2 Cr</div>
                    <div className="text-sm text-cyan-700 font-bold bg-cyan-200 px-3 py-1 rounded-full">32%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 px-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-white font-black text-lg">🏥</span>
                    </div>
                    <span className="font-black text-emerald-900 text-lg">Healthcare Services</span>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-2xl text-emerald-900">₹12.8 Cr</div>
                    <div className="text-sm text-emerald-700 font-bold bg-emerald-200 px-3 py-1 rounded-full">27%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 px-6 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-white font-black text-lg">🛣️</span>
                    </div>
                    <span className="font-black text-teal-900 text-lg">Infrastructure Projects</span>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-2xl text-teal-900">₹11.5 Cr</div>
                    <div className="text-sm text-teal-700 font-bold bg-teal-200 px-3 py-1 rounded-full">24%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 px-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-white font-black text-lg">🤝</span>
                    </div>
                    <span className="font-black text-blue-900 text-lg">Social Welfare Programs</span>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-2xl text-blue-900">₹5.2 Cr</div>
                    <div className="text-sm text-blue-700 font-bold bg-blue-200 px-3 py-1 rounded-full">11%</div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 px-6 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-white font-black text-lg">📊</span>
                    </div>
                    <span className="font-black text-indigo-900 text-lg">Others & Miscellaneous</span>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-2xl text-indigo-900">₹2.5 Cr</div>
                    <div className="text-sm text-indigo-700 font-bold bg-indigo-200 px-3 py-1 rounded-full">6%</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 bg-gradient-to-r from-emerald-50 via-cyan-50 to-teal-50 rounded-3xl border border-cyan-200 shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-black text-slate-800 mb-3">₹47.2 Cr</div>
                  <div className="text-xl font-bold text-slate-600 mb-2">💎 Total Transparent Budget</div>
                  <p className="text-sm text-slate-500 font-semibold">100% public accountability with real-time tracking & audit trails</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Quick Access */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-cyan-200 backdrop-blur-sm" suppressHydrationWarning={true}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-800">🚀 Quick Access Portal</h3>
              </div>
              
              <div className="space-y-4">
                <button className="w-full text-left p-5 rounded-2xl bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-cyan-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black">📊</span>
                    </div>
                    <div>
                      <div className="font-black text-cyan-900 text-lg">Budget Documents</div>
                      <div className="text-sm text-cyan-700 font-semibold">Annual & monthly budget transparency reports</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-emerald-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black">📋</span>
                    </div>
                    <div>
                      <div className="font-black text-emerald-900 text-lg">Public Contracts</div>
                      <div className="text-sm text-emerald-700 font-semibold">Active & completed contracts with full transparency</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-teal-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black">💸</span>
                    </div>
                    <div>
                      <div className="font-black text-teal-900 text-lg">Expenditure Reports</div>
                      <div className="text-sm text-teal-700 font-semibold">Detailed public spending reports & analytics</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-blue-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black">🔍</span>
                    </div>
                    <div>
                      <div className="font-black text-blue-900 text-lg">Audit Reports</div>
                      <div className="text-sm text-blue-700 font-semibold">Independent audit findings & compliance</div>
                    </div>
                  </div>
                </button>
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-4 px-6 rounded-2xl font-black text-lg hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                🔗 Access All Transparency Tools
              </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-cyan-200 backdrop-blur-sm" suppressHydrationWarning={true}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-800">🔍 Smart Search</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="🔍 Search contracts, budgets, transparency reports..."
                    className="w-full px-6 py-4 border-2 border-cyan-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:border-cyan-500 transition-all duration-300 bg-gradient-to-r from-cyan-50 to-teal-50 font-semibold text-slate-700 shadow-lg"
                  />
                </div>
                <div>
                  <select className="w-full px-6 py-4 border-2 border-teal-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-300 focus:border-teal-500 transition-all duration-300 bg-gradient-to-r from-teal-50 to-cyan-50 font-bold text-slate-700 shadow-lg">
                    <option>📊 All Categories</option>
                    <option>💰 Budget & Finance</option>
                    <option>📋 Public Contracts</option>
                    <option>💸 Expenditure Reports</option>
                    <option>🏗️ Infrastructure Projects</option>
                    <option>🔍 Audit Reports</option>
                  </select>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 px-6 rounded-2xl font-black text-lg hover:from-teal-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  🚀 Search Transparency Data
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-cyan-200 backdrop-blur-sm" suppressHydrationWarning={true}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-800">💬 Need Help?</h3>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-600 text-lg font-semibold leading-relaxed mb-4">
                  Can't find what you're looking for? Our transparency team is here to help you access public information.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl border border-cyan-200 shadow-lg">
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-cyan-900">📧 Email Support</div>
                    <div className="text-cyan-700 font-semibold">transparency@gov.in</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 shadow-lg">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-emerald-900">📞 Helpline</div>
                    <div className="text-emerald-700 font-semibold">1800-TRANSPARENCY</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-200 shadow-lg">
                  <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-teal-900">⏰ Office Hours</div>
                    <div className="text-teal-700 font-semibold">Mon-Fri: 9AM-6PM</div>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-4 px-6 rounded-2xl font-black text-lg hover:from-emerald-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                💬 Contact Transparency Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
