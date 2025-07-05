import React from 'react';
import { CiLink } from "react-icons/ci";
import { RiLoader3Fill } from "react-icons/ri";
const NameBar = () => {
  // const totalCols = columnsCount + extraCols;

  return (
    <>
    <div>

      <div className="flex ml-8 relative">
        <div className='flex w-[50%] mt-1'><CiLink className='mt-1 mr-2' size={22}/> Q3 Financial Overview
        <button><RiLoader3Fill className='text-pink-500 ml-2' /></button></div>
        <div className='flex right-2 absolute gap-2 my-1 '>
            <button className='px-2 py-0.5 text-sm w-30 rounded-md border border-gray-400 bg-teal-400 hover:bg-teal-600'>ABC...</button>
            <button className='px-2 py-0.5 text-sm w-55 rounded-md border border-gray-400 bg-purple-400  hover:text-black hover:bg-purple-500'>Answer a Question</button>
            <button className='px-2 py-0.5 text-sm w-30 rounded-md border border-gray-400 bg-orange-300  hover:bg-orange-400'>Extract</button>
            <button className='px-2 py-0.5 text-sm w-30 rounded-md  border border-gray-400 bg-teal-100  hover:bg-teal-200'>+</button>
        </div>
      </div>
    </div>
    </>
  )
};

export default NameBar;
