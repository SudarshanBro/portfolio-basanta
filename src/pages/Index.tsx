import React from 'react';

// Test with a simple component first to isolate the issue
const Index = () => {
  console.log('Index component is rendering'); // Add this for debugging
  
  return (
    <div className="min-h-screen bg-gray-100">
      <h1>Test - App is working!</h1>
      {/* Temporarily comment out other components to test basic functionality */}
      {/*
      <Navigation />
      <Hero />
      <Education />
      <Hobbies />
      <Gallery />
      <RecentActivity />
      */}
    </div>
  );
};

export default Index;
