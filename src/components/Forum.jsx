/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCommentAlt,
  faUserCircle,
  faMapMarkedAlt,
  faPlane,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import "./forum.css";

const DiscussionForum = () => {
  const location = useLocation();

  // Define the forum sections with their respective titles, icons, and colors
  const forumSections = [
    {
      id: "hot-discussions",
      title: "Hot Discussions",
      icon: faStar,
      color: "#FFA500",
    },
    {
      id: "discover-destinations",
      title: "Discover Destinations",
      icon: faMapMarkedAlt,
      color: "#00BFFF",
    },
    {
      id: "expert-advice",
      title: "Expert Advice",
      icon: faUserCircle,
      color: "#32CD32",
    },
    {
      id: "upcoming-events",
      title: "Upcoming Events",
      icon: faCommentAlt,
      color: "#FF1493",
    },
  ];

  const additionalResources = [
    { title: "Travel Tips", icon: faPlane, link: "/travel-tips" },
    { title: "Photography Guide", icon: faCamera, link: "/photography-guide" },
  ];

  return (
    <div className="discussion-forum">
      <header className="discussion-forum__header">
        <div className="discussion-forum__logo">
          <h1 className="discussion-forum__headline">Discussion Forum</h1>
        </div>
        <nav className="discussion-forum__nav">
          <ul>
            {forumSections.map((section) => (
              <li
                key={section.id}
                className={`discussion-forum__nav-item ${
                  location.pathname === `/${section.id}` ? "active" : ""
                }`}
              >
                <Link to={`/${section.id}`}>
                  <FontAwesomeIcon
                    icon={section.icon}
                    className="discussion-forum__nav-icon"
                    style={{ color: section.color }}
                  />
                  <span className="discussion-forum__nav-text">
                    {section.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="discussion-forum__content">
        {/* Render discussion threads or other content here */}
      </main>

      <aside className="forum-sections">
        <h2 className="forum-sections__title">Explore Topics</h2>
        <ul className="forum-sections__list">
          {forumSections.map((section) => (
            <li
              key={section.id}
              className="forum-sections__item"
              style={{ backgroundColor: section.color }}
            >
              <Link to={`/${section.id}`} className="forum-sections__link">
                <FontAwesomeIcon
                  icon={section.icon}
                  className="forum-sections__icon"
                  style={{ color: "#fff" }}
                />
                <span className="forum-sections__text">{section.title}</span>
              </Link>
            </li>
          ))}
          {/* Additional Resources */}
          {additionalResources.map((resource) => (
            <li
              key={resource.title}
              className="forum-sections__item"
              style={{ backgroundColor: "#A0522D" }}
            >
              <Link to={resource.link} className="forum-sections__link">
                <FontAwesomeIcon
                  icon={resource.icon}
                  className="forum-sections__icon"
                  style={{ color: "#fff" }}
                />
                <span className="forum-sections__text">{resource.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default DiscussionForum;
