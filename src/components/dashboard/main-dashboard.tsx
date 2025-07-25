/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { BalanceChart } from "@/components/dashboard/balance-chart"
import { TransactionHistory } from "@/components/dashboard/transaction-history"
import { Button } from "@/components/ui/button"
import { Calendar, Filter } from "lucide-react"

export function MainDashboard() {
  const [activeTab, setActiveTab] = useState("Personal")
  const [dateFilter, setDateFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  const tabs = ["Personal", "Business", "Credit"]

  const balanceData = {
    Personal: { balance: "$40,206.20", flag: "🇺🇸" },
    Business: { balance: "$125,840.50", flag: "🇺🇸" },
    Credit: { balance: "$8,450.30", flag: "🇺🇸" },
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <div className="flex-shrink-0 p-4 lg:p-6 bg-gray-50 border-b border-gray-200">
        {/* Header and Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 space-y-4 lg:space-y-0">
          {/* Balance Section */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-base font-semibold text-gray-500">Your balance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7">
                {/* {balanceData[activeTab as keyof typeof balanceData].flag} */}
                <img className="w-full h-full" src="us-flag.png" alt="us-flag" />
              </div>
              <span className="text-2xl lg:text-3xl font-bold">
                {balanceData[activeTab as keyof typeof balanceData].balance}
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 lg:space-x-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab
                  ? "border-purple-600 text-purple-600 font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="h-32 lg:h-48">
          <BalanceChart activeTab={activeTab} />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto p-4 lg:p-6">
        {/* Transaction History */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 space-y-2 lg:space-y-0">
            <h2 className="text-lg font-semibold">Transaction history</h2>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Select dates
              </Button>
              <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Apply filter
              </Button>
            </div>
          </div>
          <TransactionHistory activeTab={activeTab} dateFilter={dateFilter} categoryFilter={categoryFilter} />
        </div>
      </div>
    </div>
  )
}
