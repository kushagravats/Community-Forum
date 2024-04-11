/* eslint-disable no-unused-vars */
import React from "react";

function PhotographyGuide() {
  return (
    <div className="photography-guide">
      <h2>Essential Photography Guide</h2>
      <section className="guide-section">
        <h3>Equipment Essentials</h3>
        <ul>
          <li>Camera (DSLR, mirrorless, or high-quality smartphone)</li>
          <li>
            Interchangeable lenses (wide-angle, telephoto, macro - optional)
          </li>
          <li>Tripod for stability during long exposures or low-light shots</li>
          <li>Extra batteries and memory cards</li>
          <li>Camera bag for protection and organization</li>
        </ul>
      </section>
      <section className="guide-section">
        <h3>Basic Photography Techniques</h3>
        <ul>
          <li>
            Aperture: Controls depth of field (blurry background or sharp focus)
          </li>
          <li>
            Shutter Speed: Controls motion blur and light capture (fast for
            action, slow for trails)
          </li>
          <li>ISO: Controls light sensitivity (higher ISO introduces noise)</li>
          <li>
            Composition: Rule of thirds, leading lines, negative space for
            balanced shots
          </li>
          <li>
            Lighting: Natural vs. artificial light, understanding light
            direction and shadows
          </li>
        </ul>
      </section>
      <section className="guide-section">
        <h3>Photography Genres</h3>
        <p>Explore different photography styles to find your passion:</p>
        <ul>
          <li>Landscape Photography: Capturing the beauty of nature</li>
          <li>Portrait Photography: Focusing on people and emotions</li>
          <li>Street Photography: Capturing candid moments in public spaces</li>
          <li>
            Wildlife Photography: Photographing animals in their natural habitat
          </li>
          <li>
            Macro Photography: Close-up shots of tiny details and textures
          </li>
        </ul>
      </section>
      <section className="guide-section">
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <a
              href="https://www.photographylife.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photography Life Tutorials
            </a>
          </li>
          <li>
            <a
              href="https://www.digital-photography-school.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Photography School
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/PeterMcKinnon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Peter McKinnon YouTube Channel
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PhotographyGuide;
