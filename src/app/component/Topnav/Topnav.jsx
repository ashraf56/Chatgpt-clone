import React from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
const Topnav = () => {
  return (
    <div className='px-5'>
      <div className="navbar bg-base-100">

        <div className="flex-1">
          <label htmlFor="my-drawer-2"  className=" drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          
          <a className="btn btn-ghost text-lg font-bold">Chat GPT-3.5</a>
        </div>
        <div className="flex-none text-xl">

          <MdOutlineFileUpload />

        </div>

      </div>
    </div>
  );
};

export default Topnav;