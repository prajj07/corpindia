import React from "react";

const AboutUsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">About Us Page</h1>
      <p>Welcome to the About Us Page!</p>
      <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('/corpoindia-logo.png)`,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    ></div>
    </div>
  );
};

export default AboutUsPage;
