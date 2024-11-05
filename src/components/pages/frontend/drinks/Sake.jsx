import { Plus } from "lucide-react";
import React from "react";

const Sake = () => {
  return (
    <div className='grid grid-cols-3 gap-10 mt-16'>
      <div className='grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black'>
        <div>
          <h5 className='mb-0 text-black'>Pearl-snap</h5>
          <small>Boiled and Salted soybean pods</small>
        </div>
        <p className='font-bold text-2xl justify-self-center'>200</p>
        <button className='size-[40px] bg-accent text-white rounded-full justify-self-center rounded-md px-2 py-1.5 text-black'>
          <Plus />
        </button>
      </div>
      <div className='grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black'>
        <div>
          <h5 className='mb-0 text-black'>Pearl-snap</h5>
          <small>Boiled and Salted soybean pods</small>
        </div>
        <p className='font-bold text-2xl justify-self-center'>200</p>
        <button className='size-[40px] bg-accent text-white rounded-full justify-self-center rounded-md px-2 py-1.5 text-black'>
          <Plus />
        </button>
      </div>
      <div className='grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black'>
        <div>
          <h5 className='mb-0 text-black'>Pearl-snap</h5>
          <small>Boiled and Salted soybean pods</small>
        </div>
        <p className='font-bold text-2xl justify-self-center'>200</p>
        <button className='size-[40px] bg-accent text-white rounded-full justify-self-center rounded-md px-2 py-1.5 text-black'>
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default Sake;
