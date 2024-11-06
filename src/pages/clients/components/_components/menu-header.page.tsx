import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { IoClose, IoSearch } from 'react-icons/io5';
import UserAvatar from 'react-user-avatar';

import useTranslation from '@/hook/use-translation';

import AccountPage from './account.page';
import CartPage from './cart.page';
import MenuDropDownPage from './menu-drop-down.page';

const MenuHeaderPage = () => {
  const { t } = useTranslation();

  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeItem, setActiveItem] = useState(null);
  const [menuClasses, setMenuClasses] = useState(
    'fixed top-0 left-0 h-full w-3/4 sm:w-1/3 bg-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out',
  );

  useEffect(() => {
    if (isMenuOpen) {
      setMenuClasses(
        'fixed top-0 left-0 h-full w-3/4 sm:w-1/3 bg-white z-50 transform translate-x-0 transition-transform duration-300 ease-in-out',
      );
    } else {
      setMenuClasses(
        'fixed top-0 left-0 h-full w-3/4 sm:w-1/3 bg-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out',
      );
    }
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (link: any) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveItem(link);
    if (link === 'Laptops') {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const navigationLinks = [
    'Laptops',
    t('Máy tính để bàn'),
    t('Thiết bị mạng'),
    t('Máy in, máy quét'),
    t('Sản phẩm khác'),
    t('Sửa chữa'),
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 xl:py-0 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <button
          className="lg:hidden text-white hover:text-gray-900"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
        <div className="flex items-center">
          <img src="/assets/images/Logo.png" alt="" className="h-8 md:h-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <span
              key={link}
              className={`font-semibold text-[14px] cursor-pointer px-2 py-1 rounded-full transition-colors duration-200
              ${activeItem === link ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
              onMouseEnter={() => handleMouseEnter(link)}
              onMouseLeave={handleMouseLeave}
            >
              {link}
            </span>
          ))}
          <div className="border-2 border-[#0156FF] rounded-[26px] w-[121px] h-[37px] flex items-center justify-center cursor-pointer">
            <span className="font-semibold text-[14px] text-[#0156FF]">
              {t('Ưu đãi')}
            </span>
          </div>
        </div>

        {/* Search bar */}
        <div className="lg:hidden w-full items-center mr-8 relative">
          <input
            type="text"
            placeholder="Search here..."
            className=" w-full border-b-2 text-[14px] text-[#CACDD9] focus:outline-none pl-10 p-[6px] rounded-[26px]"
          />
          <button className="text-[#CACDD8] absolute font-semibold text-[14px] cursor-pointer left-3 top-2">
            <IoSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-5 relative">
          <button
            className="lg:text-[#000] text-white font-semibold text-[14px] cursor-pointer relative"
            onClick={() => {
              setIsOpenCart(!isOpenCart);
              setIsOpenAccount(false);
            }}
          >
            <FiShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-white lg:bg-blue-500 lg:text-white text-blue-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>

          <button
            className="text-[#000] font-semibold bo cursor-pointer rounded-full border w-8 h-8 bg-slate-400"
            onClick={() => {
              setIsOpenCart(false);
              setIsOpenAccount(!isOpenAccount);
            }}
          >
            <UserAvatar name="HT" color="transparent" className="text-black" />
          </button>
          {isOpenCart && (
            <div className="absolute top-[52px] right-0">
              <CartPage />
            </div>
          )}
          {isOpenAccount && (
            <div className="absolute top-[52px] -right-2">
              <AccountPage />
            </div>
          )}
        </div>
      </div>
      {showDropdown && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute left-0 w-full top-full z-50"
        >
          <MenuDropDownPage />
        </div>
      )}
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className={menuClasses}>
            <div className="flex justify-between items-center mb-4 border-b-2">
              <div className="text-blue-600">
                <img
                  src="/assets/images/Logo.png"
                  alt=""
                  className="w-[71px] h-[57px]"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 px-3">
              {navigationLinks.map((link) => (
                <button
                  key={link}
                  className="text-left font-semibold text-[14px] py-2 hover:text-blue-600"
                >
                  <span>{link}</span>
                  <span className="float-right">&gt;</span>
                </button>
              ))}
              <button className="border-2 border-[#0156FF] rounded-[26px] w-[121px] h-[37px] flex items-center justify-center hover:bg-blue-50">
                <span className="font-semibold text-[14px] text-[#0156FF]">
                  {t('Ưu đãi')}
                </span>
              </button>
            </div>
          </div>
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MenuHeaderPage;
