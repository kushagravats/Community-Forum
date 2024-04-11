/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const DiscoverDestinations = () => {
  return (
    <div className="discover-destinations-container">
      <header className="discover-destinations-header">
        <h2 className="discover-destinations-heading">
          Discover Amazing Destinations in India{" "}
          <i className="fas fa-plane-departure"></i>
        </h2>
        <p className="discover-destinations-intro">
          Explore the vibrant landscapes, rich culture, and captivating
          experiences of India!
        </p>
      </header>

      {/* Featured Destinations */}
      <div className="destination-cards-container">
        <div className="destination-card">
          <img
            src="https://www.incredibleindia.org/content/incredible-india-v2/en/incredible-india.html"
            alt="Incredible India"
            className="destination-image"
          />
          <h3 className="destination-title">
            <a href="https://www.incredibleindia.org/content/incredible-india-v2/en.html">
              Incredible India
            </a>
          </h3>
          <p className="destination-description">
            Embark on a journey through diverse cultures, breathtaking
            landscapes, and timeless heritage.
          </p>
          <a href="https://www.exploreindia.ca/" className="button">
            Explore India
          </a>
        </div>

        <div className="destination-card">
          <img
            src="https://www.keralatourism.org/images/kerala-hero.jpg"
            alt="Kerala"
            className="destination-image"
          />
          <h3 className="destination-title">
            <a href="https://www.keralatourism.org/">
              Kerala: God's Own Country
            </a>
          </h3>
          <p className="destination-description">
            Discover serene backwaters, lush hills, pristine beaches, and
            rejuvenating Ayurvedic experiences.
          </p>
          <a href="https://www.holidify.com/state/kerala/" className="button">
            Read a Travel Guide
          </a>
        </div>

        <div className="destination-card">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/17/13/21/taj-mahal-3154652_960_720.jpg"
            alt="Taj Mahal"
            className="destination-image"
          />
          <h3 className="destination-title">
            <a href="https://www.tajmahal.gov.in/">
              Taj Mahal: A Monument of Love
            </a>
          </h3>
          <p className="destination-description">
            Witness the architectural marvel of the Taj Mahal, a symbol of
            eternal love.
          </p>
          <a href="https://www.taj-mahal.net/newtaj/" className="button">
            Take a Virtual Tour
          </a>
        </div>
      </div>

      {/* Travel Itineraries */}
      <div className="travel-itineraries">
        <h3 className="itineraries-heading">Curated Travel Itineraries</h3>
        <p className="itineraries-intro">
          Choose from a range of travel plans to suit your interests.
        </p>
        <ul className="itineraries-list">
          <li>
            <a
              href="https://www.lonelyplanet.com/india/itineraries"
              target="_blank"
              rel="noopener noreferrer"
            >
              10-Day Cultural Tour of India
            </a>
          </li>
          <li>
            <a
              href="https://www.tripsavvy.com/best-itineraries-in-india-1458479"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adventure Travel in India
            </a>
          </li>
          <li>
            <a
              href="https://www.tripsavvy.com/the-perfect-weekend-getaway-4656853"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Perfect Weekend Getaway
            </a>
          </li>
        </ul>
      </div>

      {/* Additional Resources */}
      <div className="discover-destinations-resources">
        <h3 className="resources-heading">
          Explore More Resources <i className="fas fa-globe-americas"></i>
        </h3>
        <ul className="resources-list">
          <li>
            <a href="https://www.lonelyplanet.com/india">Lonely Planet India</a>
          </li>
          <li>
            <a href="https://www.natgeotraveller.in/">
              National Geographic Traveller India
            </a>
          </li>
          <li>
            <a href="https://theculturetrip.com/asia/india/">
              The Culture Trip India
            </a>
          </li>
          <li>
            <a href="https://www.booking.com/">Booking.com</a>
          </li>
          <li>
            <a href="https://www.airbnb.com/">Airbnb India</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DiscoverDestinations;
