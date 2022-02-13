import { useState, useEffect } from "react";
import {BsThreeDotsVertical ,BsThreeDots} from 'react-icons/bs';
import "../../Styles/Header/Header.css";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    if(screenWidth > 500){
      setToggleMenu(false);
    }

    window.addEventListener('resize', changeWidth)
  }, [screenWidth])

  const renderThreeDotsVerticalButton = () => {
    return (
      <button className="btn btn-primary" onClick={()=> setToggleMenu(!toggleMenu)}>
        <BsThreeDotsVertical/>
      </button>
    )
  }

  const renderThreeDotsButton = () => {
    return (
      <button className="btn btn-primary" onClick={()=> setToggleMenu(!toggleMenu)}>
        <BsThreeDots/>
      </button>
    )
  }

  return (
    <div className="header-container">
      <div className="header__heading-container">
        <h1 className="header__heading-container__text">SIPTO</h1>
        {screenWidth < 500 && (
        toggleMenu ? renderThreeDotsVerticalButton() : renderThreeDotsButton()
      )}
      </div>
      {(screenWidth > 500) && (
          <ul className="header__list-items-container">
            <li className="header__list_item">Home</li>
            <li className="header__list_item">About Us</li>
            <li className="header__list_item">Invest Now</li>
            <li className="header__list_item">Contact Us</li>
            <li className="header__list_item">
              <button className="btn btn-primary">Buy Now</button>
            </li>
          </ul>
        )}
      {toggleMenu && (
          <ul className="header__list-items-container">
            <li className="header__list_item">Home</li>
            <li className="header__list_item">About Us</li>
            <li className="header__list_item">Invest Now</li>
            <li className="header__list_item">Contact Us</li>
            <li className="header__list_item">
              <button className="btn btn-primary">Buy Now</button>
            </li>
          </ul>
        )}
      
    </div>
  );
};

export default Header;
