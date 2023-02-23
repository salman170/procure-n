import React from "react";


export const About = () => {

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-4xl text-purple-800 font-bold mt-10">
        About Us
      </div>
      <div className="text-lg m-3 p-2 flex align-middle">
      ProcureN's unified approach — encompassing strategy, Software and Managed services — helps enterprises rapidly build the infrastructure and capabilities required to power high-performance procurement and supply chain organizations
      </div>
      <div className="border-2 border-purple-700 rounded bg-purple-400 shadow-xl shadow-purple-300 m-3"><button>Learn More</button></div>
    </div>
  );
};
