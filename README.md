# 💸 FXDX Financial Dashboard

<div align="center">

![FXDX Logo](https://img.shields.io/badge/FXDX-Dashboard-blueviolet?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-yellow?style=for-the-badge)

**A modern and responsive financial dashboard for managing cards, tracking spending, analyzing insights, and generating reports.**

[Features](#-features) •
[Quick Start](#-getting-started) •
[Project Structure](#-project-structure) •
[Theming](#-customization--theming) •
[Contributing](#-contributing)

</div>

---

## ✨ Features

<table>
<tr>
<td>

### 📊 Dashboard Overview
- Live balance view
- Recent transactions
- Key statistics

</td>
<td>

### 💳 Cards Management
- Add & manage multiple cards
- Interactive visuals
- Quick actions

</td>
</tr>
<tr>
<td>

### 📈 Analytics
- Expense & income charts
- Category-wise spend
- Weekly/monthly breakdown

</td>
<td>

### 📄 Reports
- Generate & download:
  - Financial
  - Tax
  - Investment
  - Expense

</td>
</tr>
<tr>
<td>

### 🌗 UI/UX
- Responsive on all screens
- Accessible components
- Built-in dark mode

</td>
<td>

### 🔧 Stack
- ⚡ Next.js 15
- ⚛️ React 19
- 🎨 Tailwind CSS 4
- 📉 Recharts
- 🧩 Lucide Icons

</td>
</tr>
</table>

---

## 📁 Project Structure

```
fxdx-financial-dashboard/
├── public/                         # Static assets (images/icons)
├── src/
│   ├── app/                        # App entry, layout, globals
│   ├── components/
│   │   ├── dashboard/              # Cards, analytics, reports
│   │   └── ui/                     # Buttons, Inputs, Labels
├── tailwind.config.js             # Tailwind CSS config
├── postcss.config.js              # PostCSS config
├── next.config.js                 # Next.js config
└── README.md                      # You're here!
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fxdx-financial-dashboard.git
cd fxdx-financial-dashboard
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization & Theming

- Built with Tailwind CSS utilities
- Dark & Light mode ready
- Theming support using Tailwind config & CSS variables
- Easily tweakable component structure

---

## 🧪 Scripts

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm run lint       # Run lint checks
```

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a new branch
3. 💾 Commit your changes
4. 📤 Push the branch
5. 🔁 Open a pull request

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

<div align="center">

**Made with 💖 by the FXDX Team**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=fxdx-financial-dashboard)

</div>
---

## 🏗️ Architecture

```mermaid
graph TB
    A[User Interface - Browser] --> B[Next.js React App]
    B --> C[Dashboard Components]
    B --> D[Analytics and Chart Engine]
    B --> E[Cards and Reports Modules]
    B --> I[State Management / API Layer]

    C --> F[Reusable UI Components]
    D --> G[Chart Rendering and Data Mapping]
    E --> H[PDF and CSV Report Generation]
    I --> J[Data Sources / APIs / Storage]
    J --> K[Backend APIs or External Integrations]

    subgraph "Dashboard Layer"
        C
        D
        E
    end

    subgraph "Report & Visualization"
        G
        H
    end

    subgraph "Core Logic"
        F
        I
    end

    subgraph "Backend Integrations"
        K1[REST APIs]
        K2[GraphQL APIs]
        K3[Database Queries]
    end

    K --> K1
    K --> K2
    K --> K3

    style B fill:#f0f0ff,stroke:#999,stroke-width:2px
    style I fill:#f5f5f5,stroke:#ccc,stroke-width:1px
```

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- 🎮 Steam Web API for game integration
- 🔗 Various OAuth providers for authentication
- ⛓️ Ethereum and Solana ecosystems for blockchain features
- 🛠️ Open source community for amazing tools and libraries

---

<div align="center">

**Made with ❤️ for the gaming community**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=gamex-backend)
![Last Commit](https://img.shields.io/github/last-commit/username/gamex-backend)
![Issues](https://img.shields.io/github/issues/username/gamex-backend)

</div> 


