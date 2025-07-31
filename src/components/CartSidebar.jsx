import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus, Trash2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const calculateShipping = () => {
    const total = getTotalPrice();
    return total >= 299 ? 0 : 15.90;
  };

  const shipping = calculateShipping();
  const total = getTotalPrice() + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingCart size={24} />
            <span>Carrinho de Compras</span>
            {items.length > 0 && (
              <Badge variant="secondary">{items.length}</Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Seu carrinho está vazio
                </h3>
                <p className="text-gray-500 mb-4">
                  Adicione produtos para começar suas compras
                </p>
                <Button onClick={onClose} className="bg-orange-500 hover:bg-orange-600">
                  Continuar Comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Clear Cart Button */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {items.length} item{items.length !== 1 ? 's' : ''}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Limpar
                  </Button>
                </div>

                {/* Cart Items List */}
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-3 p-3 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 space-y-2">
                      <h4 className="font-medium text-sm line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-orange-600">
                          R$ {item.price.toFixed(2).replace('.', ',')}
                        </span>
                        <div className="flex items-center space-x-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center border rounded">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="px-2 h-8"
                            >
                              <Minus size={12} />
                            </Button>
                            <span className="px-3 text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="px-2 h-8"
                            >
                              <Plus size={12} />
                            </Button>
                          </div>
                          {/* Remove Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 px-2 h-8"
                          >
                            <X size={12} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              {/* Shipping Info */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Frete:</span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                    {shipping === 0 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2).replace('.', ',')}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-500">
                    Frete grátis para compras acima de R$ 299,00
                  </p>
                )}
                <hr />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span className="text-orange-600">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                  Finalizar Compra
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={onClose}
                >
                  Continuar Comprando
                </Button>
              </div>

              {/* Payment Info */}
              <div className="text-center text-xs text-gray-500 space-y-1">
                <p>💳 Parcelamos em até 12x sem juros</p>
                <p>🔒 Compra 100% segura e protegida</p>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;

