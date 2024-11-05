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

const Home = () => {
  return (
    <>
      <Banner />
      <Instructions />
      <Menu/>
      <Dessert/>
      <Drinks/>
      <Carousel />
      <CallToAction />
      <Footer />
      {/* <ModalToppings /> */}
    </>
  );
}

export default Home
