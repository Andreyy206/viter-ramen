import React from 'react'
import ModalWrapper from '../backend/partials/modals/ModalWrapper'
import { Plus, X } from 'lucide-react'

const ModalToppings = () => {
  return (
    <ModalWrapper>
        <div className='modal-main bg-white text-black p-4 rounded-md z-50 max-w-[900px] w-full'>
            <div className="modal-header flex justify-between pb-2 mb-2 border-b border-gray-200">
                <h5 className='text-black mb-0'>Add Toppings</h5>
                <button><X/></button>
            </div>
            <div className="modal-body my-5">
                <div className="grid grid-cols-3 gap-10">
                    <div className="grid grid-cols-[1fr,_50px,_30px] gap-2 items-center">
                        <div className='leading-none'>
                            <h5 className='text-black mb-0 leading-none'>Ajitama</h5>
                            <small className='text-[12px]'>Marinated Soft-boiled Egg</small>
                        </div>
                        <span>30.00</span>
                        <button className='size-[25px] grid place-content-center bg-accent text-white rounded-full'><Plus size={16}/></button>
                    </div>
                    <div className="grid grid-cols-[1fr,_50px,_30px] gap-2 items-center">
                        <div className='leading-none'>
                            <h5 className='text-black mb-0 leading-none'>Onsen</h5>
                            <small className='text-[12px]'>Hot Spring Egg</small>
                        </div>
                        <span>30.00</span>
                        <button className='size-[25px] grid place-content-center bg-accent text-white rounded-full'><Plus size={16}/></button>
                    </div>
                    <div className="grid grid-cols-[1fr,_50px,_30px] gap-2 items-center">
                        <div className='leading-none'>
                            <h5 className='text-black mb-0 leading-none'>Ajitama</h5>
                            <small className='text-[12px]'>Marinated Soft-boiled Egg</small>
                        </div>
                        <span>30.00</span>
                        <button className='size-[25px] grid place-content-center bg-accent text-white rounded-full'><Plus size={16}/></button>
                    </div>
                    <div className="grid grid-cols-[1fr,_50px,_30px] gap-2 items-center">
                        <div className='leading-none'>
                            <h5 className='text-black mb-0 leading-none'>Ajitama</h5>
                            <small className='text-[12px]'>Marinated Soft-boiled Egg</small>
                        </div>
                        <span>30.00</span>
                        <button className='size-[25px] grid place-content-center bg-accent text-white rounded-full'><Plus size={16}/></button>
                    </div>
                    <div className="grid grid-cols-[1fr,_50px,_30px] gap-2 items-center">
                        <div className='leading-none'>
                            <h5 className='text-black mb-0 leading-none'>Ajitama</h5>
                            <small className='text-[12px]'>Marinated Soft-boiled Egg</small>
                        </div>
                        <span>30.00</span>
                        <button className='size-[25px] grid place-content-center bg-accent text-white rounded-full'><Plus size={16}/></button>
                    </div>
                </div>
            </div>

        </div>
    </ModalWrapper>
  )
}

export default ModalToppings
