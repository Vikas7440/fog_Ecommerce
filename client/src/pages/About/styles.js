import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
`;

export const HeroSection = styled.div`
  text-align: center;
  padding: 50px 20px;
  background: #f9f1e7;
  color: #b88e2f;

  .hero-overlay {
    padding: 20px;
    border-radius: 10px;
    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export const MissionSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #ffffff;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const ValuesSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f1f1f1;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    li {
      max-width: 250px;
      text-align: center;
      padding: 20px;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      .icon {
        font-size: 3rem;
        color: #b88e2f;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        color: #666;
      }
    }
  }
`;

export const TeamSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #ffffff;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
  }

  .team-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .team-member {
      max-width: 300px;
      text-align: center;
      padding: 20px;
      background: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      .team-icon {
        font-size: 4rem;
        color: #b88e2f;
        margin-bottom: 15px;
      }

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        color: #666;
      }
    }
  }
`;
