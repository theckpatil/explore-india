// src/components/RegionInfo.js
import React, { useState, useEffect } from 'react';

const RegionInfo = ({ dataFile, defaultRegion, selectId, updateFunction }) => {
  const [regionData, setRegionData] = useState({});
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataFile);
        const data = await response.json();
        setRegionData(data);
        updateFunction(data, defaultRegion); // Initialize with default selection
      } catch (error) {
        console.error(`Error loading data: ${error}`);
      }
    };

    fetchData();
  }, [dataFile, defaultRegion, updateFunction]);

  const handleChange = (e) => {
    const newRegion = e.target.value;
    setSelectedRegion(newRegion);
    updateFunction(regionData, newRegion);
  };

  return (
    <select id={selectId} value={selectedRegion} onChange={handleChange}>
      {Object.keys(regionData).map((region) => (
        <option key={region} value={region}>{regionData[region].name}</option>
      ))}
    </select>
  );
};

export default RegionInfo;
