# Formula One Explorer

The **Formula One Explorer** is a web application built to explore Formula 1 seasons, races, and driver details. The app allows users to view available Formula 1 seasons, navigate race details, and compare driver performance. The app interacts with the **Ergast API** to fetch data related to Formula 1 seasons, races, and drivers.

This project aims to create an efficient, responsive, and scalable frontend for viewing historical Formula 1 data.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technical Approach & Architectural Decisions](#technical-approach--architectural-decisions)
- [Running Tests](#running-tests)

## Tech Stack

- **React**: Used for building UI components.
- **TypeScript**: Ensures static typing, reducing errors and improving maintainability.
- **Vite**: A fast build tool for a smooth development experience.
- **React Router**: Manages navigation between the app's pages.
- **Zustand**: Manages the global state, particularly for pinned races and user preferences.
- **Axios**: Used for API calls to fetch data from the Ergast API.
- **React Query**: Efficient data fetching and caching for API responses.
- **Nivo**: Provides interactive data visualizations for race performance.
- **ESLint**: Ensures code quality and consistency.

## Getting Started

To run the project on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd formula-one-explorer

```

### 2\. Install Dependencies

Install the project dependencies using npm or yarn:
`npm install`
Or, using yarn:
`yarn install`

### 3\. Run the Development Server

Start the development server:
`npm run dev`

### 4\. Build the Project

To build the project for production:
`npm run build`

## Features

1.  **Season Listing**: Displays all available Formula 1 seasons.

    - Users can click a season to load corresponding races.
    - Supports pagination to handle long season lists.
    - Toggle switch to view seasons in **List view** or **Card view**.

2.  **Races for a Season**: Fetches and displays races for a selected season.

    - Shows race name, circuit name, and race date.
    - Supports pagination and List/Card view toggle.
    - Users can **pin** favorite races to always appear at the top (with state persistence across page refreshes).

3.  **Race Details**: Provides detailed information about a race, including:

    - List of participating drivers with name, nationality, team, and position.
    - Performance Visualization: A chart comparing driver performance (e.g., time taken to complete the race).
    - (Optional) Ability to highlight specific drivers.

## Folder Structure

Here is an overview of the folder structure:

```bash
/src
  /assets              # Static assets (images, icons, etc.)
  /components          # Reusable UI components (e.g., buttons, race cards)
  /pages               # Pages for routing (e.g., HomePage, RaceDetailsPage)
  /store               # Zustand for global state (e.g., pinned races, season data)
  /api                 # Axios setup and React Query hooks for API calls
  /visualizations      # Nivo charts and other visualizations
  /types               # TypeScript types for type safety
/public
  index.html           # Main HTML file
```

## Technical Approach & Architectural Decisions

### 1\. **State Management**

State management is handled using **Zustand**, a lightweight and unopinionated state management library. We use Zustand to manage:

- **Pinned races**: To allow users to pin their favorite races.
- **pagination**: To manage the paginated queries when displayed via cards.

### 2\. **Data Fetching with React Query**

We use **React Query** to fetch data from the Ergast API efficiently. This library helps with:

- Caching and re-fetching data.
- Handling loading and error states automatically.

### 3\. **Race Performance Visualization**

For performance visualization, we use **Nivo**'s **Bar** chart to display driver performance based on race times or positions. This allows users to compare drivers easily and intuitively.

### 4\. **Routing with React Router**

The app uses **React Router** to manage navigation between pages:

- The **HomePage** Just a simple page with background image.
- The **Season list** rendering seasons cards.
- The **circuit** and **status** dummy pages rendering lorem ipsum text, just to demonstrate routing.

Also, there's a fallback route (App component) which reroutes to homepage, just to avoid issues in case the page route in the search bar was changed in a way to access a non-existent page

## Running Tests

To run unit tests, use the following command:

`npm run test`

This will run **Vitest**, which is set up to run unit tests for key components and logic.
