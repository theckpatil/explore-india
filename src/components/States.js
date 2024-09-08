import React, { useState, useEffect } from 'react';

// Importing the JSON data
import stateData from '../assets/data/states.json'; 

const States = () => {
  const [selectedState, setselectedState] = useState('Maharashtra'); 
  const [stateInfo, setstateInfo] = useState(stateData['Maharashtra']); 

  // Handle selection change
  const handleUTChange = (event) => {
    setselectedState(event.target.value); 
  };

  useEffect(() => {
    if (stateData[selectedState]) {
      setstateInfo(stateData[selectedState]); 
    }
  }, [selectedState]);

  return (
    <section id="state" className="region-section">
      <h2 className="section-title">States</h2>
      <div className="int-sec">
        <h3>Explore States</h3>
        <div className="region-selector">
          <h4>Select State :</h4>
          <select id="state-select" className="region-select" value={selectedState} onChange={handleUTChange}>
          {Object.keys(stateData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
      {stateInfo && (
        <div className="culture-interactive">
          <div className="region-info-container">
            <div className="region-image">
              <img src={stateInfo.image} alt={`${stateInfo.name} image`} id="state-image" />
            </div>
            <div className="region-info">
              <h1 id="state-name" style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '25px' }}>
                {stateInfo.name}
              </h1>
              <hr className="hrb" />
              <p id="state-description">{stateInfo.description}</p>
              <hr className="hra" />
              <ul className="region-highlights">
                <li>
                  <strong>State Capital:</strong> <span id="state-capital">{stateInfo.capital}</span>
                </li>
                <li>
                  <strong>Official Language :</strong> <span id="state-language">{stateInfo.language}</span>
                </li>
                <li>
                  <strong>Population :</strong> <span id="state-population" className="Population">{stateInfo.population}</span>
                </li>
                <li>
                  <strong>Popular Sport :</strong> <span id="state-sport">{stateInfo.sport}</span>
                </li>
                <li>
                  <strong>Famous Landmark :</strong> <span id="state-landmark">{stateInfo.landmark}</span>
                </li>
                <li>
                  <strong>Traditional Dress :</strong> <span id="state-dress">{stateInfo.dress}</span>
                </li>
                <li>
                  <strong>Popular Festival :</strong> <span id="state-festival">{stateInfo.festival}</span>
                </li>
                <li style={{ textAlign: 'center' }}>
                  <a href={stateInfo.wiki_link} target="_blank" className="learn-more" id="state-wiki-link" style={{ marginRight: '30px', marginTop: '10px' }}>
                    Wikipedia
                  </a>
                  <a href={stateInfo.official_link} target="_blank" className="learn-more" id="state-official-link">
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

export default States;
