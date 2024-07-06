import React from "react";

const HomePage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('/imgg.jpg')`, // Path to your image
        backgroundColor: "rgba(255, 255, 255, 0.4)", // White background with 40% opacity
        backgroundBlendMode: "overlay", // Blend the background image and color
      }}
    >
      <div className="text-left absolute top-0 right-0 mt-8 mr-8">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <div className="text-lg mb-4">
          WELCOME TO CORPINDIA !!
          <div className="text-base font-semibold">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
