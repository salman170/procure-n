import React from "react";
import { FaPlus } from 'react-icons/fa';

const Frequently = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-4xl text-purple-800 font-bold mt-10">
          Frequently Asked Questions
        </div>
      </div>
      <div>
        <div className="text-xl m-3 bg-gray-200 rounded-xl p-2 "><pre>01. How does ProcureN work??<FaPlus/></pre></div>
        <div className="text-xl m-3 bg-gray-200 rounded-xl p-2 ">02. What is logistics?<FaPlus/></div>
        <div className="text-xl m-3 bg-gray-200 rounded-xl p-2 ">03. What is Supply Chain Management?<FaPlus/></div>
      </div>
    </>
  );
};

export default Frequently;
