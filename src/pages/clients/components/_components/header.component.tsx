import { useState } from 'react';
import CountryFlag from 'react-country-flag';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

import { useLanguage } from '@/hook/use-language';
import useTranslation from '@/hook/use-translation';

import MenuHeaderPage from './menu-header.page';

const HeaderComponent = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [phone, _] = useState('(00) 12345678');
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };
  return (
    <div className="w-full">
      <div className="bg-[#020202] ">
        <div className="max-w-7xl mx-auto">
          {/* Desktop version */}
          <div className="hidden lg:flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-2">
              <span className="text-[#A2A6B0] font-semibold text-[12px]">
                {t('Thứ 2')}-{t('Thứ 7')}:
              </span>
              <span className="text-white ml-2 font-semibold text-[12px]">
                9:00 AM - 5:30 PM
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <span className="text-[#A2A6B0] font-semibold text-[12px]">
                Visit our showroom in 1234 Street Adress City Address, 1234
              </span>
              <span className="text-white ml-1 font-semibold text-[12px] border-b-2 cursor-pointer">
                {t('Liên hệ')}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-white font-semibold text-[12px]">
                {t('Gọi cho chúng tôi')}:
              </span>
              <span className="text-white ml-1 font-semibold text-[12px]">
                {phone}
              </span>
              <span className="text-white ml-2">
                <FaFacebookSquare className="text-xl" />
              </span>
              <span className="text-white ml-2">
                <FaInstagramSquare className="text-xl" />
              </span>
              <span className="ml-2 flex items-center">
                <div>
                  <CountryFlag
                    countryCode={language === 'en' ? 'US' : 'VN'}
                    svg
                    style={{
                      width: '1.2em',
                      height: '1.2em',
                      marginLeft: '5px',
                    }}
                  />
                </div>
                <select
                  className="bg-transparent text-white border-none focus:outline-none text-[12px]"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option className="text-[#020202]" value="en">
                    English
                  </option>
                  <option className="text-[#020202]" value="vi">
                    Tiếng Việt
                  </option>
                </select>
              </span>
            </div>
          </div>

          {/* Mobile version */}
          <div className="lg:hidden flex justify-between items-center px-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-[#0156FF] rounded-t-full px-2">
                <img
                  src="/assets/images/Logo-white.png"
                  alt=""
                  className="h-8 "
                />
              </div>
              <div className="flex items-center">
                <span className="text-[#A2A6B0] font-semibold text-[12px]">
                  Mon-Thu:
                </span>
                <span className="text-white ml-2 font-semibold text-[12px]">
                  9:00 AM - 5:30 PM
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <CountryFlag
                  countryCode={language === 'en' ? 'US' : 'VN'}
                  svg
                  style={{
                    width: '1.2em',
                    height: '1.2em',
                    marginLeft: '5px',
                  }}
                />
              </div>
              <select
                className="bg-transparent text-white border-none focus:outline-none text-[12px]"
                value={language}
                onChange={handleLanguageChange}
              >
                <option className="text-[#020202]" value="en">
                  English
                </option>
                <option className="text-[#020202]" value="vi">
                  Tiếng Việt
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="w-full bg-[#0156FF] lg:bg-white border-b">
        <MenuHeaderPage />
      </div>
    </div>
  );
};

export default HeaderComponent;
