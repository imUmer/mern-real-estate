import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItems({ listing }) {
  console.log(listing,'here');
  
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9JzG9-BcR653gmoC2jhd7amrEj-HFzYWfQ&s'}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="w-full sm:truncate text-lg text-slate-700 font-semibold">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700 " />
            <p className="w-full sm:truncate text-sm text-gray-600">{listing.address}</p>
          </div>
          <p className="text-sm gray-600 line-clamp-2">{listing.description}</p>
          
          <p className="text-gray-600 font-semibold mt-2">
            ${' '}{listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / Month'}
            </p>
            <div className="text-gray-700 flex items-center gap-4">
                <div className="text-xs font-bold ">
                    {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : `${listing.bedrooms} Bed`}
                </div>
                <div className="text-xs font-bold ">
                    {listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : `${listing.bedrooms} Bath`}
                </div>
            </div>
        </div>
      </Link>
    </div>
  );
}
