import useQueryData from '@/components/custom-hook/useQueryData';
import { imgPath } from '@/components/helpers/functions-general'
import { Plus } from 'lucide-react'
import React from 'react'
import SpinnerMenu from '../backend/partials/spinners/SpinnerMenu';

const Dessert = () => {
      const {
        isLoading,
        isFetching,
        error,
        data: result,
      } = useQueryData(
        `/v1/dessert`, // endpoint
        "get", // method
        "dessert"
      );



  return (
    <>
      <section className='bg-[#fdf7ef]'>
        <img
          src={`${imgPath}/machi-dessert.webp`}
          alt=''
          className='w-full object-cover'
        />
        <div className='container py-24'>
          <h2 className='text-center uppercase text-accent '>
            Sides & Dessert
          </h2>

          {isLoading && (
            <div className='min-h-[400px] w-full relative'>
              <SpinnerMenu />
            </div>
          )}

          <div className='grid md:grid-cols-3 gap-10 mt-10'>
            {!isLoading &&
              result?.data.map((item, key) => (
                <div
                  className='grid-item mgrid  grid-cols-[1fr,_100px,_100px]   items-center text-black'
                  key={key}
                >
                  <div>
                    <h5 className='mb-0 text-black'>Edamame</h5>
                    <small>Boiled and Salted soybean pods</small>
                  </div>
                  <p className='font-bold text-2xl justify-self-center'>200</p>
                  <button className='size-[40px] bg-accent text-white rounded-full justify-self-center rounded-md px-2 py-1.5 text-black'>
                    <Plus />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dessert
