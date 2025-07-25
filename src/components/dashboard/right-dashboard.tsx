"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, RefreshCw, Plus } from "lucide-react"
import { AddCardModal } from "@/components/dashboard/add-card-modal"

const recentTransactions = [
  { name: "Spotify", amount: 244.0, icon: "🎵", color: "bg-green-500" },
  { name: "A Coffee", amount: 54.0, icon: "☕", color: "bg-orange-500" },
  { name: "Stripe deposit", amount: 244.0, icon: "💳", color: "bg-blue-500" },
  { name: "Figma", amount: 244.0, icon: "🎨", color: "bg-purple-500" },
  { name: "TBF Bakery", amount: 244.0, icon: "🥖", color: "bg-yellow-500" },
  { name: "Fresh FAV", amount: 244.0, icon: "🛒", color: "bg-green-600" },
  { name: "Stripe deposit", amount: 244.0, icon: "💳", color: "bg-blue-500" },
  { name: "Visa ending in 1234", amount: 244.0, icon: "💳", color: "bg-gray-700" },
  { name: "Netflix", amount: 15.99, icon: "📺", color: "bg-red-500" },
  { name: "Amazon", amount: 89.99, icon: "📦", color: "bg-orange-600" },
  { name: "Uber", amount: 25.5, icon: "🚗", color: "bg-black" },
  { name: "McDonald's", amount: 12.99, icon: "🍟", color: "bg-yellow-600" },
]

export function RightSidebar() {
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false)

  return (
    <>
      <div className="w-full lg:w-80 bg-white border-l border-gray-200 flex flex-col flex-shrink-0 hidden lg:flex">
        {/* Fixed Header */}
        <div className="flex-shrink-0 p-6 border-b border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              <span className="font-semibold">Untitled UI</span>
            </div>
            <Button variant="ghost" size="sm">
              <Menu className="w-4 h-4" />
            </Button>
          </div>

          {/* Your cards section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Your cards</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Welcome back, Olivia!</p>

            <div className="flex space-x-2 mb-6">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync accounts
              </Button>
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => setIsAddCardModalOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add card
              </Button>
            </div>

            {/* Credit Card */}
            {/* <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-sm opacity-80">Untitled</span>
                  <div className="text-right">
                    <div className="text-xs opacity-80">VALID THRU</div>
                    <div className="text-sm">12/24</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg tracking-wider">1234 1234 1234 1234</div>
                  <div className="text-sm opacity-80">OLIVIA RHYE</div>
                </div>
              </div>
            </div> */}

            {/* Credit Card */}
            <div className="relative mb-2 pt-6">
              <img className="z-0" src="/credit-card.png " alt="credit-card-up" />
              <img src="/credit-card-up.png" className="absolute bottom-5 right-5 z-10" alt="credit-card-down" />

            </div>




          </div>
        </div>

        {/* Scrollable Recent transactions */}
        <div className="flex-1 overflow-auto p-6">
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full ${transaction.color} flex items-center justify-center text-white text-sm flex-shrink-0`}
                  >
                    {transaction.icon}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{transaction.name}</div>
                    <div className="text-xs text-gray-500">${transaction.amount.toFixed(2)}</div>
                  </div>
                </div>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs px-3 flex-shrink-0">
                  Buy
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddCardModal isOpen={isAddCardModalOpen} onClose={() => setIsAddCardModalOpen(false)} />
    </>
  )
}
