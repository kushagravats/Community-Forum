/* eslint-disable no-unused-vars */
import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "International Yoga Festival",
      location: "Rishikesh, Uttarakhand",
      date: "2024-05-16",
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      description:
        "Join yogis from around the world for a week-long celebration of yoga, meditation, and spiritual exploration.",
      link: "https://www.internationalyogafestival.com",
      image: "https://example.com/yoga-festival.jpg",
      resources: [
        {
          title: "Accommodation Options",
          link: "https://example.com/accommodation-rishikesh",
        },
        {
          title: "Nearby Attractions",
          link: "https://example.com/rishikesh-attractions",
        },
      ],
    },
    {
      id: 2,
      title: "Pushkar Camel Fair",
      location: "Pushkar, Rajasthan",
      date: "2024-11-28",
      startTime: "10:00 AM",
      endTime: "6:00 PM",
      description:
        "Experience the vibrant colors and rich culture of Rajasthan at the annual Pushkar Camel Fair.",
      link: "https://www.pushkarcamelfair.com",
      image: "https://example.com/pushkar-camel-fair.jpg",
      resources: [
        {
          title: "Travel Guide",
          link: "https://example.com/pushkar-guide",
        },
        {
          title: "Local Cuisine",
          link: "https://example.com/pushkar-cuisine",
        },
      ],
    },
    {
      id: 3,
      title: "Hornbill Festival",
      location: "Kisama, Nagaland",
      date: "2024-12-01",
      startTime: "10:00 AM",
      endTime: "6:00 PM",
      description:
        "Celebrate the vibrant cultures of Nagaland with traditional music, dance, and crafts.",
      link: "https://www.hornbillfestival.com",
      image: "https://example.com/hornbill-festival.jpg",
      resources: [
        {
          title: "Festival Guide",
          link: "https://example.com/hornbill-guide",
        },
        {
          title: "Nearby Attractions",
          link: "https://example.com/nagaland-attractions",
        },
      ],
    },
    {
      id: 4,
      title: "Kumbh Mela",
      location: "Haridwar, Uttarakhand",
      date: "2025-04-01",
      startTime: "6:00 AM",
      endTime: "6:00 PM",
      description:
        "Join millions of devotees in one of the largest religious gatherings in the world.",
      link: "https://www.kumbhmela.com",
      image: "https://example.com/kumbh-mela.jpg",
      resources: [
        {
          title: "Travel Tips",
          link: "https://example.com/kumbh-tips",
        },
        {
          title: "Pilgrimage Sites",
          link: "https://example.com/haridwar-sites",
        },
      ],
    },
  ];

  return (
    <div className="upcoming-events-container">
      <h2>Upcoming Events in India</h2>
      <div className="events-container">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <p className="event-info">
              {event.date} | {event.startTime} - {event.endTime} <br />
              {event.location}
            </p>
            <p className="event-description">{event.description}</p>
            <div className="event-links">
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
              {event.resources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-resource-link"
                >
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
