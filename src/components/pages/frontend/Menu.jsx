import useQueryData from "@/components/custom-hook/useQueryData";
import { imgPath } from "@/components/helpers/functions-general.jsx";
import { Plus } from "lucide-react";
import SpinnerTable from "../backend/partials/spinners/SpinnerTable";
import SpinnerButton from "../backend/partials/spinners/SpinnerButton";
import SpinnerWindow from "../backend/partials/spinners/SpinnerWindow";
import SpinnerMenu from "../backend/partials/spinners/SpinnerMenu";
import React from "react";
import { StoreContext } from "@/components/store/storeContext";
import { setCart, setSuccess } from "@/components/store/storeAction";
import ModalToppings from "./ModalToppings";

const Menu = ({cartItem, setCartItem }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const[showToppings, setShowToppings] = React.useState(false)

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/ramen`, // endpoint
    "get", // method
    "ramen"
  );

  const handleAddItem = (item) => {
    const exist = cartItem.find((cart) => cart.ramen_aid === item.ramen_aid);

    if (exist !== undefined) {
      setCartItem(
        cartItem.map((cart) =>
          cart.ramen_aid === item.ramen_aid
            ? { ...exist, quantity: exist.quantity + 1 }
            : cart
        )
      );
    } else {
      setCartItem([...cartItem, { ...item, quantity: 1 }]);
    }
    dispatch(setSuccess(true));
    setShowToppings(true)
  };


  return (
    <>
      <section className="py-24 bg-orange bg-[url('./public/img/pattern.webp')] bg-repeat bg-center bg-blend-color-burn bg-opacity-100">
        <div className='container'>
          <h2 className='text-center uppercase text-white '>Ramen Menu</h2>

          {isLoading && (
            <div className='min-h-[400px]  w-full relative'>
              <SpinnerMenu />
            </div>
          )}
          <div className='grid md:grid-cols-2 gap-10 mt-14'>
            {!isLoading &&
              result?.data.map((item, key) => {
                return (
                  <div className='grid-item mb-6' key={key}>
                    <div className='grid md:grid-cols-[250px_1fr] gap-2 items-center justify-center'>
                      <div>
                        <h3 className='mb-2'>{item.ramen_title}</h3>
                        <h4 className='mb-5 text-nowrap'>
                          {item.ramen_category}
                        </h4>
                        <h4 className='text-accent'>PHP {item.ramen_price}</h4>

                        <p>{item.ramen_description}</p>
                        <button
                          className='btn btn-accent'
                          onClick={() => handleAddItem(item)}
                        >
                          <Plus size={18} /> Add to Cart
                        </button>
                      </div>
                      <img
                        src={`${imgPath}/${item.ramen_photo}`}
                        alt=''
                        className='size-[300px] rounded-full object-cover'
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {showToppings && (
        <ModalToppings setShowToppings={setShowToppings}  setCartItem={setCartItem} cartItem={cartItem}/>
      )}
    </>
  );
};

export default Menu;
