# Rick & Morty Feed

## Overview

Rick & Morty Feed is a React-based Next.js application that fetches and displays episodes and characters from the Rick & Morty API. It utilizes `@tanstack/react-query` for efficient data fetching and state management, `zustand` for state management, and `axios` for API calls.

## Features

- Fetch and display episodes from the Rick & Morty API
- Fetch and display characters based on the selected episode
- Uses `@tanstack/react-query` for optimized data fetching and caching
- Zustand for state management
- Jest and React Testing Library for unit testing

## Installation

Ensure you have **Node.js 18+** installed. Then, clone the repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/mayes243/rick-morty-feed.git

# Navigate to the project directory
cd rick-morty-feed

# Install dependencies
yarn install
```

## Usage

### Development Mode

To start the development server, run:

```sh
npm run dev
```

This will start the Next.js development server.

### Production Build

To build and serve the project in production mode:

```sh
npm run build
npm run start
```

## Testing

This project uses **Jest** and **React Testing Library** for unit testing.

Run all tests:

```sh
npm run test
```

Run tests in watch mode:

```sh
npm run test:watch
```

## Technologies Used

- **Next.js** 15.2.4
- **React** 19.0.0
- **TanStack React Query** 5.69.3
- **Zustand** 5.0.3
- **Axios** 1.8.4
- **Tailwind CSS** 4.x
- **Jest & React Testing Library** for testing
- **TypeScript** 5.x

## Project Structure

```
├── src
│   ├── components       # React components
│   ├── constants        # API endpoint constants
│   ├── hooks            # Custom React hooks
│   ├── store            # Zustand state management
│   ├── utils            # Utility functions
│   ├── pages            # Next.js pages
│   ├── styles           # Global styles
│   ├── __tests__        # Global styles
├── public               # Static assets
├── jest.setup.ts        # Jest configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
```