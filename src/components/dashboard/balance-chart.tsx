"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const chartData = {
  Personal: [
    { month: "Jan", balance: 35000, spending: 32000 },
    { month: "Feb", balance: 38000, spending: 34000 },
    { month: "Mar", balance: 36000, spending: 33000 },
    { month: "Apr", balance: 39000, spending: 35000 },
    { month: "May", balance: 37000, spending: 34500 },
    { month: "Jun", balance: 40000, spending: 36000 },
    { month: "Jul", balance: 38500, spending: 35500 },
    { month: "Aug", balance: 41000, spending: 37000 },
    { month: "Sep", balance: 39500, spending: 36500 },
    { month: "Oct", balance: 42000, spending: 38000 },
    { month: "Nov", balance: 40500, spending: 37500 },
    { month: "Dec", balance: 40206, spending: 37200 },
  ],
  Business: [
    { month: "Jan", balance: 95000, spending: 85000 },
    { month: "Feb", balance: 102000, spending: 92000 },
    { month: "Mar", balance: 98000, spending: 88000 },
    { month: "Apr", balance: 110000, spending: 95000 },
    { month: "May", balance: 115000, spending: 98000 },
    { month: "Jun", balance: 120000, spending: 102000 },
    { month: "Jul", balance: 118000, spending: 100000 },
    { month: "Aug", balance: 125000, spending: 105000 },
    { month: "Sep", balance: 122000, spending: 103000 },
    { month: "Oct", balance: 128000, spending: 108000 },
    { month: "Nov", balance: 126000, spending: 106000 },
    { month: "Dec", balance: 125840, spending: 105200 },
  ],
  Credit: [
    { month: "Jan", balance: 5000, spending: 4500 },
    { month: "Feb", balance: 5500, spending: 5000 },
    { month: "Mar", balance: 6000, spending: 5200 },
    { month: "Apr", balance: 6500, spending: 5800 },
    { month: "May", balance: 7000, spending: 6200 },
    { month: "Jun", balance: 7500, spending: 6800 },
    { month: "Jul", balance: 8000, spending: 7200 },
    { month: "Aug", balance: 8200, spending: 7400 },
    { month: "Sep", balance: 8100, spending: 7300 },
    { month: "Oct", balance: 8300, spending: 7500 },
    { month: "Nov", balance: 8400, spending: 7600 },
    { month: "Dec", balance: 8450, spending: 7650 },
  ],
}

interface BalanceChartProps {
  activeTab: string
}

export function BalanceChart({ activeTab }: BalanceChartProps) {
  const data = chartData[activeTab as keyof typeof chartData] || chartData.Personal

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#6B7280" }}
            className="text-xs"
          />
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 3, fill: "#8B5CF6" }}
          />
          <Line
            type="monotone"
            dataKey="spending"
            stroke="#EC4899"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 3, fill: "#EC4899" }}
            // strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
