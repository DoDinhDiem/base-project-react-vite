import { MdOutlineNavigateNext } from 'react-icons/md';

import image29 from '@/assets/images/Image-29.png';
import ProductCard from '@/bases/product-card';
import useTranslation from '@/hook/use-translation';

import LogoCompanyComponent from './logo-company.component';

const MenuDropDownPage = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto border h-[540px] bg-white z-50">
      <div className="h-3/4 flex">
        <div className="w-1/4 h-full p-4 pr-2 border-r">
          <ul>
            <li className="font-bold py-2 flex justify-between items-center cursor-pointer">
              <span>{t('Dùng Sổ Tay Hàng Ngày')}</span>{' '}
              <span>
                <MdOutlineNavigateNext />
              </span>
            </li>
            <li className="font-bold py-2 flex justify-between items-center cursor-pointer">
              <span>{t('Dòng Máy Trạm MSI')}</span>
              <span>
                <MdOutlineNavigateNext />
              </span>
            </li>
            <li className="font-bold py-2 cursor-pointer">
              {t('Dòng MSI Prestige')}
            </li>
            <li className="font-bold py-2 cursor-pointer">
              {t('Sổ Tay Chơi Game')}
            </li>
            <li className="font-bold py-2 cursor-pointer">
              {t('Máy Tính Bảng Và Bút Cảm Ứng')}
            </li>
            <li className="font-bold py-2 cursor-pointer">
              {t('Máy Tính Xách Tay Mini')}
            </li>
            <li className="font-bold py-2 cursor-pointer">
              {t('Sổ Tay Chơi Game Infinity')}
            </li>
          </ul>
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-4 gap-4 h-full p-2">
            <div>
              <ProductCard
                id="2"
                name="Gaming Laptop XYZ"
                price={1299}
                originalPrice={1499}
                imageUrl={image29}
                rating={4}
                reviewCount={12}
                inStock={true}
              />
            </div>
            <div>
              <ProductCard
                id="2"
                name="Gaming Laptop XYZ"
                price={1299}
                originalPrice={1499}
                imageUrl={image29}
                rating={4}
                reviewCount={12}
                inStock={true}
              />
            </div>
            <div>
              <ProductCard
                id="2"
                name="Gaming Laptop XYZ"
                price={1299}
                originalPrice={1499}
                imageUrl={image29}
                rating={4}
                reviewCount={12}
                inStock={true}
              />
            </div>
            <div>
              <ProductCard
                id="2"
                name="Gaming Laptop XYZ"
                price={1299}
                originalPrice={1499}
                imageUrl={image29}
                rating={4}
                reviewCount={12}
                inStock={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/4 px-4 pb-4 border-t">
        <LogoCompanyComponent />
      </div>
    </div>
  );
};

export default MenuDropDownPage;
