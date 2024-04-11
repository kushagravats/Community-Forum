/* eslint-disable no-unused-vars */
import React from "react";

const discussions = [
  {
    id: 1,
    title: "Hidden Gems in Italy Beyond Rome and Florence",
    link: "https://www.reddit.com/r/travel/comments/11gx4z5/hidden_gems_in_italy_beyond_rome_and_florence/",
    summary:
      "Travelers share their off-the-beaten-path recommendations for charming towns, breathtaking landscapes, and unique cultural experiences in Italy.",
  },
  {
    id: 2,
    title: "Best Street Food Destinations in Southeast Asia",
    link: "https://www.reddit.com/r/travel/comments/11gx6zb/best_street_food_destinations_in_southeast_asia/",
    summary:
      "Explore some of the most tantalizing street food destinations across Southeast Asia, shared by fellow foodies and travelers.",
  },
  {
    id: 3,
    title: "Tips for Solo Travel Safety",
    link: "https://www.lonelyplanet.com/news/2021/03/10/solo-travel-tips/",
    summary:
      "Learn tips and advice from experienced solo travelers on how to stay safe and make the most out of your solo adventures.",
  },
];

const additionalResources = [
  {
    id: 1,
    title: "Top Travel Blogs for Inspiration",
    link: "https://www.nomadicmatt.com/travel-blogs/",
  },
  {
    id: 2,
    title: "Travel News and Updates",
    link: "https://www.cntraveler.com/",
  },
  {
    id: 3,
    title: "Local Travel Guides and Insights",
    link: "https://www.natgeotraveller.in/",
  },
];

const HotDiscussions = () => {
  return (
    <div className="hot-discussions-container">
      <h2 className="hot-discussions-heading">Hot Discussions for Travelers</h2>
      <p className="hot-discussions-intro">
        Get travel tips, share experiences, and learn from fellow adventurers!
      </p>

      <ul className="hot-discussions-list">
        {discussions.map((discussion) => (
          <li key={discussion.id}>
            <h3 className="hot-discussion-title">
              <a
                href={discussion.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {discussion.title}
              </a>
            </h3>
            <p className="hot-discussion-summary">{discussion.summary}</p>
          </li>
        ))}
      </ul>

      <div className="hot-discussions-resources">
        <h3>Additional Resources</h3>
        <ul className="additional-resources-list">
          {additionalResources.map((resource) => (
            <li key={resource.id}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hot-discussions-links">
        <a
          href="https://www.reddit.com/r/travel/"
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          See All Discussions (Travel Subreddit)
        </a>
        <a
          href="https://www.lonelyplanet.com/community/forums/"
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Lonely Planet Travel Community
        </a>
      </div>
    </div>
  );
};

export default HotDiscussions;
