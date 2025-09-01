'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  averageSessionDuration: number
  bounceRate: number
  topPages: Array<{ page: string; views: number }>
  topReferrers: Array<{ source: string; visits: number }>
  deviceTypes: Array<{ device: string; percentage: number }>
  userJourney: Array<{ step: string; count: number }>
  userLocations: Array<{ country: string; city: string; visitors: number }>
  userNames: Array<{ name: string; visits: number }>
}

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading analytics data
    // In a real implementation, you would fetch this from Vercel Analytics API
    const loadAnalyticsData = async () => {
      setIsLoading(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock data for demonstration
      setAnalyticsData({
        pageViews: 1247,
        uniqueVisitors: 892,
        averageSessionDuration: 245, // seconds
        bounceRate: 34.2,
        topPages: [
          { page: '/', views: 892 },
          { page: '/adopt', views: 234 },
          { page: '/about', views: 156 },
          { page: '/fruits', views: 98 }
        ],
        topReferrers: [
          { source: 'Direct', visits: 456 },
          { source: 'Google', visits: 234 },
          { source: 'Social Media', visits: 123 },
          { source: 'Other', visits: 79 }
        ],
        deviceTypes: [
          { device: 'Mobile', percentage: 68 },
          { device: 'Desktop', percentage: 28 },
          { device: 'Tablet', percentage: 4 }
        ],
        userJourney: [
          { step: 'Homepage Visit', count: 892 },
          { step: 'Ticker Interaction', count: 567 },
          { step: 'Product View', count: 234 },
          { step: 'Adopt Tree Click', count: 89 },
          { step: 'Contact Form', count: 45 }
        ],
        userLocations: [
          { country: 'India', city: 'Mumbai', visitors: 234 },
          { country: 'India', city: 'Delhi', visitors: 189 },
          { country: 'United States', city: 'New York', visitors: 67 },
          { country: 'United Kingdom', city: 'London', visitors: 45 },
          { country: 'Canada', city: 'Toronto', visitors: 34 }
        ],
        userNames: [
          { name: 'Rahul Sharma', visits: 12 },
          { name: 'Priya Patel', visits: 8 },
          { name: 'Amit Kumar', visits: 6 },
          { name: 'Sarah Johnson', visits: 5 },
          { name: 'David Chen', visits: 4 }
        ]
      })
      
      setIsLoading(false)
    }

    loadAnalyticsData()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    )
  }

  if (!analyticsData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No analytics data available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Baghari Farm Analytics
          </h1>
          <p className="text-gray-600">
            Real-time insights into your website performance and user behavior
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Page Views</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.pageViews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.uniqueVisitors.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg. Session</p>
                <p className="text-2xl font-bold text-gray-900">{Math.floor(analyticsData.averageSessionDuration / 60)}m {analyticsData.averageSessionDuration % 60}s</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.bounceRate}%</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{page.page}</span>
                  <span className="text-sm font-medium text-gray-900">{page.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Device Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
            <div className="space-y-3">
              {analyticsData.deviceTypes.map((device) => (
                <div key={device.device} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{device.device}</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-sage h-2 rounded-full" 
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{device.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* User Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow p-6 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Journey</h3>
            <div className="space-y-3">
              {analyticsData.userJourney.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <div className="w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    {index + 1}
                  </div>
                  <span className="text-sm text-gray-600 flex-1">{step.step}</span>
                  <span className="text-sm font-medium text-gray-900">{step.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* User Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Locations</h3>
            <div className="space-y-3">
              {analyticsData.userLocations.map((location) => (
                <div key={`${location.city}-${location.country}`} className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-900">{location.city}</span>
                    <span className="text-xs text-gray-500 block">{location.country}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{location.visitors.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* User Names */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Returning Users</h3>
            <div className="space-y-3">
              {analyticsData.userNames.map((user) => (
                <div key={user.name} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{user.name}</span>
                  <span className="text-sm font-medium text-gray-900">{user.visits} visits</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
