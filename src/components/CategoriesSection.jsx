import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

const CategoriesSection = ({ onCategoryClick }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Nossas Categorias
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre tudo que você precisa para sua obra, organizados por categoria
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => onCategoryClick(category.name)}
            >
              {/* Category Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={categories.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-orange-600 hover:text-orange-700 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-300"
                >
                  Ver Produtos
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3"
            onClick={() => onCategoryClick(null)}
          >
            Ver Todos os Produtos
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

