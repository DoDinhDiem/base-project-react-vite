import React, { useMemo } from 'react';

import useTranslation from '@/hook/use-translation';

const FooterComponent = () => {
  const { t } = useTranslation();
  const information = useMemo(
    () => [
      { title: t('Về chúng tôi'), link: '#' },
      { title: t('Về zip'), link: '#' },
      { title: t('Chính sách bảo mật'), link: '#' },
      { title: t('Tìm kiếm'), link: '#' },
      { title: t('Điều khoản'), link: '#' },
      { title: t('Đơn hàng và hoàn trả'), link: '#' },
      { title: t('Liên hệ'), link: '#' },
      { title: t('Tìm kiếm nâng cao'), link: '#' },
      { title: t('Đăng ký nhận tin'), link: '#' },
    ],
    [t],
  );

  const pcParts = useMemo(
    () => [
      { title: t('CPU'), link: '#' },
      { title: t('Card mở rộng'), link: '#' },
      { title: t('Ổ cứng (HDD)'), link: '#' },
      { title: t('Card đồ họa'), link: '#' },
      { title: t('Bàn phím / Chuột'), link: '#' },
      { title: t('Vỏ máy / Nguồn / Tản nhiệt'), link: '#' },
      { title: t('RAM (Bộ nhớ)'), link: '#' },
      { title: t('Phần mềm'), link: '#' },
      { title: t('Loa / Tai nghe'), link: '#' },
      { title: t('Bo mạch chủ'), link: '#' },
    ],
    [t],
  );

  const desktopPCs = useMemo(
    () => [
      { title: t('PC tùy chỉnh'), link: '#' },
      { title: t('Máy chủ'), link: '#' },
      { title: t('PC MSI All-In-One'), link: '#' },
      { title: t('PC HP/Compaq'), link: '#' },
      { title: t('PC ASUS'), link: '#' },
      { title: t('PC Tecs'), link: '#' },
    ],
    [t],
  );

  const laptops = [
    { title: t('Laptop văn phòng'), link: '#' },
    { title: t('MSI dòng workstation'), link: '#' },
    { title: t('MSI dòng prestige'), link: '#' },
    { title: t('Máy tính bảng'), link: '#' },
    { title: t('Netbooks'), link: '#' },
    { title: t('Laptop Gaming Infinity'), link: '#' },
  ];

  return (
    <footer className="bg-black text-white p-6">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {t('Đăng ký nhận bản tin của chúng tôi.')}
            </h2>
            <p className="text-gray-400 text-[16px]">
              {t('Hãy là người đầu tiên nghe về những ưu đãi mới nhất.')}
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder={t('Email của bạn')}
              className="px-4 py-2 bg-transparent border border-gray-600 rounded text-white min-w-[391px]"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {t('Đăng ký')}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-[16px] text-gray-500 font-bold mb-2">
            {t('Thông tin')}
          </h3>
          <ul>
            {information.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-white font-normal text-[13px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] font-bold text-gray-500 mb-2">
            {t('Bộ phận máy tính')}
          </h3>
          <ul>
            {pcParts.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-white font-normal text-[13px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] font-bold text-gray-500 mb-2">
            {t('Máy tính để bàn')}
          </h3>
          <ul>
            {desktopPCs.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-white  font-normal text-[13px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] font-bold text-gray-500 mb-4">Laptops</h3>
          <ul>
            {laptops.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-white  font-normal text-[13px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] font-bold text-gray-500 mb-2">
            {t('Địa chỉ')}
          </h3>
          <p className="text-[13px] text-white">
            Address: 1234 Street Address City Address, 1234
          </p>
          <p className="text-white text-[13px]">
            Phone:{' '}
            <a href="tel:0012345678" className="text-blue-500">
              (00) 1234 5678
            </a>
          </p>
          <div className="mt-4 text-[13px]">
            <p className="text-white">We are open:</p>
            <p className="text-white">Monday-Thursday: 9:00 AM - 5:30 PM</p>
            <p className="text-white">Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-white">Saturday: 11:00 AM - 5:00 PM</p>
          </div>
          <p className="mt-4 text-white text-[13px]">
            E-mail:{' '}
            <a href="mailto:shop@email.com" className="text-blue-500">
              shop@email.com
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="flex gap-2">
            <img
              src="/assets/images/paypal.png"
              alt="Payment method"
              className="h-6 bg-[#CCDEFF] p-1 rounded-sm"
            />
            <img
              src="/assets/payment/visa.png"
              alt="Payment method"
              className="h-6"
            />
            <img
              src="/assets/payment/Group-2.png"
              alt="Payment method"
              className="h-6 bg-[#CCDEFF] p-1 rounded-sm"
            />
            <img
              src="/assets/payment/discover.png"
              alt="Payment method"
              className="h-6"
            />
            <img
              src="/assets/payment/american-express.png"
              alt="Payment method"
              className="h-6"
            />
          </div>
          <p className="text-gray-400">Copyright © 2020 Shop Pty. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
