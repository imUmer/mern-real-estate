import React from "react";
import {FaSearch} from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-slate-400">Real</span>
          <span className="text-slate-500">eState</span>
        </h1>
        <form className="bg-slate-100 p-2 rounded-md flex items-center w-24 sm:w-64 md:w-120">
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none"  />
             <FaSearch className="text-slate-600"/>
        </form>
      </div>
    </header>
  );
}
