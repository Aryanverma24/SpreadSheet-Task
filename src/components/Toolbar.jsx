import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TfiImport, TfiExport, TfiShare } from "react-icons/tfi";
import { LuGitPullRequest } from "react-icons/lu";
import { BiFilter } from "react-icons/bi";
import { HiOutlineRectangleStack } from "react-icons/hi2";

const Toolbar = () => {
  return (
    <div className="flex items-center justify-between bg-stone-100 px-4 py-3">
      {/* Left side - Always visible buttons */}
      <div className="flex items-center gap-2">
        <button className="flex items-center px-2 py-1 border border-gray-300 rounded-md">
          <BiFilter className="mt-0.5" size={16} />
          <span className="ml-2 sm:inline">Filter</span>
        </button>
        <button className="flex items-center px-2 py-1 border border-gray-300 rounded-md">
          <HiOutlineRectangleStack className="mt-0.5" size={16} />
          <span className="ml-2 sm:inline">Cell View</span>
        </button>
      </div>

      {/* Center - Always visible buttons */}
      <div className="flex gap-2">
      <div className="flex item-center gap-2">
        <button className="flex items-center px-2 py-1 bg-stone-100 border border-gray-500 rounded-md">
          <TfiImport className="mt-0.5" size={18} />
          <span className="hidden ml-2 sm:inline">Import</span>
        </button>
        <button className="flex items-center px-2 py-1 bg-stone-100 border border-gray-500 rounded-md">
          <TfiExport className="mt-0.5" size={18} />
          <span className="hidden ml-2 sm:inline">Export</span>
        </button>
        <button className="flex items-center px-2 py-1 bg-stone-100 border border-gray-500 rounded-md">
          <TfiShare className="mt-0.5" size={18} />
          <span className="hidden ml-2 sm:inline">Share</span>
        </button>
      </div>

      {/* Right side - Always visible button */}
      <div className="flex items-center gap-2">
        <button className="flex items-center px-3 py-1.5 text-white bg-green-800 border border-gray-500 rounded-md">
          <LuGitPullRequest className="mt-0.5" size={18} />
          <span className="ml-2 hidden sm:inline">New Action</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Toolbar;
