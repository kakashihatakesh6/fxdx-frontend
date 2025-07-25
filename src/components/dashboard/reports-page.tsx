"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Calendar, Filter, TrendingUp, TrendingDown } from "lucide-react"

const reports = [
  {
    id: 1,
    name: "Monthly Financial Summary",
    description: "Complete overview of income, expenses, and savings",
    date: "December 2024",
    type: "Monthly",
    status: "Ready",
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "Tax Report 2024",
    description: "Annual tax-related transactions and deductions",
    date: "2024",
    type: "Annual",
    status: "Ready",
    size: "5.1 MB",
  },
  {
    id: 3,
    name: "Expense Category Analysis",
    description: "Detailed breakdown of spending by category",
    date: "Q4 2024",
    type: "Quarterly",
    status: "Processing",
    size: "1.8 MB",
  },
  {
    id: 4,
    name: "Investment Performance",
    description: "Portfolio performance and returns analysis",
    date: "December 2024",
    type: "Monthly",
    status: "Ready",
    size: "3.2 MB",
  },
]

const quickStats = [
  { label: "Total Reports Generated", value: "24", change: "+3", trend: "up" },
  { label: "Data Points Analyzed", value: "1,247", change: "+156", trend: "up" },
  { label: "Average Report Size", value: "2.8 MB", change: "-0.2", trend: "down" },
  { label: "Processing Time", value: "2.3 min", change: "-0.5", trend: "down" },
]

export function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedType, setSelectedType] = useState("all")

  const generateReport = (type: string) => {
    console.log(`Generating ${type} report...`)
    // Add report generation logic here
  }

  return (
    <div className="flex-1 p-4 lg:p-6 overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">Reports</h1>
            <p className="text-gray-600">Generate and download detailed financial reports</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0">
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              <Calendar className="w-4 h-4 mr-2" />
              Select Period
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`flex items-center text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annual">Annual</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Reports</option>
                  <option value="financial">Financial Summary</option>
                  <option value="tax">Tax Reports</option>
                  <option value="expense">Expense Analysis</option>
                  <option value="investment">Investment Reports</option>
                </select>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="font-semibold">Available Reports</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {reports.map((report) => (
              <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-medium">{report.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          report.status === "Ready" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {report.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{report.date}</span>
                      <span>•</span>
                      <span>{report.type}</span>
                      <span>•</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={report.status === "Processing"}
                      className="w-full sm:w-auto bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => generateReport(report.type.toLowerCase())}
                      className="w-full sm:w-auto"
                    >
                      Regenerate
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Generate Section */}
        <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="font-semibold mb-4">Quick Generate</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { name: "Monthly Summary", icon: "📊", type: "monthly" },
              { name: "Expense Report", icon: "💰", type: "expense" },
              { name: "Tax Summary", icon: "📋", type: "tax" },
              { name: "Investment Report", icon: "📈", type: "investment" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-purple-50 hover:border-purple-300 bg-transparent"
                onClick={() => generateReport(item.type)}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
