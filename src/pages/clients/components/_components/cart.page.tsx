import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { IoCloseCircleOutline } from 'react-icons/io5';

import useTranslation from '@/hook/use-translation';

const CartPage = () => {
  const { t } = useTranslation();
  const [cartItems, _setCartItems] = useState([
    {
      id: 1,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6" MULTITOUCH All-In-One PC',
      total: 1,
      price: 499,
      image: 'src/assets/images/image-42.png',
    },
    {
      id: 2,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6" MULTITOUCH All-In-One PC',
      total: 1,
      price: 499,
      image: 'src/assets/images/image-42.png',
    },
  ]);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div
      className="w-[300px] mx-auto py-4 relative "
      style={{
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.14)',
      }}
    >
      <div className="absolute -top-2 right-14 w-4 h-4">
        <div className="absolute w-4 h-4 bg-white rotate-45 border-t border-l"></div>
      </div>

      <h1 className="text-center font-bold  text">{t('Giỏ hàng')}</h1>

      <p className="text-xs text-[#A2A6B0] text-center">
        2 {t('sản phẩm trong giỏ hàng')}
      </p>

      <div className="border-2 border-[#0156FF] rounded-[26px] h-[37px] flex items-center justify-center cursor-pointer mx-8 mt-2">
        <span className="font-semibold text-[14px] text-[#0156FF]">
          {t('Xem hoặc chỉnh sửa giỏ hàng')}
        </span>
      </div>

      <div className="space-y-4 mt-4">
        {cartItems.map((item: any) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-t-2 py-2 "
          >
            <div className="flex items-center px-3">
              <p>
                {item.total}
                <span className="text-gray-500 text-xs ml-1">x</span>
              </p>
              <img src={item.image} alt="" className="mr-4 w-16 h-16" />
              <div>
                <p className="font-medium text-sm overflow-hidden text-ellipsis whitespace-normal w-[150px] h-14">
                  {item.name}
                </p>
              </div>
              <div>
                <button>
                  <IoCloseCircleOutline size={21} color="#CACDD8" />
                </button>
                <button>
                  <FiEdit2 size={18} color="#CACDD8" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 pt-4">
        <p className="flex items-center justify-center font-bold">
          <span className="text-gray-500">{t('Tổng phụ')}:</span>
          <span className="ml-2">${subtotal.toFixed(2)}</span>
        </p>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <button className="min-w-[250px] bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
          {t('Thanh toán')}
        </button>
        <button className="min-w-[250px] bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full mt-2 flex items-center justify-center">
          {t('Thanh toán qua')}
          <img className="ml-2" src="/assets/images/paypal.png" alt="Paypal" />
        </button>
      </div>
    </div>
  );
};

export default CartPage;
