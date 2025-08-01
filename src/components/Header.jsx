import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '../context/CartContext';

const Header = ({ onCategoryClick, onCartClick, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const categories = [
    'Cimento e Argamassa',
    'Tijolos e Blocos',
    'Ferramentas',
    'Tintas e Vernizes',
    'Materiais Elétricos',
    'Materiais Hidráulicos',
    'Pisos e Revestimentos'
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-orange-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(11) 3456-7890</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>contato@construtormax.com.br</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Frete grátis para compras acima de R$ 299</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                C
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Loja BBM</h1>
              <p className="text-sm text-gray-600">Materiais de Construção</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 rounded-lg focus:border-orange-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <Button variant="ghost" className="hidden md:flex items-center space-x-2">
              <User size={20} />
              <span>Minha Conta</span>
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              className="relative flex items-center space-x-2"
              onClick={onCartClick}
            >
              <ShoppingCart size={20} />
              <span className="hidden md:inline">Carrinho</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 rounded-lg focus:border-orange-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex space-x-8 py-3">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => onCategoryClick(null)}
            >
              Todos os Produtos
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap"
                onClick={() => onCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full text-left justify-start text-gray-700 hover:text-orange-500"
                  onClick={() => {
                    onCategoryClick(null);
                    setIsMenuOpen(false);
                  }}
                >
                  Todos os Produtos
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full text-left justify-start text-gray-700 hover:text-orange-500"
                    onClick={() => {
                      onCategoryClick(category);
                      setIsMenuOpen(false);
                    }}
                  >
                    {category}
                  </Button>
                ))}
                <hr className="my-2" />
                <Button variant="ghost" className="w-full text-left justify-start">
                  <User size={20} className="mr-2" />
                  Minha Conta
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

