// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const continents = [
  { name: "Africa", image: "/images/Africa.jpg" },
  { name: "Asia", image: "/images/Asia.jpg" },
  { name: "Europe", image: "/images/Europe.jpg" },
  { name: "North America", image: "/images/North America.jpg" },
  { name: "South America", image: "/images/South America.jpg" },
  { name: "Australia", image: "/images/Australia.jpg" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-header">
        <h1 className="glow-title">World Tour Guide</h1>
        <p className="home-subtitle">Discover breathtaking places across continents</p>
      </div>

      <div className="continents-grid">
        {continents.map(({ name, image }) => (
          <div
            key={name}
            className="continent-card"
            onClick={() => navigate(`/continent/${name}`)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(`/continent/${name}`);
            }}
          >
            <img src={image} alt={name} className="continent-image" />
            <div className="glass-overlay" />
            <h3 className="continent-label">{name}</h3>
            <span className="glow-ring" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
