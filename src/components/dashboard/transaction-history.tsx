"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Edit2, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const allTransactions = {
  Personal: [
    {
      id: 1,
      name: "Spotify",
      amount: -18.09,
      date: "Wed 1:00pm",
      category: "Subscriptions",
      account: "Visa 1234",
      expiry: "Expiry 09/2024",
      icon: "🎵",
      color: "bg-green-500",
    },
    {
      id: 2,
      name: "A Coffee",
      amount: -4.5,
      date: "Wed 7:20am",
      category: "Food and dining",
      account: "Visa 1234",
      expiry: "Expiry 09/2024",
      icon: "☕",
      color: "bg-orange-500",
    },
    {
      id: 3,
      name: "Stripe",
      amount: 888.0,
      date: "Wed 2:45am",
      category: "Income",
      account: "Mastercard 1234",
      expiry: "Expiry 09/2024",
      icon: "💳",
      color: "bg-blue-500",
    },
    {
      id: 4,
      name: "Figma",
      amount: -15.0,
      date: "Tue 6:10pm",
      category: "Subscriptions",
      account: "Visa 1234",
      expiry: "Expiry 09/2024",
      icon: "🎨",
      color: "bg-purple-500",
    },
    {
      id: 5,
      name: "TBF Bakery",
      amount: -12.5,
      date: "Tue 7:52am",
      category: "Food and dining",
      account: "Visa 1234",
      expiry: "Expiry 09/2024",
      icon: "🥖",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      name: "Fresh FAV",
      amount: -40.2,
      date: "Tue 12:15pm",
      category: "Groceries",
      account: "Visa 1234",
      expiry: "Expiry 09/2024",
      icon: "🛒",
      color: "bg-green-600",
    },
    {
      id: 7,
      name: "Netflix",
      amount: -15.99,
      date: "Mon 8:30pm",
      category: "Subscriptions",
      account: "Visa 1234",
      expiry: "Expiry 09/2024",
      icon: "📺",
      color: "bg-red-500",
    },
    {
      id: 8,
      name: "Amazon",
      amount: -89.99,
      date: "Mon 2:15pm",
      category: "Shopping",
      account: "Visa 1234",
      expiry: "Expiry 09/2024",
      icon: "📦",
      color: "bg-orange-600",
    },
  ],
  Business: [
    {
      id: 9,
      name: "Office Rent",
      amount: -2500.0,
      date: "Wed 9:00am",
      category: "Office",
      account: "Business Card 5678",
      expiry: "Expiry 12/2025",
      icon: "🏢",
      color: "bg-gray-600",
    },
    {
      id: 10,
      name: "Client Payment",
      amount: 5000.0,
      date: "Tue 3:30pm",
      category: "Income",
      account: "Business Account",
      expiry: "Expiry 12/2025",
      icon: "💰",
      color: "bg-green-500",
    },
    {
      id: 11,
      name: "Software License",
      amount: -299.0,
      date: "Mon 11:00am",
      category: "Software",
      account: "Business Card 5678",
      expiry: "Expiry 12/2025",
      icon: "💻",
      color: "bg-blue-600",
    },
    {
      id: 12,
      name: "Marketing Campaign",
      amount: -1200.0,
      date: "Sun 4:00pm",
      category: "Marketing",
      account: "Business Card 5678",
      expiry: "Expiry 12/2025",
      icon: "📢",
      color: "bg-purple-600",
    },
  ],
  Credit: [
    {
      id: 13,
      name: "Credit Payment",
      amount: -500.0,
      date: "Wed 6:00pm",
      category: "Payment",
      account: "Credit Card 9012",
      expiry: "Expiry 08/2026",
      icon: "💳",
      color: "bg-blue-700",
    },
    {
      id: 14,
      name: "Interest Charge",
      amount: -25.5,
      date: "Tue 12:00pm",
      category: "Fees",
      account: "Credit Card 9012",
      expiry: "Expiry 08/2026",
      icon: "⚠️",
      color: "bg-red-600",
    },
    {
      id: 15,
      name: "Cashback Reward",
      amount: 45.0,
      date: "Mon 9:00am",
      category: "Rewards",
      account: "Credit Card 9012",
      expiry: "Expiry 08/2026",
      icon: "🎁",
      color: "bg-green-600",
    },
  ],
}

interface TransactionHistoryProps {
  activeTab: string
  dateFilter: string
  categoryFilter: string
}

export function TransactionHistory({ activeTab, dateFilter, categoryFilter }: TransactionHistoryProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const itemsPerPage = 5

  const transactions = allTransactions[activeTab as keyof typeof allTransactions] || []

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesSearch
    })
  }, [transactions, searchTerm])

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, page)))
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Search and filters */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Transaction</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Amount</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm hidden sm:table-cell">Date</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm hidden md:table-cell">Category</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm hidden lg:table-cell">Account</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full ${transaction.color} flex items-center justify-center text-white text-sm flex-shrink-0`}
                    >
                      {transaction.icon}
                    </div>
                    <div>
                      <span className="font-medium block">{transaction.name}</span>
                      <span className="text-xs text-gray-500 sm:hidden">{transaction.date}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`font-medium ${transaction.amount > 0 ? "text-green-600" : "text-gray-900"}`}>
                    {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600 hidden sm:table-cell">{transaction.date}</td>
                <td className="py-3 px-4 hidden md:table-cell">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    {transaction.category}
                  </span>
                </td>
                <td className="py-3 px-4 hidden lg:table-cell">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-4 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      {transaction.account.includes("Visa")
                        ? "V"
                        : transaction.account.includes("Mastercard")
                          ? "M"
                          : "B"}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{transaction.account}</div>
                      <div className="text-xs text-gray-500">{transaction.expiry}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="sm">
                    <Edit2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 border-t border-gray-200 space-y-2 sm:space-y-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-full sm:w-auto"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>

        <div className="flex items-center space-x-1 overflow-x-auto">
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const page = i + 1
            return (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "ghost"}
                size="sm"
                className="w-8 h-8 p-0 flex-shrink-0"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            )
          })}
          {totalPages > 5 && <span className="text-gray-500">...</span>}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-full sm:w-auto"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
