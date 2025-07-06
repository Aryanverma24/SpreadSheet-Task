import React, { useState } from "react";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { FaBell } from "react-icons/fa6";

const Header = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johnDoe@gmail.com",
  });
  return (
    <>
      <div className="flex justify-between  bg-stone-100">
        <div className="flex gap-2 text-gray-500 mt-3">
          <BsLayoutSidebarReverse className="mt-1 ml-2 mr-4" />
          <p className="hidden md:block">Workspace &gt;</p>
          <p className="hidden md:block">Folder 2 &gt;</p>
          <p className="text-black">
            SpreadSheet 3{" "}
            <span className="text-gray-500 font-bold "> . . .</span>
          </p>
        </div>
        <div className="flex gap-2 mr-2">
          <input
            type="text"
            className="px-2 py-1 w-30 my-2 sm:w-60 md:w-80 border border-gray-600 my-1 rounded-lg"
            placeholder="search  "
          />
          <div className="relative ">
            <div>
              <FaBell className="mt-3 text-amber-400" size={22} />
            </div>
            <div className="rounded-full bg-green-800 text-white absolute  top-0 -right-2 scale-75">
              <p className="text-sm px-2 py-1 ">2</p>
            </div>
          </div>
          <div className="flex mr-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1253/1253756.png"
              alt=""
              className="rounded-full max-h-8 mt-2"
            />
            <div>
              {" "}
              <p>{user.name}</p>
              <p>{user.email.substring(0, 7)}...</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
