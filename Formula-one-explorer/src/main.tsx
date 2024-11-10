import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RaceDetails } from "./pages/RaceDetails.tsx";
import { SeasonListing } from "./pages/SeasonListing.tsx";
import { RacesForASeason } from "./pages/RacesForASeason.tsx";

const queryClient = new QueryClient();
/** Route strings */

export const CircuitsRoute: string = "/circuits";
export const StatusRoute: string = "/status";
export const SeasonListingRoute: string = "/season-listing";
export const RacesForASeasonRoute: string = "/season-listing/:seasonId/races";
export const RaceDetailsRoute: string =
  "/season-listing/:seasonId/:round/results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
  },
  {
    path: SeasonListingRoute,
    element: <SeasonListing />,
    errorElement: <App />,
  },
  {
    path: RacesForASeasonRoute,
    element: <RacesForASeason />,
    errorElement: <App />,
  },
  {
    path: RaceDetailsRoute,
    element: <RaceDetails />,
    errorElement: <App />,
  },
  { path: CircuitsRoute, element: <App />, errorElement: <App /> }, //!Create separate pages
  { path: StatusRoute, element: <App />, errorElement: <App /> },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    {/* <RouterProvider router={router} /> */}
    {/* 
      <App />
      <RoutesComponent /> */}
    <RouterProvider router={router} />
  </QueryClientProvider>
);
