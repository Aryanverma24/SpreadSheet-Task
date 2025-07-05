import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TfiImport } from "react-icons/tfi";
import { TfiExport } from "react-icons/tfi";
import { TfiShare } from "react-icons/tfi";
import { LuGitPullRequest } from "react-icons/lu";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import {
        BiSolidHide,
        BiSortAlt2 ,
        BiFilter
 } from "react-icons/bi";

const Toolbar = () => {
  return (
    <>
    <hr className='text-gray-400' />
   <div className="flex justify-between items-center shadow-sm bg-white">
      <div className="flex w-[40%] ">
        <button className="btn flex px-4 py-1 border border-gray-300">Toolbar <MdKeyboardDoubleArrowRight className='mt-1.5 ml-2' size={14}/></button>
        <button className="flex btn px-2 py-1  border border-gray-300"><BiSolidHide  className='mt-1.5 mr-1' size={14}/> Hide Fields</button>
        <button className="flex btn px-2 py-1 border border-gray-300"><BiSolidHide className='mt-1.5 mr-1' size={14} /> Sort</button>
        <button className="flex btn px-2 py-1 border border-gray-300"><BiFilter className='mt-1.5  mr-1' size={14} /> Filter</button>
        <button className="flex btn px-2 py-1 border border-gray-300"><HiOutlineRectangleStack  className='mt-1.5 mr-1' size={14}/> Cell View</button>
      </div>
        <div className='flex gap-2 mr-4'>
            <button className='flex px-1 py-0.5 my-1 bg-stone-100 border border-gray-500 rounded-md'><TfiImport className='mt-1 mr-2'/>Import
            </button>
             <button className='flex px-1 py-0.5 my-1 bg-stone-100 border border-gray-500 rounded-md'><TfiExport className='mt-1 mr-2' /> Export
            </button>
             <button className='flex px-1 py-0.5 my-1 bg-stone-100 border border-gray-500 rounded-md'><TfiShare className='mt-1 mr-2'/>Share
            </button>
             <button className='flex px-1 py-0.5 my-1  px-8 text-white border bg-green-800 border-gray-500 rounded-md'><LuGitPullRequest className='mt-1 mr-2'/>New Action
            </button>

        </div>
    </div>
          </>
  )
}

export default Toolbar