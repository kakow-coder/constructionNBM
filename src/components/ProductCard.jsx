import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewDetails = () => {
    onViewDetails(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white"
            onClick={handleViewDetails}
          >
            <Eye size={16} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-orange-600 cursor-pointer" onClick={handleViewDetails}>
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            ou 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')} sem juros
          </p>
        </div>

        {/* Stock Status */}
        <div className="mb-3">
          {product.inStock ? (
            <span className="text-xs text-green-600 font-medium">✓ Em estoque</span>
          ) : (
            <span className="text-xs text-red-600 font-medium">✗ Fora de estoque</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart size={16} className="mr-2" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

