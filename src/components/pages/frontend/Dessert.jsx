import useQueryData from "@/components/custom-hook/useQueryData";
import { imgPath } from "@/components/helpers/functions-general";
import { setMessage, setSuccess } from "@/components/store/storeAction";
import { Plus } from "lucide-react";
import React from "react";
import ToastSuccess from "../backend/partials/ToastSuccess";
import { StoreContext } from "@/components/store/storeContext";

const Dessert = ({ dessertCart, setDessertCart }) => {
  const { store, dispatch } = React.useState(StoreContext);
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

  const handleAddDessert = (item) => {
    const exist = dessertCart.find(
      (dessert) => dessert.dessert_aid === item.dessert_aid
    );
    if (exist !== undefined) {
      setDessertCart(
        dessertCart.map((dessert) =>
          dessert.dessert_aid === item.dessert_aid
            ? { ...exist, quantity: exist.quantity + 1 }
            : dessert
        )
      );
    } else {
      setDessertCart([...dessertCart, { ...item, quantity: 1 }]);
    }
    dispatch(setSuccess(true));
    dispatch(setMessage("Added to Cart!"));
  };

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
          <div className='grid grid-cols-3 gap-10 mt-16'>
            {result?.data.map((item, key) => (
              <div
                key={key}
                className='grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black'
              >
                <div>
                  <h5 className='mb-0 text-black'>{item.dessert_title}</h5>
                  <small>{item.dessert_description}</small>
                </div>
                <p className='font-bold text-2xl justify-self-center'>
                  {item.dessert_price}
                </p>
                <button
                  className='bg-accent text-white  justify-self-center rounded-md px-2 py-1.5'
                  onClick={() => handleAddDessert(item)}
                >
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

export default Dessert;
