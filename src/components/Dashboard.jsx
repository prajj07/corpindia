import React from 'react';
import MapChart from '../IndiaMap'; // adjust the path as per your folder structure

const Dashboard = () => {
  const handleStateClick = (state) => {
    console.log(`Clicked on ${state.name}`);
    // Handle state details display logic here
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <MapChart onStateClick={handleStateClick} />
        <div>
          {/* Additional dashboard content */}
        </div>
      </div>
    </div>
  );
};