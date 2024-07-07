import React, { useState } from "react";
import MapChart from "../MapChart";
import TableauDashboard from "../components/TableauDashboard"; // Adjust the path as necessary

const IndiaPage = () => {
  const [selectedState, setSelectedState] = useState("India");

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    console.log("Selected state:", stateName);
  };

  return (
    <div className="p-4 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-4">India Page</h1>
      <p className="mb-8">Welcome to the India Page!</p>
      <div className="flex-grow overflow-y-auto">
        <MapChart onStateClick={handleStateClick} />
      </div>
      <div>
        <TableauDashboard
          dashboardUrl={`https://public.tableau.com/views/corpoindia/Dashboard1?:language=en-GB&stateParameter=${selectedState}&:sid=&:redirect=auth&publish=yes&:display_count=n&:origin=viz_share_link`}
        />
      </div>
    </div>
  );
};

export default IndiaPage;
