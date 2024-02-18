import React from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
const Topnav = () => {
  return (
    <div className='px-5'>
      <div className="navbar bg-base-100">

        <div className="flex-1">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

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