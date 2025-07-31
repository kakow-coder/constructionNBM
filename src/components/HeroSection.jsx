import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Truck, CreditCard } from 'lucide-react';
import heroImage from '../assets/images/hero_banner.jpg';

const HeroSection = ({ onShopNowClick }) => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Materiais de
              <span className="block text-yellow-300">Construção</span>
              de Qualidade
            </h1>
            <p className="text-xl lg:text-2xl text-orange-100 leading-relaxed">
              Tudo que você precisa para sua obra, com os melhores preços e entrega rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                onClick={onShopNowClick}
              >
                Ver Produtos
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 text-lg"
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Materiais de Construção" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-white text-gray-800 py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <Truck className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Entrega Rápida</h3>
                <p className="text-sm text-gray-600">Frete grátis acima de R$ 299</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <Shield className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Produtos Garantidos</h3>
                <p className="text-sm text-gray-600">Qualidade certificada</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <CreditCard className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Pagamento Seguro</h3>
                <p className="text-sm text-gray-600">Parcelamos em até 12x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

