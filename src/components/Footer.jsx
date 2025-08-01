import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-orange-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Receba nossas ofertas especiais
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Cadastre-se em nossa newsletter e seja o primeiro a saber sobre promoções, novos produtos e dicas de construção.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-2 sm:space-y-0 sm:space-x-2">
            <Input 
              type="email" 
              placeholder="Seu e-mail"
              className="flex-1 bg-white text-gray-800"
            />
            <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
              Cadastrar
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                  C
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Loja BBM</h3>
                <p className="text-sm text-gray-400">Materiais de Construção</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Há mais de 20 anos fornecendo materiais de construção de qualidade 
              para profissionais e pessoas físicas em todo o Brasil.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nossas Lojas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dicas de Construção</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Garantia</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <div>
                  <p className="text-white font-medium">(11) 3456-7890</p>
                  <p className="text-gray-400 text-xs">Seg-Sex: 8h às 18h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500" />
                <div>
                  <p className="text-white">contato@construtora.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-1" />
                <div>
                  <p className="text-white text-sm">
                    Rua das Construções, 123<br />
                    Centro - São Paulo/SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Construtora. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">Formas de Pagamento:</span>
              <div className="flex space-x-2">
                <span className="bg-gray-700 px-2 py-1 rounded text-xs">VISA</span>
                <span className="bg-gray-700 px-2 py-1 rounded text-xs">MASTER</span>
                <span className="bg-gray-700 px-2 py-1 rounded text-xs">PIX</span>
                <span className="bg-gray-700 px-2 py-1 rounded text-xs">BOLETO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

