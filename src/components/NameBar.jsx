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
        <div className='flex right-2 absolute gap-6 my-1 '>
            <button className='px-2 py-0.5 text-sm rounded-md border border-gray-400 hover:bg-stone-100'>ABC...</button>
            <button className='px-2 py-0.5 text-sm rounded-md border border-gray-400  hover:bg-stone-100'>Answer a Question</button>
            <button className='px-2 py-0.5 text-sm rounded-md border border-gray-400  hover:bg-stone-100'>Extract</button>
            <button className='px-2 py-0.5 text-sm rounded-md  border border-gray-400  hover:bg-stone-100'>+</button>
        </div>
      </div>
    </div>
    </>
  )
};

export default NameBar;
