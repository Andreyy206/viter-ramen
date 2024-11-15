import React from 'react'
import Banner from './Banner'
import Instructions from './Instructions';
import CallToAction from './CallToAction';
import Carousel from './Carousel';
import Footer from './Footer';
import Menu from './Menu';
import ModalToppings from './ModalToppings';
import Dessert from './Dessert';
import Drinks from './drinks/Drinks';
import Cart from './Cart';
import { StoreContext } from '@/components/store/storeContext';

const Home = () => {
  const {dispatch, store}= React.useContext(StoreContext)
  const [showToppings, setShowToppings] = React.useState(false)
  const [ramenCart, setRamenCart] = React.useState([]);
  const [dessertCart, setDessertCart] = React.useState([]);
  const [drinksCart, setDrinksCart] = React.useState([]);
  const [toppingsCart, setToppingsCart] = React.useState([]);
  const [cartItem, setCartItem] = React.useState([])
  const [totals, setTotals] = React.useState({
    ramen: "",
    drinks: "",
    dessert: "",
    toppings: "",
  });

  return (
    <>
      <Banner
        ramenCart={ramenCart}
        dessertCart={dessertCart}
        drinksCart={drinksCart}
        toppingsCart={toppingsCart}
      />

      <Instructions />
      <Menu
        cartItem={cartItem}
        setCartItem={setCartItem}
        ramenCart={ramenCart}
        setRamenCart={setRamenCart}
        setShowToppings={setShowToppings}
      />

      <Dessert dessertCart={dessertCart} setDessertCart={setDessertCart} />
      <Drinks drinksCart={drinksCart} setDrinksCart={setDrinksCart} />
      <Carousel />
      <CallToAction />
      <Footer />

      {showToppings && (
        <ModalToppings
          setShowToppings={setShowToppings}
          setToppingsCart={setToppingsCart}
          toppingsCart={toppingsCart}
        />
      )}


      {store.isAdd && (
        <Cart
          ramenCart={ramenCart}
          setRamenCart={setRamenCart}
          dessertCart={dessertCart}
          setDessertCart={setDessertCart}
          drinksCart={drinksCart}
          setDrinksCart={setDrinksCart}
          toppingsCart={toppingsCart}
          setToppingsCart={setToppingsCart}
          setTotals={setTotals}
          totals={totals}
        />
      )}
    </>
  );
}

export default Home
