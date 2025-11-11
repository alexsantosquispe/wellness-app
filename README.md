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

## Technical Decisions

- **State Management:** The application uses a combination of Redux Toolkit and React Query for state management.
  - **Redux Toolkit** is used for managing global UI state, in order to temporary store the favorite sessions.
  - **React Query** is used for managing server state, including caching, refetching, and updating data from the API. This simplifies data fetching and reduces the amount of boilerplate code.

- **Styling:** The application is styled using **Tailwind CSS**, a utility-first CSS framework. This choice was made to enable rapid UI development and maintain a consistent design system.

- **Data Fetching:** **Axios** is used to make HTTP requests to the mock API. A centralized API client is created to handle all API requests, making it easy to configure and manage the API connection.

- **Code Structure:** The project follows an atomic design system, to organize the codebase in a more maintainable and scalable way.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:alexsantosquispe/wellness-app.git
   ```
   or
   ```sh
   git clone https://github.com/alexsantosquispe/wellness-app.git
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
