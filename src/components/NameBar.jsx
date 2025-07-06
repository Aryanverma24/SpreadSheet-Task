import React from "react";
import { CiLink } from "react-icons/ci";
import { RiLoader3Fill } from "react-icons/ri";
const NameBar = () => {
  // const totalCols = columnsCount + extraCols;

  return (
    <>
    <hr />
      <div>
        <div className="flex ml-8 relative mb-1">
          <div className="flex w-[50%] my-1">
            <CiLink className="mt-1 mr-2" size={22} /> Q3 Financial Overview
            <button>
              <RiLoader3Fill className="text-pink-500 ml-2" />
            </button>
          </div>
          <div className="flex absolute right-2 gap-2 my-1 ">
            <button className="px-3 md:w-29 md:py-0.5 rounded-md border border-gray-400 bg-teal-400 hover:bg-teal-600">
              <span className="hidden sm:inline">ABC...</span>
              <span className="inline  sm:hidden">A</span>
            </button>
            <button className="px-3 md:py-0.5 md:w-58 rounded-md border border-gray-400 bg-purple-400 hover:text-black hover:bg-purple-500">
              <span className="hidden sm:inline">Answer a Question</span>
              <span className="inline sm:hidden">AQ</span>
            </button>
            <button className="px-3 md:py-0.5 md:w-29 rounded-md border border-gray-400 bg-orange-300 hover:bg-orange-400">
              <span className="hidden sm:inline">Extract</span>
              <span className="inline sm:hidden">E</span>
            </button>
            <button className="px-3 md:py-0.5 md:w-29 rounded-md border border-gray-400 bg-teal-100 hover:bg-teal-200">
              <span className="hidden sm:inline">+</span>
              <span className="inline sm:hidden">+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameBar;
