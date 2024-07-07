import React, { useEffect, useRef, useState } from "react";

const TableauCompany = ({ companyIdParameter }) => {
  const vizRef = useRef(null);
  const [tableauLoaded, setTableauLoaded] = useState(false);

  useEffect(() => {
    const loadTableauScript = () => {
      return new Promise((resolve, reject) => {
        if (window.tableau) {
          setTableauLoaded(true);
          resolve(window.tableau);
          return;
        }

        const script = document.createElement("script");
        script.src =
          "https://public.tableau.com/javascripts/api/tableau-2.min.js";
        script.onload = () => {
          setTableauLoaded(true);
          resolve(window.tableau);
        };
        script.onerror = (error) => {
          console.error("Error loading Tableau script:", error);
          reject(error);
        };
        document.body.appendChild(script);
      });
    };

    loadTableauScript()
      .then((tableau) => {
        console.log("Tableau script loaded");
        const vizUrl = `https://public.tableau.com/views/corpoindia/Fundingdetails?:embed=true&:showVizHome=no&:toolbar=no&companyIdParameter=${companyIdParameter}`;
        console.log(`Loading viz from URL: ${vizUrl}`);

        if (tableau && tableau.Viz) {
          new tableau.Viz(vizRef.current, vizUrl, {
            hideTabs: true,
            width: "800px",
            height: "500px",
            onFirstInteractive: () => {
              console.log("Viz has finished loading.");
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
      if (window.tableau && window.tableau.VizManager) {
        window.tableau.VizManager.getVizs().forEach((viz) => {
          if (viz) {
            viz.dispose();
          }
        });
      }
    };
  }, [companyIdParameter]);

  if (!tableauLoaded) {
    return <div>Loading Tableau...</div>;
  }

  return <div ref={vizRef} style={{ width: "800px", height: "500px" }}></div>;
};

export default TableauCompany;
