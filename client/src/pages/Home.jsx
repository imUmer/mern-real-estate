import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageSliderHome } from "../components/ImageSlider";
import ListingItems from "../components/ListingItems";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  // console.log(offerListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  const fetchRentListings = async () => {
    try {
      const res = await fetch("/api/listing/get?rent=true&limit=4");
      const data = await res.json();
      setRentListings(data);
      fetchSaleListings();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSaleListings = async () => {
    try {
      const res = await fetch("/api/listing/get?sale=true&limit=4");
      const data = await res.json();
      setSaleListings(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* first Top cover */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your <span className="text-slate-500">dream</span>
          <br />
          house with ease
        </h1>
        <div className="text-gray-500 text-xs sm:text-sm">
          RealEstate is the Perfect place to find
          <br /> we have wide range of properties
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-700 font-bold hover:text-blue-500 hover:undeline"
        >
          Let's get start...
        </Link>
      </div>
      {/*  slider images */}
      <div>
        {offerListings && offerListings.length > 0 && (
          <ImageSliderHome slides={offerListings} />
        )}
      </div>

      {/* offer listing section */}

      <div className="p-3 flex flex-col gap-8 my-10 max-w-6xl mx-auto ">
        {/* <div className="flex flex-col gap-6 p-3 max-w-full mx-auto"> */}
        {console.log(offerListings)}
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-5">
              <h1 className="text-2xl font-semibold text-gray-600">
                Recent Offers
              </h1>
              <Link
                className="text-blue-700 text-sm font-bold hover:underline hover:text-blue-500"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 ">
              {offerListings.map((listing) => (
                <div>
                  <ListingItems listing={listing} key={listing._id} />
                </div>
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h1 className="text-2xl font-semibold text-gray-600">
                Recent Places for Rent
              </h1>
              <Link
                className="text-blue-700 text-sm font-bold hover:underline hover:text-blue-500"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <div>
                  <ListingItems listing={listing} key={listing._id} />
                </div>
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h1 className="text-2xl font-semibold text-gray-600">
                Recent Places for Sale
              </h1>
              <Link
                className="text-blue-700 text-sm font-bold hover:underline hover:text-blue-500"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <div>
                  <ListingItems listing={listing} key={listing._id} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
