import React, { useState, useEffect } from 'react';

// Importing the JSON data
import utData from '../assets/data/uts.json'; // Assuming the UT data is in this JSON file

const UnionTerritories = () => {
  const [selectedUT, setSelectedUT] = useState('delhi'); // Default to Delhi
  const [utInfo, setUTInfo] = useState(null); // State to store the UT info

  // Handle selection change
  const handleUTChange = (event) => {
    setSelectedUT(event.target.value); // Update the selected UT
  };

  // Fetch UT data when selected UT changes
  useEffect(() => {
    if (utData[selectedUT]) {
      setUTInfo(utData[selectedUT]); // Set UT info based on the selected UT
    }
  }, [selectedUT]);

  return (
    <section id="UT" className="region-section">
      <h2 className="section-title">Union Territories</h2>
      <div className="int-sec">
        <h3>Explore UT</h3>
        <div className="region-selector">
          <h4>Select UT:</h4>
          <select id="ut-select" className="region-select" value={selectedUT} onChange={handleUTChange}>
            <option value="andaman_nicobar">Andaman & Nicobar</option>
            <option value="chandigarh">Chandigarh</option>
            <option value="dadra_nagar_haveli_daman_diu">Dadra & Nagar Haveli</option>
            <option value="delhi">Delhi</option>
            <option value="jammu_kashmir">Jammu and Kashmir</option>
            <option value="lakshadweep">Lakshadweep</option>
            <option value="ladakh">Ladakh</option>
            <option value="puducherry">Puducherry</option>
          </select>
        </div>
      </div>
      {utInfo && (
        <div className="culture-interactive">
          <div className="region-info-container">
            <div className="region-image">
              <img src={utInfo.image} alt={`${utInfo.name} image`} id="ut-image" />
            </div>
            <div className="region-info">
              <h1 id="ut-name" style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '25px' }}>
                {utInfo.name}
              </h1>
              <hr className="hrb" />
              <p id="ut-description">{utInfo.description}</p>
              <hr className="hra" />
              <ul className="region-highlights">
                <li>
                  <strong>UT Capital:</strong> <span id="ut-capital">{utInfo.capital}</span>
                </li>
                <li>
                  <strong>Official Language :</strong> <span id="ut-language">{utInfo.language}</span>
                </li>
                <li>
                  <strong>Population :</strong> <span id="ut-population" className="Population">{utInfo.population}</span>
                </li>
                <li>
                  <strong>Popular Sport :</strong> <span id="ut-sport">{utInfo.sport}</span>
                </li>
                <li>
                  <strong>Famous Landmark :</strong> <span id="ut-landmark">{utInfo.landmark}</span>
                </li>
                <li>
                  <strong>Traditional Dress :</strong> <span id="ut-dress">{utInfo.dress}</span>
                </li>
                <li>
                  <strong>Popular Festival :</strong> <span id="ut-festival">{utInfo.festival}</span>
                </li>
                <li style={{ textAlign: 'center' }}>
                  <a href={utInfo.wiki_link} target="_blank" className="learn-more" id="ut-wiki-link" style={{ marginRight: '30px', marginTop: '10px' }}>
                    Wikipedia
                  </a>
                  <a href={utInfo.official_link} target="_blank" className="learn-more" id="ut-official-link">
                    Official Site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UnionTerritories;
