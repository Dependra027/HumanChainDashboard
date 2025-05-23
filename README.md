# AI Safety Incident Dashboard

A modern, responsive dashboard for tracking and reporting AI safety incidents. Built with React, TypeScript, and Tailwind CSS.

## Features

- View and manage AI safety incidents
- Filter incidents by severity (Low, Medium, High)
- Sort incidents by date (newest/oldest)
- Report new incidents with a user-friendly form
- Modern, responsive design with smooth animations
- Polished UI with consistent styling
- Accessible components with proper ARIA attributes

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 7.0.0 or higher

### Installation

1. Create React app

->npm create vite@latest any name -- --template react-ts

2. Install dependencies:

->npm install


3. Start the development server:

->npm run dev


The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

-> npm run build


The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── Dashboard.tsx  # Main dashboard component
│   ├── FilterBar.tsx  # Filtering and sorting controls
│   ├── IncidentCard.tsx  # Individual incident display
│   └── NewIncidentForm.tsx  # Form for new incidents
├── data/
│   └── mockIncidents.ts  # Sample incident data
├── types/
│   └── index.ts      # TypeScript type definitions
├── App.tsx           # Root component
└── main.tsx         # Application entry point
```

## Design Decisions

- Used Tailwind CSS for rapid styling and consistent design system
- Implemented responsive design with mobile-first approach
- Added smooth transitions and animations for better UX
- Used semantic HTML and ARIA attributes for accessibility
- Implemented form validation for data integrity
- Used TypeScript for type safety and better developer experience

#   H u m a n C h a i n D a s h b o a r d  
 