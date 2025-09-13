export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 min-h-screen py-12" suppressHydrationWarning={true}>
      <div className="container mx-auto px-4" suppressHydrationWarning={true}>
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-orange-200 backdrop-blur-sm" suppressHydrationWarning={true}>
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h1 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
                🚀 Digital Public Services Hub
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Access all government services digitally with lightning-fast efficiency, complete transparency, and unwavering accountability. 
                Apply for documents, pay bills, and track applications with cutting-edge technology at your fingertips.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-700">147</div>
                <div className="text-sm text-slate-600 font-semibold">🚀 Available Services</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-700">98.7%</div>
                <div className="text-sm text-slate-600 font-semibold">⚡ Digital Success Rate</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-2xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-700">2.3M</div>
                <div className="text-sm text-slate-600 font-semibold">📊 Applications Processed</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-2xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-red-700">24/7</div>
                <div className="text-sm text-slate-600 font-semibold">🌟 Service Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Identity & Citizenship */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-3xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">🆔 Identity & Citizenship</h3>
            <p className="text-slate-600 mb-6 font-semibold">Advanced digital identity solutions for modern citizens</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-orange-600 hover:text-orange-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:bg-orange-600"></span>
                🛂 Passport Application & Renewal
              </a>
              <a href="#" className="flex items-center text-orange-600 hover:text-orange-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:bg-orange-600"></span>
                📱 Aadhaar Digital Services
              </a>
              <a href="#" className="flex items-center text-orange-600 hover:text-orange-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:bg-orange-600"></span>
                🗳️ Voter ID Card Services
              </a>
              <a href="#" className="flex items-center text-orange-600 hover:text-orange-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:bg-orange-600"></span>
                📄 Birth Certificate Portal
              </a>
            </div>
          </div>

          {/* Property & Land */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-3xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform rotate-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">🏘️ Property & Land Registry</h3>
            <p className="text-slate-600 mb-6 font-semibold">Digital property management with blockchain security</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-amber-600 hover:text-amber-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:bg-amber-600"></span>
                🏠 Property Registration Portal
              </a>
              <a href="#" className="flex items-center text-amber-600 hover:text-amber-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:bg-amber-600"></span>
                📋 Digital Land Records
              </a>
              <a href="#" className="flex items-center text-amber-600 hover:text-amber-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:bg-amber-600"></span>
                🔄 Mutation Services Online
              </a>
              <a href="#" className="flex items-center text-amber-600 hover:text-amber-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:bg-amber-600"></span>
                💰 Property Tax Gateway
              </a>
            </div>
          </div>

          {/* Business & Trade */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-3xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0h2m-2 0h-2m-8 0H4m4 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">💼 Business & Trade Hub</h3>
            <p className="text-slate-600 mb-6 font-semibold">Comprehensive business solutions for entrepreneurs</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-yellow-600 hover:text-yellow-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600"></span>
                🚀 Business Registration Express
              </a>
              <a href="#" className="flex items-center text-yellow-600 hover:text-yellow-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600"></span>
                📜 Trade License Portal
              </a>
              <a href="#" className="flex items-center text-yellow-600 hover:text-yellow-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600"></span>
                🌐 Import/Export License
              </a>
              <a href="#" className="flex items-center text-yellow-600 hover:text-yellow-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600"></span>
                📊 GST Registration Suite
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-3xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform rotate-12">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">🎓 Education Excellence</h3>
            <p className="text-slate-600 mb-6 font-semibold">Empowering education through digital innovation</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-red-600 hover:text-red-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600"></span>
                🏫 School Admission Portal
              </a>
              <a href="#" className="flex items-center text-red-600 hover:text-red-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600"></span>
                💡 Scholarship Applications
              </a>
              <a href="#" className="flex items-center text-red-600 hover:text-red-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600"></span>
                ✅ Certificate Verification
              </a>
              <a href="#" className="flex items-center text-red-600 hover:text-red-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600"></span>
                🎯 Educational Loans Hub
              </a>
            </div>
          </div>

          {/* Healthcare */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-3xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-12">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">🏥 Healthcare Services</h3>
            <p className="text-slate-600 mb-6 font-semibold">Digital health solutions for better care delivery</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-pink-600 hover:text-pink-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600"></span>
                💳 Health Card Registration
              </a>
              <a href="#" className="flex items-center text-pink-600 hover:text-pink-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600"></span>
                📅 Hospital Appointment System
              </a>
              <a href="#" className="flex items-center text-pink-600 hover:text-pink-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600"></span>
                💊 Medical Reimbursement
              </a>
              <a href="#" className="flex items-center text-pink-600 hover:text-pink-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600"></span>
                💉 Vaccination Records Portal
              </a>
            </div>
          </div>

          {/* Transport */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-3xl transform hover:scale-105" suppressHydrationWarning={true}>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform rotate-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">🚗 Transport Solutions</h3>
            <p className="text-slate-600 mb-6 font-semibold">Smart transportation services for modern mobility</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-indigo-600"></span>
                🪪 Driving License Services
              </a>
              <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-indigo-600"></span>
                🚙 Vehicle Registration Portal
              </a>
              <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-indigo-600"></span>
                📋 Transport Permit System
              </a>
              <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700 font-bold transition-colors group">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-indigo-600"></span>
                💳 Traffic Challan Payment
              </a>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 mb-12 border border-orange-200 backdrop-blur-sm" suppressHydrationWarning={true}>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-black text-slate-800 mb-4">⭐ Most Popular Services</h2>
            <p className="text-lg text-slate-600 font-semibold">Quick access to our most requested digital services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl hover:from-orange-100 hover:to-amber-100 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-2xl border border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-3">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0" />
                </svg>
              </div>
              <h3 className="font-black text-slate-800 mb-3 text-xl">🛂 Passport Application</h3>
              <p className="text-sm text-slate-600 font-semibold">Apply for new passport or instant renewal with express processing</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl hover:from-amber-100 hover:to-yellow-100 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-2xl border border-amber-200">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform -rotate-3">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-black text-slate-800 mb-3 text-xl">🏠 Property Registration</h3>
              <p className="text-sm text-slate-600 font-semibold">Register property transactions with blockchain security</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl hover:from-yellow-100 hover:to-orange-100 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-2xl border border-yellow-200">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-black text-slate-800 mb-3 text-xl">🪪 Driving License</h3>
              <p className="text-sm text-slate-600 font-semibold">Apply for or renew driving license with AI verification</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl hover:from-red-100 hover:to-pink-100 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-2xl border border-red-200">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform -rotate-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0h2m-2 0h-2m-8 0H4m4 0H6" />
                </svg>
              </div>
              <h3 className="font-black text-slate-800 mb-3 text-xl">💼 Business License</h3>
              <p className="text-sm text-slate-600 font-semibold">Register your business online with instant approval</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 px-10 rounded-2xl font-black text-lg hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              🚀 Explore All 147 Services
            </button>
          </div>
        </div>

        {/* Application Tracker */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-orange-200 backdrop-blur-sm" suppressHydrationWarning={true}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-slate-800">🔍 Track Your Application</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black text-slate-700 mb-3">
                  📋 Application ID or Reference Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your application ID (e.g., APP-2024-123456)"
                  className="w-full px-6 py-4 border-2 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all duration-300 bg-gradient-to-r from-orange-50 to-amber-50 font-semibold text-slate-700 shadow-lg"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 px-6 rounded-2xl font-black text-lg hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                🚀 Track Application Status
              </button>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-orange-200 shadow-lg">
              <h3 className="font-black text-slate-800 mb-6 text-xl">📊 Sample Tracking Status</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-xl shadow-md">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mr-4 shadow-lg"></div>
                  <span className="text-sm font-bold text-slate-700">✅ Application Submitted Successfully</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-xl shadow-md">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mr-4 shadow-lg"></div>
                  <span className="text-sm font-bold text-slate-700">🔍 Document Verification Complete</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-xl shadow-md">
                  <div className="w-4 h-4 bg-amber-500 rounded-full mr-4 shadow-lg animate-pulse"></div>
                  <span className="text-sm font-bold text-slate-700">⏳ Under Review (Processing)</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-xl shadow-md opacity-50">
                  <div className="w-4 h-4 bg-slate-300 rounded-full mr-4"></div>
                  <span className="text-sm font-semibold text-slate-500">⏰ Pending Approval</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-amber-200 backdrop-blur-sm" suppressHydrationWarning={true}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-slate-800">💡 Service Information</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-orange-900 text-lg">🚀 Digital-First Approach</h3>
                </div>
                <p className="text-sm text-orange-700 font-semibold leading-relaxed">
                  All services are designed to be completed online without visiting government offices. Experience the future of governance today.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-amber-900 text-lg">🔍 Transparent Process</h3>
                </div>
                <p className="text-sm text-amber-700 font-semibold leading-relaxed">
                  Track every step of your application with real-time updates and complete transparency. No hidden processes or delays.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-yellow-900 text-lg">🔒 Secure & Protected</h3>
                </div>
                <p className="text-sm text-yellow-700 font-semibold leading-relaxed">
                  Your data is encrypted with military-grade security and protected with the highest international standards.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200 shadow-lg">
              <h3 className="font-black text-slate-800 mb-6 text-xl">🆘 Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-xl shadow-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-red-900">📞 24/7 Helpline</div>
                    <div className="text-red-700 font-semibold">1800-DIGITAL-GOV</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-white rounded-xl shadow-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-pink-900">📧 Email Support</div>
                    <div className="text-pink-700 font-semibold">support@digitalservices.gov.in</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-white rounded-xl shadow-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-orange-900">⏰ Available</div>
                    <div className="text-orange-700 font-semibold">24/7 Digital Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-orange-200 backdrop-blur-sm" suppressHydrationWarning={true}>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-black text-slate-800 mb-4">❓ Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 font-semibold">Get instant answers to common service questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-black text-lg">💻</span>
                </div>
                <h3 className="font-black text-slate-800 text-xl leading-tight">How do I apply for services online?</h3>
              </div>
              <p className="text-slate-600 font-semibold leading-relaxed pl-16">
                Select the service you need, fill out the secure online form, upload required documents in PDF format, 
                and submit. You'll receive an encrypted reference number to track your application in real-time.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-black text-lg">📄</span>
                </div>
                <h3 className="font-black text-slate-800 text-xl leading-tight">What documents do I need?</h3>
              </div>
              <p className="text-slate-600 font-semibold leading-relaxed pl-16">
                Required documents vary by service. Each service page lists specific documents needed with smart validation. 
                All documents should be in PDF format, under 5MB, with clear resolution for faster processing.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-black text-lg">📍</span>
                </div>
                <h3 className="font-black text-slate-800 text-xl leading-tight">How can I track my application?</h3>
              </div>
              <p className="text-slate-600 font-semibold leading-relaxed pl-16">
                Use our advanced "Track Application" feature with your reference number. Receive instant SMS/email 
                updates at each stage with AI-powered notifications and estimated completion times.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-black text-lg">🆘</span>
                </div>
                <h3 className="font-black text-slate-800 text-xl leading-tight">What if I need help with my application?</h3>
              </div>
              <p className="text-slate-600 font-semibold leading-relaxed pl-16">
                Contact our 24/7 digital support team at 1800-DIGITAL-GOV or email support@digitalservices.gov.in. 
                Our AI chatbot and expert agents are always ready to assist you with any queries.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-10 rounded-2xl font-black text-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              💬 Contact Support Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
