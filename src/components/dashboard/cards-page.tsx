"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, Eye, EyeOff } from "lucide-react"
import { AddCardModal } from "@/components/dashboard/add-card-modal"

const cards = [
  {
    id: 1,
    name: "Untitled Card",
    number: "1234 1234 1234 1234",
    expiry: "12/24",
    holder: "OLIVIA RHYE",
    type: "Visa",
    gradient: "from-purple-600 to-pink-500",
    balance: "$2,450.00",
  },
  {
    id: 2,
    name: "Business Card",
    number: "5678 5678 5678 5678",
    expiry: "08/26",
    holder: "OLIVIA RHYE",
    type: "Mastercard",
    gradient: "from-blue-600 to-cyan-500",
    balance: "$15,230.00",
  },
  {
    id: 3,
    name: "Savings Card",
    number: "9012 9012 9012 9012",
    expiry: "03/25",
    holder: "OLIVIA RHYE",
    type: "Visa",
    gradient: "from-green-600 to-emerald-500",
    balance: "$8,750.00",
  },
]

export function CardsPage() {
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false)
  const [hiddenCards, setHiddenCards] = useState<number[]>([])

  const toggleCardVisibility = (cardId: number) => {
    setHiddenCards((prev) => (prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]))
  }

  return (
    <div className="flex-1 p-4 lg:p-6 overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">Your Cards</h1>
            <p className="text-gray-600">Manage your payment cards and view balances</p>
          </div>
          <Button
            onClick={() => setIsAddCardModalOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 mt-4 sm:mt-0"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Card
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <div key={card.id} className="relative">
              <div className={`bg-gradient-to-br ${card.gradient} rounded-xl p-6 text-white relative overflow-hidden`}>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-sm opacity-80">{card.name}</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCardVisibility(card.id)}
                      className="text-white hover:bg-white/20 p-1"
                    >
                      {hiddenCards.includes(card.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-1">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-lg tracking-wider">
                    {hiddenCards.includes(card.id) ? "**** **** **** ****" : card.number}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs opacity-80">VALID THRU</div>
                      <div className="text-sm">{card.expiry}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-80">BALANCE</div>
                      <div className="text-lg font-semibold">{card.balance}</div>
                    </div>
                  </div>
                  <div className="text-sm opacity-80">{card.holder}</div>
                </div>

                {/* Card type logo */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center text-xs font-bold">
                    {card.type === "Visa" ? "V" : "M"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Card Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-2">Total Balance</h3>
            <p className="text-2xl font-bold text-green-600">$26,430.00</p>
            <p className="text-sm text-gray-500 mt-1">Across all cards</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-2">Monthly Spending</h3>
            <p className="text-2xl font-bold text-red-600">$3,245.80</p>
            <p className="text-sm text-gray-500 mt-1">This month</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold mb-2">Rewards Earned</h3>
            <p className="text-2xl font-bold text-purple-600">$124.50</p>
            <p className="text-sm text-gray-500 mt-1">This month</p>
          </div>
        </div>
      </div>

      <AddCardModal isOpen={isAddCardModalOpen} onClose={() => setIsAddCardModalOpen(false)} />
    </div>
  )
}
