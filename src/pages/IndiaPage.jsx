import React, { useState, useEffect, useRef } from "react";
import MapChart from "../MapChart";
import TableauDashboard from "../components/TableauDashboard"; // Adjust the path as necessary

const IndiaPage = () => {
  const [selectedState, setSelectedState] = useState("India");
  const [dashboardUrl, setDashboardUrl] = useState("");
  const tableauContainerRef = useRef(null);

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  useEffect(() => {
    // Define the initial dashboard URL
    const initialDashboardUrl = `https://public.tableau.com/views/corpoindia/Dashboard1?:language=en-GB&stateParameter=${selectedState}&:sid=&:redirect=auth&publish=yes&:display_count=n&:origin=viz_share_link`;

    // Set the initial dashboard URL
    setDashboardUrl(initialDashboardUrl);

    // Cleanup function for Tableau viz
    return () => {
      if (tableauContainerRef.current) {
        const tableauViz = tableauContainerRef.current.querySelector("iframe");
        if (tableauViz) {
          tableauViz.remove();
        }
      }
    };
  }, [selectedState]);

  return (
    <div className="p-4 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-4">India Page</h1>
      <p className="mb-8">Welcome to the India Page!</p>
      <div className="flex-grow overflow-y-auto">
        <MapChart onStateClick={handleStateClick} />
      </div>
      <div className="w-1/3" ref={tableauContainerRef}>
        {dashboardUrl && (
          <TableauDashboard
            key={selectedState} // Ensure TableauDashboard component reloads on state change
            dashboardUrl={dashboardUrl}
          />
        )}
      </div>
    </div>
  );
};

export default IndiaPage;
