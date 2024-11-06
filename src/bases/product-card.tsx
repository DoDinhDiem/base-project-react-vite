import React from 'react';

interface ProductCardProps {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock?: boolean;
  discount?: number;
  isNew?: boolean;
  onAddToCart?: (id: string | number) => void;
  onQuickView?: (id: string | number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  rating,
  reviewCount,
  inStock = true,
  onAddToCart,
}) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="relative bg-white hover:shadow-lg duration-300 group">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex gap-2">
        {/* Stock Status */}
        <div className="flex items-center gap-1 mb-2">
          <div
            className={`w-2 h-2 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'}`}
          ></div>
          <span
            className={`text-sm text-gray-600 ${inStock ? 'text-green-600' : 'text-red-600'}`}
          >
            {inStock ? 'Instock' : 'Out of stock'}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative pt-[100%] rounded-t-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="absolute top-[20%] left-[20%] max-w-40 max-h-40 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-3 h-3 ${
                  index < rating ? 'text-yellow-400' : 'text-gray-200'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                />
              </svg>
            ))}
          </div>
          <span className="text-[12px] text-gray-600">
            Reviews ({reviewCount})
          </span>
        </div>
        {/* Product Name */}
        <h3 className="font-medium text-sm mb-2 line-clamp-2">{name}</h3>

        {/* Price */}
        <div className="gap-2 mb-4">
          {originalPrice && originalPrice > price && (
            <p className="text-gray-500 text-sm line-through">
              {formatPrice(originalPrice)}
            </p>
          )}
          <p className="text-lg font-bold">{formatPrice(price)}</p>
        </div>

        {/* Buttons */}
        <div className="hidden group-hover:block w-full ">
          <button
            onClick={() => onAddToCart?.(id)}
            disabled={!inStock}
            className={`w-full max-w-[200px] mx-auto px-4 py-2 text-sm font-semibold text-blue-600 rounded-full transition-all
            ${
              inStock
                ? 'border-2 border-blue-600 hover:border-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            } opacity-0 group-hover:opacity-100`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
