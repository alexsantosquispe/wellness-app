# Wellness App

This is a simple web application that displays a list of wellness services. It's built with React, Vite, and TypeScript, and it fetches data from a mock API.

## Live Demo

You can view the live demo here: [https://wellness-app-sigma-six.vercel.app/](https://wellness-app-sigma-six.vercel.app/)

## Features

- View a list of wellness sessions.
- View session details.
- Add sessions to favorites.
- Responsive design for different screen sizes.

## Screenshots

<div>
  <img src="./screenshots/desktop.webp" alt="Desktop view" width="65%"/>
  <img src="./screenshots/mobile.webp" alt="Mobile view" width="16%"/>
</div>

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **React Query:** A data-fetching library for React.
- **Redux Toolkit:** For state management.
- **React Redux:** Official React bindings for Redux.
- **Axios:** A promise-based HTTP client for the browser and Node.js.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/wellness-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Usage

To start the development server, run:

```sh
npm run dev
```

This will open the app in your browser at `http://localhost:5173`.

## API

The app fetches data from a mock API provided by [MockAPI](https://mockapi.io/). The base URL for the API is `https://6912ad5c52a60f10c8224b12.mockapi.io/api`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the code.
- `npm run format:check`: Checks the code formatting.
- `npm run format:write`: Formats the code.
