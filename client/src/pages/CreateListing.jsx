import React from 'react'

export default function CreateListing() {
  return (
    <div>
     <h1 className='text-3xl font-semibold text-center my-7'>Create Listing</h1>
     <form className='flex flex-col sm:flex-row' >
      <div className=''>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
       
     </form>
    </div>
  )
}
