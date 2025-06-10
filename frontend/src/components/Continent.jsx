// src/components/Continent.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Continent.css";

const Continent = () => {
  const { name } = useParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/countries/${name}`);
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Invalid data format");
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [name]);

  if (loading) return <p>Loading countries for {name}...</p>;
  if (error) return <p>Error: {error}</p>;
  if (countries.length === 0) return <p>No countries found for {name}</p>;

  return (
    <div className="continent-wrapper">
      <h2 className="continent-title">Countries in {name}</h2>
      <div className="country-grid">
        {countries.map((country) => (
          <div key={country._id || country.name} className="country-card">
            <h3>{country.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Continent;
