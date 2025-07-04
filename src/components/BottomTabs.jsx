import React, { useState } from 'react';

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const tabs = ["All Orders", "Arrived", "Reviewed", "Pending", "+"];

  return (
    <div className="bg-white flex gap-4 pl-14 px-4 border-t sticky bottom-1 z-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2  mt-1 rounded-md font-medium transition-colors duration-200 ${
            activeTab === tab
              ? "bg-green-800 text-white"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default BottomTabs;
