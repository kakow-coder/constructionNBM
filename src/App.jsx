import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowProducts(true);
    // Scroll to products section
    setTimeout(() => {
      const productsSection = document.getElementById('products-section');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setShowProducts(true);
      setTimeout(() => {
        const productsSection = document.getElementById('products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleShopNowClick = () => {
    setShowProducts(true);
    setTimeout(() => {
      const productsSection = document.getElementById('products-section');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header 
          onCategoryClick={handleCategoryClick}
          onCartClick={() => setIsCartOpen(true)}
          onSearchChange={handleSearchChange}
        />

        {/* Hero Section */}
        {!showProducts && (
          <HeroSection onShopNowClick={handleShopNowClick} />
        )}

        {/* Categories Section */}
        {!showProducts && (
          <CategoriesSection onCategoryClick={handleCategoryClick} />
        )}

        {/* Products Section */}
        {showProducts && (
          <div id="products-section">
            <ProductGrid 
              products={products}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onViewDetails={handleViewDetails}
            />
          </div>
        )}

        {/* Back to Home Button */}
        {showProducts && (
          <div className="container mx-auto px-4 pb-8">
            <div className="text-center">
              <button
                onClick={() => {
                  setShowProducts(false);
                  setSelectedCategory(null);
                  setSearchQuery('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-orange-600 hover:text-orange-700 font-semibold underline"
              >
                ← Voltar ao Início
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <Footer />

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isProductModalOpen}
          onClose={() => {
            setIsProductModalOpen(false);
            setSelectedProduct(null);
          }}
        />

        {/* Cart Sidebar */}
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </CartProvider>
  );
}

export default App;

