"use client"

import { AnalyticsPage } from "@/components/dashboard/analytics-page"
import { CardsPage } from "@/components/dashboard/cards-page"
import { MainDashboard } from "@/components/dashboard/main-dashboard"
import { ReportsPage } from "@/components/dashboard/reports-page"
import { RightSidebar } from "@/components/dashboard/right-dashboard"
import { Sidebar } from "@/components/dashboard/sidebar"
import { useState } from "react"
// import { Sidebar } from "@/components/sidebar"
// import { MainDashboard } from "@/components/main-dashboard"
// import { RightSidebar } from "@/components/right-sidebar"
// import { CardsPage } from "@/components/pages/cards-page"
// import { AnalyticsPage } from "@/components/pages/analytics-page"
// import { ReportsPage } from "@/components/pages/reports-page"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case "cards":
        return <CardsPage />
      case "analytics":
        return <AnalyticsPage />
      case "reports":
        return <ReportsPage />
      default:
        return (
          <>
            <MainDashboard />
            <RightSidebar />
          </>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex-1 flex overflow-hidden">{renderPage()}</div>
    </div>
  )
}
