import React from "react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8 relative" style={{
      backgroundImage: `url('/corpoindia-logo.png')`,
      backgroundSize: '120%',  // Adjust the percentage to make the image larger or smaller
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backgroundBlendMode: "overlay",
    }}>
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">Welcome to our company. We are dedicated to delivering the best services to our clients.</p>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-md">Our mission is to revolutionize the industry with our innovative solutions and customer-centric approach.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-md">Meet the passionate team behind our success. We bring together diverse talents and backgrounds to achieve our goals.</p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-md">Have questions? Reach out to us at <a href="mailto:info@company.com" className="text-blue-500 underline">info@corpoindia.com</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
