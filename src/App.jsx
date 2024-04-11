/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Forum from "./components/Forum";
import HotDiscussions from "./components/HotDiscussions";
import DiscoverDestinations from "./components/DiscoverDestionations";
import ExpertAdvice from "./components/ExpertAdvice";
import UpcomingEvents from "./components/UpcomingEvents";
import TravelTrips from "./components/TravelTrips";
import PhotographyGuide from "./components/PhotographyGuide";

function App() {
  const routes = [
    { path: "/", element: <Forum /> },
    { path: "/hot-discussions", element: <HotDiscussions /> },
    { path: "/discover-destinations", element: <DiscoverDestinations /> },
    { path: "/expert-advice", element: <ExpertAdvice /> },
    { path: "/upcoming-events", element: <UpcomingEvents /> },
    { path: "/travel-trips", element: <TravelTrips /> },
    { path: "/photography-guide", element: <PhotographyGuide /> },
  ];

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                // @ts-ignore
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/hot-discussions">Hot Discussions</NavLink>
            </li>
            <li>
              <NavLink to="/discover-destinations">
                Discover Destinations
              </NavLink>
            </li>
            <li>
              <NavLink to="/expert-advice">Expert Advice</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming-events">Upcoming Events</NavLink>
            </li>
            <li>
              <NavLink to="/travel-trips">Travel Trips</NavLink>
            </li>
            <li>
              <NavLink to="/photography-guide">Photography Guide</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
