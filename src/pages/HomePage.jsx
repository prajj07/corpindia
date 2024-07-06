import React from "react";

const HomePage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('/imgg.jpg')`, // Path to your uploaded image
        backgroundColor: "rgba(255, 255, 255, 0.5)", // White background with 50% opacity
        backgroundBlendMode: "overlay", // Blend the background image and color
      }}
    >
      <div className="text-left absolute top-0 right-0 mt-8 mr-8 bg-white bg-opacity-70 p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">CORPOINDIA - ASSESSING CORPORATE GROWTH IN INDIA</h1>
        <div className="text-lg mb-4">
          WELCOME TO CORPOINDIA !!
          <div className="text-base font-semibold mt-2">
            <p>
              This project demonstrates the strong link between startup growth and the Indian economy through detailed data analysis and visualized insights. Our interactive dashboard, built with industry-standard technologies and scalable cloud infrastructure, provides stakeholders with a clear view of trends, regional disparities, funding patterns, and sector-specific performances.
            </p>
            <p className="mt-2">
              The insights gleaned from this project highlight the critical role startups play in driving economic growth, innovation, and employment in India. By offering a user-friendly tool for real-time monitoring and analysis, we enable investors, policymakers, and entrepreneurs to make informed, data-driven decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
