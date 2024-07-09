import React, { useEffect, useRef } from "react";

const TableauDashboard = ({ dashboardUrl }) => {
  const vizRef = useRef(null);

  useEffect(() => {
    const loadTableauScript = () => {
      return new Promise((resolve, reject) => {
        if (window.tableau) {
          resolve(window.tableau);
          return;
        }

        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/tableau-2.min.js";
        script.onload = () => resolve(window.tableau);
        script.onerror = (error) => reject(error);
        document.body.appendChild(script);
      });
    };

    loadTableauScript()
      .then((tableau) => {
        if (tableau && tableau.Viz) {
          new tableau.Viz(vizRef.current, dashboardUrl, {
            hideTabs: true,
            width: "1522px",
            height: "2100px",
            onFirstInteractive: () => {
              console.log("Dashboard has finished loading.");
            },
          });
        } else {
          console.error("Tableau library or Viz constructor is not available.");
        }
      })
      .catch((error) => {
        console.error("Error loading Tableau script:", error);
      });

    return () => {
      if (vizRef.current && window.tableau && window.tableau.VizManager) {
        window.tableau.VizManager.getVizs().forEach((viz) => {
          if (viz && viz.getParentElement() === vizRef.current) {
            viz.dispose();
          }
        });
      }
    };
  }, [dashboardUrl]);

  return <div ref={vizRef}></div>;
};

export default TableauDashboard;
