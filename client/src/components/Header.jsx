import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(()=> {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  },[location.search])
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-400">Real</span>
            <span className="text-slate-500">eState</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-2 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch
              className="text-slate-600"
            />
          </button>
        </form>
        <ul className="flex gap-6">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:text-slate-500">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:text-slate-500">
              About
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover "
                src={currentUser.avatar}
                alt="profile avatar"
              />
            ) : (
              <li cl assName="text-slate-700 hover:text-slate-500">
                Sign in
              </li>
            )}
          </Link>
          <Link to={"/signup"}>
            <li className="display:none text-green-700 hover:text-green-500">
              Register
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
