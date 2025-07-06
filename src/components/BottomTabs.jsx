
import { useData } from "../Context/useData";

const BottomTabs = () => {
  const { activeTab, setActiveTab } = useData();
  const tabs = ["All Orders", "Arrived", "Reviewed", "Pending", "+"];

  return (
    <div className="bg-white border-t sticky bottom-0 z-10">
      <div className="flex gap-2 px-4 py-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 md:flex-2 min-w-[70px] md:min-w-[120px] text-center py-2 rounded-md font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "bg-green-800 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomTabs;
