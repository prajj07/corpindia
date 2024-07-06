import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_indiaLow from "@amcharts/amcharts5-geodata/indiaLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const MapChart = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        wheelX: "none",
        wheelY: "none",
        projection: am5map.geoMercator()
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_indiaLow
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x6771dc)
    });

    let data = [
      { id: "IN-UP", name: "Uttar Pradesh", value: 33 },
      { id: "IN-MH", name: "Maharashtra", value: 32 },
      { id: "IN-BR", name: "Bihar", value: 31 },
      // Add all other states here...
    ];

    polygonSeries.data.setAll(data);

    polygonSeries.mapPolygons.template.events.on("click", function (ev) {
      let data = ev.target.dataItem.dataContext;
      let infoBox = document.getElementById("info");
      infoBox.innerText = "State: " + data.name ;
      infoBox.style.display = "block"; // Show the info box
    });

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div>
      <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>
      <div id="info" style={{ marginTop: "10px", textAlign: "center" }}></div>
    </div>
  );
};

export default MapChart;
