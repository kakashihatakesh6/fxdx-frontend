"use client"

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const monthlyData = [
  { month: "Jan", income: 5000, expenses: 3200, savings: 1800 },
  { month: "Feb", income: 5200, expenses: 3400, savings: 1800 },
  { month: "Mar", income: 4800, expenses: 3100, savings: 1700 },
  { month: "Apr", income: 5500, expenses: 3600, savings: 1900 },
  { month: "May", income: 5300, expenses: 3300, savings: 2000 },
  { month: "Jun", income: 5800, expenses: 3800, savings: 2000 },
]

const categoryData = [
  { name: "Food & Dining", value: 1200, color: "#8B5CF6" },
  { name: "Shopping", value: 800, color: "#EC4899" },
  { name: "Transportation", value: 400, color: "#10B981" },
  { name: "Entertainment", value: 300, color: "#F59E0B" },
  { name: "Bills", value: 600, color: "#EF4444" },
  { name: "Others", value: 200, color: "#6B7280" },
]

const weeklySpending = [
  { day: "Mon", amount: 120 },
  { day: "Tue", amount: 80 },
  { day: "Wed", amount: 200 },
  { day: "Thu", amount: 150 },
  { day: "Fri", amount: 300 },
  { day: "Sat", amount: 250 },
  { day: "Sun", amount: 100 },
]

export function AnalyticsPage() {
  return (
    <div className="flex-1 p-4 lg:p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-gray-600">Detailed insights into your financial patterns</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-2 text-gray-600">Total Income</h3>
            <p className="text-2xl font-bold text-green-600">$31,600</p>
            <p className="text-sm text-green-500 mt-1">+12% from last month</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-2 text-gray-600">Total Expenses</h3>
            <p className="text-2xl font-bold text-red-600">$20,400</p>
            <p className="text-sm text-red-500 mt-1">+5% from last month</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-2 text-gray-600">Net Savings</h3>
            <p className="text-2xl font-bold text-blue-600">$11,200</p>
            <p className="text-sm text-blue-500 mt-1">+25% from last month</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-2 text-gray-600">Savings Rate</h3>
            <p className="text-2xl font-bold text-purple-600">35.4%</p>
            <p className="text-sm text-purple-500 mt-1">Above average</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {/* Income vs Expenses */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-4">Income vs Expenses</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#10B981" strokeWidth={2} />
                  <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="savings" stroke="#8B5CF6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Spending by Category */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-4">Spending by Category</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Weekly Spending Pattern */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
          <h3 className="font-semibold mb-4">Weekly Spending Pattern</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklySpending}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Financial Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-4">Monthly Budget Progress</h3>
            <div className="space-y-4">
              {[
                { category: "Food & Dining", spent: 1200, budget: 1500, color: "bg-green-500" },
                { category: "Shopping", spent: 800, budget: 1000, color: "bg-blue-500" },
                { category: "Transportation", spent: 400, budget: 500, color: "bg-yellow-500" },
                { category: "Entertainment", spent: 300, budget: 400, color: "bg-purple-500" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.category}</span>
                    <span>
                      ${item.spent} / ${item.budget}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${(item.spent / item.budget) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-4">Savings Goals</h3>
            <div className="space-y-4">
              {[
                { goal: "Emergency Fund", current: 8500, target: 10000, color: "bg-red-500" },
                { goal: "Vacation", current: 2300, target: 5000, color: "bg-blue-500" },
                { goal: "New Car", current: 15000, target: 25000, color: "bg-green-500" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.goal}</span>
                    <span>
                      ${item.current.toLocaleString()} / ${item.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${(item.current / item.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
