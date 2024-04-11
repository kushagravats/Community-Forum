/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const trips = [
  {
    id: 1,
    title: "The Golden Triangle: Delhi, Agra, Jaipur",
    image: "path/to/golden-triangle-india.jpg",
    description:
      "Explore the rich history and architectural marvels of India's most iconic cities - Delhi, Agra (home to the Taj Mahal), and Jaipur (the Pink City).",
  },
  {
    id: 2,
    title: "Kerala Backwaters & Hill Stations",
    image: "path/to/kerala-backwaters-india.jpg",
    description:
      "Cruise through the serene backwaters of Kerala, a network of canals and lagoons, and experience the breathtaking beauty of the hill stations like Munnar.",
  },
  {
    id: 3,
    title: "The Himalayas: Trekking in Ladakh & Kashmir",
    image: "path/to/himalayas-india.jpg",
    description:
      "Embark on a challenging yet rewarding trek through the majestic Himalayas, offering stunning landscapes and a glimpse into the local culture of Ladakh and Kashmir.",
  },
  {
    id: 4,
    title: "Rajasthan: Forts, Palaces & Desert Safari",
    image: "path/to/rajasthan-india.jpg",
    description:
      "Immerse yourself in the royal heritage of Rajasthan, visiting magnificent forts, opulent palaces, and experiencing the thrill of a desert safari in the Thar Desert.",
  },
  {
    id: 5,
    title: "Goa: Beaches & Coastal Paradise",
    image: "path/to/goa-india.jpg",
    description:
      "Relax on the pristine beaches of Goa, known for its laid-back atmosphere, delicious seafood, and vibrant nightlife.",
  },
];

function TravelTrips() {
  return (
    <div className="travel-trips">
      <h2>Explore Incredible India</h2>
      <div className="trip-cards">
        {trips.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <Link to={`/india-trip/${trip.id}`} className="trip-card-link">
              <img
                src={trip.image}
                alt={trip.title}
                className="trip-card-image"
              />
              <h3 className="trip-card-title">{trip.title}</h3>
              <p className="trip-card-description">{trip.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelTrips;
