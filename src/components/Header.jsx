import React from "react";
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link to={'/'}>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-slate-400">Real</span>
          <span className="text-slate-500">eState</span>
        </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-md flex items-center w-24 sm:w-64 ">
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none"  />
             <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-6">
        <Link to={'/'}>
          <li className="hidden sm:inline text-slate-700 hover:text-slate-500">Home</li>
          </Link>
          <Link to={'/about'}>
          <li className="hidden sm:inline text-slate-700 hover:text-slate-500">About</li>
          </Link>
          <Link to={'/signin'}>
          <li className="text-slate-700 hover:text-slate-500">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
