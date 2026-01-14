# My Project

> A modern React dashboard project built with Vite, Tailwind CSS, Radix UI, and React Query.

---

## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## About

This project is a responsive, modular dashboard template using **React**, **TypeScript**, **Tailwind CSS**, and **Radix UI components**. It leverages **React Query** for data fetching and state management, and is optimized for modern development with **Vite**.

The dashboard includes:

- Partner statistics cards
- Program growth charts
- Inbox panel
- Lead status updates
- Tabs, badges, and interactive UI elements

---

## Technologies

- **React 19** — Frontend library
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **Radix UI** — Accessible, unstyled UI primitives
- **React Query** — Data fetching and caching
- **Lucide React** — Icon library
- **React CountUp** — Animated numeric counters

---

## Features

- Responsive dashboard layout
- Interactive tabs and collapsibles
- Animated charts and progress bars
- Scrollable components
- Skeleton loading for API data
- Mobile-friendly search dialog
- Dark/light mode compatible
- Modular component architecture for scalability

---

## Getting Started

### Prerequisites

Make sure you have **Node.js >= 20** and **npm** installed.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ZubairBasharat/Revomadic-test-task.git
cd Revomadic-test-task

```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\

## Here's the live Link

https://revomadic-test-task.vercel.app/


## Folder Structure

── 📁src
    └── 📁api
        ├── approvals.api.ts
        ├── dashboardHeader.api.ts
        ├── dashboardTabs.api.ts
        ├── fakeDelay.ts
        ├── inbox.api.ts
        ├── leadStatus.api.ts
        ├── partnerFunnel.api.ts
        ├── partnerSubHeader.api.ts
        ├── payoutGrowth.api.ts
        ├── programGrowth.api.ts
        ├── stats.api.ts
    └── 📁assets
        ├── react.svg
    └── 📁components
        └── 📁common
            ├── LazyLoadOnView.tsx
            ├── Searchbar.tsx
            ├── SearchDialog.tsx
        └── 📁dashboard
            └── 📁approvals
                ├── ApprovalCard.tsx
                ├── NeedsApprovalSection.tsx
            └── 📁funnel
                ├── PartnerFunnelCard.tsx
            └── 📁growth
                ├── ProgramGrowthCard.tsx
            └── 📁inbox
                ├── InboxPanel.tsx
            └── 📁main
                ├── MainContent.tsx
            └── 📁payout
                ├── PayoutGrowthCard.tsx
            └── 📁stats
                ├── statsCardDesign.tsx
                ├── StatsRow.tsx
            └── 📁statusbar
                ├── index.tsx
            └── 📁tabs
                ├── DashboardTabs.tsx
                ├── SubHeader.tsx
        └── 📁partials
            ├── DashboardGrid.tsx
            ├── DashboardLayout.tsx
            ├── Navbar.tsx
        └── 📁ui
            ├── alert.tsx
            ├── animatedProgress.tsx
            ├── avatar.tsx
            ├── badge.tsx
            ├── breadcrumb.tsx
            ├── button.tsx
            ├── calendar.tsx
            ├── card.tsx
            ├── checkbox.tsx
            ├── collapsible.tsx
            ├── dialog.tsx
            ├── dropdown-menu.tsx
            ├── input.tsx
            ├── label.tsx
            ├── popover.tsx
            ├── progress.tsx
            ├── scroll-area.tsx
            ├── separator.tsx
            ├── skeleton.tsx
            ├── sonner.tsx
            ├── tabs.tsx
            ├── tooltip.tsx
    └── 📁hooks
        ├── useApprovals.ts
        ├── useDashboardTabs.ts
        ├── useDashboardUser.ts
        ├── useInbox.ts
        ├── useLeadStatus.ts
        ├── usePartnerFunnel.ts
        ├── usePartnerTabs.ts
        ├── usePayoutGrowth.ts
        ├── useProgramGrowth.ts
        ├── useStatsCard.ts
    └── 📁lib
        ├── utils.ts
    └── 📁pages
        ├── Home.tsx
    ├── App.css
    ├── App.tsx
    ├── index.css
    └── main.tsx

## Main Dependencies

"React": "19.2.0"
"typescript": "~5.9.3",
"typescript-eslint": "^8.46.4",
"vite": "^7.2.4",
"tanstack/react-query": "^5.90.17",
"react-countup": "^6.5.3",
"tailwindcss": "^4.1.18",
"lucide-react": "^0.562.0"
"Radix UI/ShadCn"

## My Choice

- **React 19.2.0**: Chosen for its component-based architecture and virtual DOM for efficient UI updates. Used as the core library for building the user interface, enabling modular and reusable components like dashboard cards and panels.
- **TypeScript ~5.9.3**: Selected for static typing to catch errors early and improve code maintainability. Used throughout the project for type-safe development, especially in API integrations and component props.
- **typescript-eslint ^8.46.4**: Adopted to enforce coding standards and best practices in TypeScript code. Used for linting to ensure consistent code quality and prevent common mistakes.
- **Vite ^7.2.4**: Picked for its fast build times and modern development experience. Used as the build tool and dev server for quick hot reloading and optimized production builds.
- **tanstack/react-query ^5.90.17**: Chosen for efficient data fetching, caching, and synchronization. Used for managing API calls in hooks like useStatsCard and useInbox, providing loading states and error handling.
- **react-countup ^6.5.3**: Selected for animated numeric displays. Used in stats cards to animate numbers like partner counts and growth metrics for a dynamic user experience.
- **tailwindcss ^4.1.18**: Adopted for utility-first CSS to speed up styling without custom CSS files. Used extensively for responsive layouts, colors, and spacing in components like DashboardGrid and Navbar.
- **lucide-react ^0.562.0**: Chosen for a consistent and modern icon set. Used for icons in buttons, tabs, and UI elements throughout the dashboard.
- **Radix UI/ShadCn**: Selected for accessible, unstyled UI primitives that integrate well with Tailwind. Used for components like Dialog, Tabs, and Tooltip to build a polished, accessible interface.

---