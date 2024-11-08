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
  const [cartItem, setCartItem] = React.useState([])
  return (
    <>
      <Banner />
      <Instructions />
      <Menu cartItem={cartItem} setCartItem={setCartItem} />
      <Dessert />
      <Drinks />
      <Carousel />
      <CallToAction />
      <Footer />
      {/* <ModalToppings /> */}
      {store.isAdd && <Cart cartItem={cartItem} setCartItem={setCartItem} />}
    </>
  );
}

export default Home
