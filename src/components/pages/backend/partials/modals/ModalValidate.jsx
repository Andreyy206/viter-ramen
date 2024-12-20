import { CircleAlert, MessageCircleWarning, X } from 'lucide-react';
import React from 'react'
import ModalWrapper from './ModalWrapper';
import { StoreContext } from '@/components/store/storeContext';

const ModalValidate = () => {
  const {dispatch, store } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setValidate(false))

  return (
    <ModalWrapper>
      <div className='modal-main bg-primary z-50 max-w-[350px] w-full rounded-md'>
        <div className='modal-body p-2 px-4 text-center'>
          <div className='size-[70px] mt-2 bg-info bg-opacity-20 grid place-content-center rounded-full mx-auto'>
            <MessageCircleWarning
              className='stroke-info'
              strokeWidth={1}
              size={45}
            />
          </div>
          <h2 className='mt-5 mb-3'>Validation Issue</h2>
          <p className='mt-3 mb-5 text-balance'>  
            {store.message}
          </p>
        </div>

        <div className='modal-footer flex py-2 px-4 border-t border-line justify-end gap-3'>
          <button className='btn btn-info w-full text-center block' onClick={handleClose}>
            Okay
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalValidate
