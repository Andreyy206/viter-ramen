import { imgPath } from "@/components/helpers/functions-general";
import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ ramenCart, dessertCart, drinksCart, toppingsCart }) => {
   
  
  
  const [isDark, setIsDark] = React.useState(
      localStorage.getItem("theme") === "dark" ? true : false
    );
    const [theme, setTheme] = React.useState(localStorage.getItem("theme"));

    const handleTheme = () => {
      setIsDark(!isDark);
      if (isDark) {
        document.querySelector("html").classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.querySelector("html").classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    };
    






  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  let cartCount =
    ramenCart.length +
    dessertCart.length +
    drinksCart.length +
    toppingsCart.length;

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const { dispatch } = React.useContext(StoreContext);

  const handleOpenCart = () => dispatch(setIsAdd(true));
  return (
    <>
      <header
        className={`px-4 py-2 transition-all z-50 ${
          scrollPosition > 100
            ? "fixed top-0 left-0 w-full bg-black bg-opacity-70"
            : ""
        }`}
      >
        <div className='flex justify-between items-center '>
          <div className=''>
            <Link to='/'>
              <img src={`${imgPath}/logo.png`} alt='' className='w-[80px]' />
            </Link>
          </div>

          <ul className='flex gap-10 items-center'>
            <li>
              <NavLink to='/menu' className='text-base font-bold text-white'>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/location'
                className='text-base font-bold text-white'
              >
                Location
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className='text-base font-bold text-white'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog' className='text-base font-bold text-white'>
                Blog
              </NavLink>
            </li>
          </ul>

          <button className='relative' onClick={handleOpenCart}>
            {cartCount > 0 && (
              <span className='absolute -top-2 -left-2 size-[17px] leading-none text-[10px] bg-accent text-white rounded-full grid place-content-center'>
                {cartCount}
              </span>
            )}

            <ShoppingBag stroke={"#fff"} />
          </button>
        </div>
        
      </header>
    </>
  );
};

export default Header;
