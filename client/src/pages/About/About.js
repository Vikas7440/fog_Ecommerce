import React from "react";
import { FaUserTie, FaLightbulb, FaCode, FaPalette } from "react-icons/fa";
import {
  AboutContainer,
  HeroSection,
  MissionSection,
  ValuesSection,
  TeamSection,
} from "./styles";

const About = () => {
  return (
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection>
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Discover who we are and what drives us forward.</p>
        </div>
      </HeroSection>

      {/* Mission Section */}
      <MissionSection>
        <h2>Our Mission</h2>
        <p>
          To inspire innovation, empower creativity, and deliver impactful
          solutions that make a difference in the world.
        </p>
      </MissionSection>

      {/* Values Section */}
      <ValuesSection>
        <h2>Our Core Values</h2>
        <ul>
          <li>
            <FaLightbulb className="icon" />
            <h3>Innovation</h3>
            <p>
              We constantly challenge ourselves to explore new ideas and
              solutions.
            </p>
          </li>
          <li>
            <FaUserTie className="icon" />
            <h3>Integrity</h3>
            <p>Honesty and fairness are at the heart of all our decisions.</p>
          </li>
          <li>
            <FaCode className="icon" />
            <h3>Excellence</h3>
            <p>
              We are committed to delivering high-quality solutions with
              precision and passion.
            </p>
          </li>
          <li>
            <FaPalette className="icon" />
            <h3>Creativity</h3>
            <p>
              Bringing innovative ideas to life through collaboration and
              artistry.
            </p>
          </li>
        </ul>
      </ValuesSection>

      {/* Team Section */}
      <TeamSection>
        <h2>Meet the Team</h2>
        <p>
          Our diverse team of professionals works tirelessly to turn your
          visions into reality.
        </p>
        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-member">
            <FaUserTie className="team-icon" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
            <p>
              A visionary leader with expertise in innovation and strategic
              growth.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="team-member">
            <FaCode className="team-icon" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
            <p>
              Passionate about crafting scalable, high-quality software
              solutions.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="team-member">
            <FaPalette className="team-icon" />
            <h3>Emily Brown</h3>
            <p>Creative Designer</p>
            <p>
              Dedicated to creating beautiful, user-centric designs with
              precision.
            </p>
          </div>
        </div>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;
