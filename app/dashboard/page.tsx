'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('all');

  return (
    <div className="bg-[#F9F9F9] min-h-screen py-8" suppressHydrationWarning={true}>
      <div className="container mx-auto px-4" suppressHydrationWarning={true}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1E3E2D] to-[#2A5A3F] rounded-2xl shadow-2xl p-8 mb-8 text-[#FFFFFF]" suppressHydrationWarning={true}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#00A859] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-black text-[#FFFFFF] mb-2">
                    Legal Analytics Dashboard
                  </h1>
                  <p className="text-lg text-gray-200">
                    Real-time legal compliance metrics and governance analytics
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-6 py-3 border-2 border-[#00A859] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A859] bg-[#FFFFFF] text-[#000000] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Last Year</option>
              </select>
              
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-6 py-3 border-2 border-[#00A859] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A859] bg-[#FFFFFF] text-[#000000] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <option value="all">All Legal Metrics</option>
                <option value="transparency">Legal Transparency</option>
                <option value="financial">Financial Compliance</option>
                <option value="corruption">Anti-Corruption Cases</option>
              </select>
            </div>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-4 border-[#00A859]" suppressHydrationWarning={true}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#555555] mb-2">Legal Compliance Score</p>
                <p className="text-4xl font-black text-[#1E3E2D] mb-1">95.2%</p>
                <p className="text-sm text-[#00A859] font-semibold">↑ 2.1% from last month</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#00A859] to-[#007A45] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-4 border-[#1E3E2D]" suppressHydrationWarning={true}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#555555] mb-2">Legal Budget Utilization</p>
                <p className="text-4xl font-black text-[#1E3E2D] mb-1">82.4%</p>
                <p className="text-sm text-[#00A859] font-semibold">↑ 5.3% from last month</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3E2D] to-[#2A5A3F] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-4 border-[#00A859]" suppressHydrationWarning={true}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#555555] mb-2">Legal Cases Resolved</p>
                <p className="text-4xl font-black text-[#1E3E2D] mb-1">156</p>
                <p className="text-sm text-[#00A859] font-semibold">↑ 12 from last month</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#00A859] to-[#007A45] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-4 border-[#1E3E2D]" suppressHydrationWarning={true}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#555555] mb-2">Legal Satisfaction Rating</p>
                <p className="text-4xl font-black text-[#1E3E2D] mb-1">4.7/5</p>
                <p className="text-sm text-[#00A859] font-semibold">↑ 0.2 from last month</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3E2D] to-[#2A5A3F] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Budget Analysis Chart */}
          <div className="bg-[#FFFFFF] rounded-2xl shadow-xl p-8 border-2 border-[#F9F9F9] hover:border-[#00A859] transition-all duration-300" suppressHydrationWarning={true}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#00A859] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-[#000000]">Legal Budget Analysis</h2>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#555555]">Legal Education & Training</span>
                <span className="text-sm font-black text-[#000000]">₹15.2 Cr (32%)</span>
              </div>
              <div className="w-full bg-[#F9F9F9] rounded-full h-4 shadow-inner">
                <div className="bg-gradient-to-r from-[#00A859] to-[#007A45] h-4 rounded-full shadow-lg" style={{width: '32%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#555555]">Legal Healthcare Compliance</span>
                <span className="text-sm font-black text-[#000000]">₹12.8 Cr (27%)</span>
              </div>
              <div className="w-full bg-[#F9F9F9] rounded-full h-4 shadow-inner">
                <div className="bg-gradient-to-r from-[#1E3E2D] to-[#2A5A3F] h-4 rounded-full shadow-lg" style={{width: '27%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#555555]">Legal Infrastructure</span>
                <span className="text-sm font-black text-[#000000]">₹11.5 Cr (24%)</span>
              </div>
              <div className="w-full bg-[#F9F9F9] rounded-full h-4 shadow-inner">
                <div className="bg-gradient-to-r from-[#00A859] to-[#007A45] h-4 rounded-full shadow-lg" style={{width: '24%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#555555]">Legal Social Welfare</span>
                <span className="text-sm font-black text-[#000000]">₹5.2 Cr (11%)</span>
              </div>
              <div className="w-full bg-[#F9F9F9] rounded-full h-4 shadow-inner">
                <div className="bg-gradient-to-r from-[#1E3E2D] to-[#2A5A3F] h-4 rounded-full shadow-lg" style={{width: '11%'}}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#555555]">Legal Operations</span>
                <span className="text-sm font-black text-[#000000]">₹2.5 Cr (6%)</span>
              </div>
              <div className="w-full bg-[#F9F9F9] rounded-full h-4 shadow-inner">
                <div className="bg-gradient-to-r from-[#555555] to-[#333333] h-4 rounded-full shadow-lg" style={{width: '6%'}}></div>
              </div>
            </div>
          </div>

          {/* Corruption Reports Trend */}
          <div className="bg-[#FFFFFF] rounded-2xl shadow-xl p-8 border-2 border-[#F9F9F9] hover:border-[#00A859] transition-all duration-300" suppressHydrationWarning={true}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#1E3E2D] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-[#000000]">Legal Case Management Trend</h2>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border-2 border-red-200 text-center">
                  <div className="text-3xl font-black text-red-700 mb-1">89</div>
                  <div className="text-sm text-red-600 font-bold">New Legal Cases</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border-2 border-yellow-200 text-center">
                  <div className="text-3xl font-black text-yellow-700 mb-1">67</div>
                  <div className="text-sm text-yellow-600 font-bold">Under Legal Review</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 text-center">
                  <div className="text-3xl font-black text-green-700 mb-1">156</div>
                  <div className="text-sm text-green-600 font-bold">Legally Resolved</div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-black text-[#000000] mb-4 text-lg">Legal Resolution Rate by Department</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-[#F9F9F9] rounded-xl">
                    <span className="text-sm font-bold text-[#000000]">Legal Affairs Dept.</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-3 mr-3 shadow-inner">
                        <div className="bg-gradient-to-r from-[#00A859] to-[#007A45] h-3 rounded-full shadow-lg" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-black text-[#1E3E2D] min-w-[40px]">85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#F9F9F9] rounded-xl">
                    <span className="text-sm font-bold text-[#000000]">Compliance Dept.</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-3 mr-3 shadow-inner">
                        <div className="bg-gradient-to-r from-[#00A859] to-[#007A45] h-3 rounded-full shadow-lg" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm font-black text-[#1E3E2D] min-w-[40px]">78%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#F9F9F9] rounded-xl">
                    <span className="text-sm font-bold text-[#000000]">Legal Enforcement</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-3 mr-3 shadow-inner">
                        <div className="bg-gradient-to-r from-[#1E3E2D] to-[#2A5A3F] h-3 rounded-full shadow-lg" style={{width: '65%'}}></div>
                      </div>
                      <span className="text-sm font-black text-[#1E3E2D] min-w-[40px]">65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow-xl p-8 mb-8 border-2 border-[#F9F9F9] hover:border-[#00A859] transition-all duration-300" suppressHydrationWarning={true}>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-[#00A859] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-[#000000]">Legal Department Performance Scorecard</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-[#FFFFFF] uppercase bg-gradient-to-r from-[#1E3E2D] to-[#2A5A3F]">
                <tr>
                  <th className="px-6 py-4 font-black">Legal Department</th>
                  <th className="px-6 py-4 font-black">Compliance Score</th>
                  <th className="px-6 py-4 font-black">Legal Budget Use</th>
                  <th className="px-6 py-4 font-black">Legal Satisfaction</th>
                  <th className="px-6 py-4 font-black">Legal Cases</th>
                  <th className="px-6 py-4 font-black">Legal Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FFFFFF] border-b-2 border-[#F9F9F9] hover:bg-[#F9F9F9] transition-all duration-300">
                  <td className="px-6 py-4 font-black text-[#000000]">Legal Education</td>
                  <td className="px-6 py-4">
                    <span className="bg-gradient-to-r from-[#00A859] to-[#007A45] text-[#FFFFFF] text-xs font-black px-3 py-1 rounded-full shadow-lg">95%</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">87%</td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">4.8/5</td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">12</td>
                  <td className="px-6 py-4">
                    <span className="bg-gradient-to-r from-[#00A859] to-[#007A45] text-[#FFFFFF] text-xs font-black px-3 py-1 rounded-full shadow-lg">A+</span>
                  </td>
                </tr>
                <tr className="bg-[#FFFFFF] border-b-2 border-[#F9F9F9] hover:bg-[#F9F9F9] transition-all duration-300">
                  <td className="px-6 py-4 font-black text-[#000000]">Legal Healthcare</td>
                  <td className="px-6 py-4">
                    <span className="bg-gradient-to-r from-[#00A859] to-[#007A45] text-[#FFFFFF] text-xs font-black px-3 py-1 rounded-full shadow-lg">92%</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">84%</td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">4.6/5</td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">18</td>
                  <td className="px-6 py-4">
                    <span className="bg-gradient-to-r from-[#00A859] to-[#007A45] text-[#FFFFFF] text-xs font-black px-3 py-1 rounded-full shadow-lg">A</span>
                  </td>
                </tr>
                <tr className="bg-[#FFFFFF] border-b-2 border-[#F9F9F9] hover:bg-[#F9F9F9] transition-all duration-300">
                  <td className="px-6 py-4 font-black text-[#000000]">Legal Public Works</td>
                  <td className="px-6 py-4">
                    <span className="bg-gradient-to-r from-[#1E3E2D] to-[#2A5A3F] text-[#FFFFFF] text-xs font-black px-3 py-1 rounded-full shadow-lg">78%</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">76%</td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">4.2/5</td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">35</td>
                  <td className="px-6 py-4">
                    <span className="bg-gradient-to-r from-[#1E3E2D] to-[#2A5A3F] text-[#FFFFFF] text-xs font-black px-3 py-1 rounded-full shadow-lg">B+</span>
                  </td>
                </tr>
                <tr className="bg-[#FFFFFF] border-b-2 border-[#F9F9F9] hover:bg-[#F9F9F9] transition-all duration-300">
                  <td className="px-6 py-4 font-black text-[#000000]">Legal Transport</td>
                  <td className="px-6 py-4">
                    <span className="bg-gradient-to-r from-[#555555] to-[#333333] text-[#FFFFFF] text-xs font-black px-3 py-1 rounded-full shadow-lg">72%</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">68%</td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">3.9/5</td>
                  <td className="px-6 py-4 font-semibold text-[#000000]">24</td>
                  <td className="px-6 py-4">
                    <span className="bg-gradient-to-r from-[#555555] to-[#333333] text-[#FFFFFF] text-xs font-black px-3 py-1 rounded-full shadow-lg">B</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transparency Updates */}
          <div className="bg-[#FFFFFF] rounded-2xl shadow-xl p-8 border-2 border-[#F9F9F9] hover:border-[#00A859] transition-all duration-300" suppressHydrationWarning={true}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#00A859] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-[#000000]">Recent Legal Transparency Updates</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-[#00A859] hover:shadow-lg transition-all duration-300">
                <div className="w-3 h-3 bg-[#00A859] rounded-full mt-2 shadow-lg"></div>
                <div>
                  <h3 className="font-black text-[#1E3E2D] mb-1">Legal Budget Documents Published</h3>
                  <p className="text-sm text-[#555555] mb-2">Q4 legal budget allocation documents now available with full transparency</p>
                  <span className="text-xs text-[#00A859] font-bold bg-[#00A859] bg-opacity-10 px-2 py-1 rounded-full">2 hours ago</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-[#00A859] hover:shadow-lg transition-all duration-300">
                <div className="w-3 h-3 bg-[#00A859] rounded-full mt-2 shadow-lg"></div>
                <div>
                  <h3 className="font-black text-[#1E3E2D] mb-1">Legal Contract Details Updated</h3>
                  <p className="text-sm text-[#555555] mb-2">New legal infrastructure contracts with complete legal compliance transparency</p>
                  <span className="text-xs text-[#00A859] font-bold bg-[#00A859] bg-opacity-10 px-2 py-1 rounded-full">1 day ago</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-[#00A859] hover:shadow-lg transition-all duration-300">
                <div className="w-3 h-3 bg-[#00A859] rounded-full mt-2 shadow-lg"></div>
                <div>
                  <h3 className="font-black text-[#1E3E2D] mb-1">Legal Audit Report Released</h3>
                  <p className="text-sm text-[#555555] mb-2">Independent legal audit findings for healthcare legal compliance spending</p>
                  <span className="text-xs text-[#00A859] font-bold bg-[#00A859] bg-opacity-10 px-2 py-1 rounded-full">3 days ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="bg-[#FFFFFF] rounded-2xl shadow-xl p-8 border-2 border-[#F9F9F9] hover:border-[#00A859] transition-all duration-300" suppressHydrationWarning={true}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#1E3E2D] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-[#000000]">Priority Legal Action Items</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="font-black text-red-900 mb-1">High Legal Priority</h3>
                  <p className="text-sm text-red-700 font-semibold">Review pending legal compliance cases</p>
                </div>
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-[#FFFFFF] text-sm font-black px-4 py-2 rounded-xl shadow-lg">24</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="font-black text-yellow-900 mb-1">Medium Legal Priority</h3>
                  <p className="text-sm text-yellow-700 font-semibold">Update legal transparency documents</p>
                </div>
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#FFFFFF] text-sm font-black px-4 py-2 rounded-xl shadow-lg">12</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-[#00A859] hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="font-black text-[#1E3E2D] mb-1">Regular Legal Tasks</h3>
                  <p className="text-sm text-[#555555] font-semibold">Monthly legal performance reviews</p>
                </div>
                <span className="bg-gradient-to-r from-[#00A859] to-[#007A45] text-[#FFFFFF] text-sm font-black px-4 py-2 rounded-xl shadow-lg">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
