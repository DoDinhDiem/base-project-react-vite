import React from 'react';

import useTranslation from '@/hook/use-translation';

const AccountPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className="w-[232px] mx-auto py-4 relative "
        style={{
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.14)',
        }}
      >
        <div className="absolute -top-2 right-4 w-4 h-4">
          <div className="absolute w-4 h-4 bg-white rotate-45 border-t border-l"></div>
        </div>
        <div className="px-6 space-y-4">
          <div className="hover:text-purple-600 text-sm font-medium cursor-pointer">
            {t('Tài khoản của tôi')}
          </div>

          <div className="hover:text-purple-600 text-sm font-medium cursor-pointer">
            {t('Danh sách yêu thích')} (0)
          </div>

          <div className="hover:text-purple-600 text-sm font-medium cursor-pointer">
            {t('So sánh')} (0)
          </div>

          <div className="hover:text-purple-600 text-sm font-medium cursor-pointer">
            {t('Tạo tài khoản')}
          </div>

          <div className="hover:text-purple-600 text-sm font-medium cursor-pointer">
            {t('Đăng ký')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
