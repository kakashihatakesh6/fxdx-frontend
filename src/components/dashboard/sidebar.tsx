"use client"

import { useState } from "react"
import { Home, CreditCard, Receipt, TrendingUp, PieChart, Settings, HelpCircle, User, Menu, X, CircleUser } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Sidebar({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems = [
    { icon: Home, key: "dashboard", label: "Dashboard" },
    { icon: CreditCard, key: "cards", label: "Cards" },
    { icon: Receipt, key: "transactions", label: "Transactions" },
    { icon: TrendingUp, key: "analytics", label: "Analytics" },
    { icon: PieChart, key: "reports", label: "Reports" },
    // { icon: Settings, key: "settings", label: "Settings" },
    // { icon: HelpCircle, key: "help", label: "Help" },
  ]

  const handleNavClick = (key: string) => {
    setCurrentPage(key)
    setSidebarOpen(false) // Close mobile sidebar after navigation
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-30 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      <div
        className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out z-30 ${isExpanded ? "w-56" : "w-16"
          } ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative h-full flex-shrink-0`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="p-4 mt-12 lg:mt-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            {isExpanded && <span className="font-semibold text-gray-900 whitespace-nowrap">Dashboard</span>}
          </div>
        </div>

        <nav className="flex flex-col space-y-2 flex-1 px-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${currentPage === item.key
                ? "bg-purple-100 text-purple-600"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isExpanded && <span className="whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-2 mt-auto">
          <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 w-full transition-colors">
            <CircleUser className="w-5 h-5 flex-shrink-0" />
            {isExpanded && <span className="whitespace-nowrap">Settings</span>}
          </button>
        </div>

        <div className="p-2 mt-auto">
          <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 w-full transition-colors">
            <Settings className="w-5 h-5 flex-shrink-0" />
            {isExpanded && <span className="whitespace-nowrap">Settings</span>}
          </button>
        </div>

        {/* <div className="p-2 mt-auto">
          <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 w-full transition-colors">
            <User className="w-5 h-5 flex-shrink-0" />
            {isExpanded && <span className="whitespace-nowrap">Profile</span>}
          </button>
        </div> */}
        <div className="py-2 mt-auto">
          <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 w-full transition-colors">
            {/* <User className="w-5 h-5 flex-shrink-0" />

            {/* <button className="w-10 h-10 rounded-lg flex cursor-pointer items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 mt-auto"> */}
            {/* <div className="flex w-10 h-10 bg-orange-400 rounded-full"> */}
            <div className="flex w-8 h-8 rounded-full">
              <img src="olivia-img.png" alt="olivia" className="w-full h-full rounded-full" />
            </div>
            {isExpanded && <span className="whitespace-nowrap">Profile</span>}
            {/* </div> */}
          </button>
          {/* </button> */}
        </div>
      </div>
    </>
  )
}
