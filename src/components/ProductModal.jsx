import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            {product.originalPrice && (
              <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category */}
            <Badge variant="secondary" className="text-sm">
              {product.category}
            </Badge>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} avaliações)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-orange-600">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
              <p className="text-gray-600">
                ou 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')} sem juros
              </p>
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <span className="text-green-600 font-medium flex items-center">
                  ✓ Em estoque - Pronto para envio
                </span>
              ) : (
                <span className="text-red-600 font-medium flex items-center">
                  ✗ Produto fora de estoque
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Descrição</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Especificações</h3>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantidade:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={decrementQuantity}
                    className="px-3"
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={incrementQuantity}
                    className="px-3"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>

              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={20} className="mr-2" />
                Adicionar ao Carrinho - R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">🚚 Frete grátis</span> para compras acima de R$ 299
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">🔒 Compra segura</span> - Seus dados protegidos
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">↩️ Troca fácil</span> - 30 dias para trocar
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;

