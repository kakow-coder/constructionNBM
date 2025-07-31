import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from './ProductCard';
import { Filter, Grid, List } from 'lucide-react';

const ProductGrid = ({ products, selectedCategory, searchQuery, onViewDetails }) => {
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState('all');

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          filtered = filtered.filter(product => product.price < 50);
          break;
        case '50to100':
          filtered = filtered.filter(product => product.price >= 50 && product.price < 100);
          break;
        case '100to200':
          filtered = filtered.filter(product => product.price >= 100 && product.price < 200);
          break;
        case 'over200':
          filtered = filtered.filter(product => product.price >= 200);
          break;
      }
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [products, selectedCategory, searchQuery, sortBy, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCategory || 'Todos os Produtos'}
          </h2>
          <p className="text-gray-600">
            {filteredAndSortedProducts.length} produto{filteredAndSortedProducts.length !== 1 ? 's' : ''} encontrado{filteredAndSortedProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center space-x-4">
          {/* Price Filter */}
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-[180px]">
              <Filter size={16} className="mr-2" />
              <SelectValue placeholder="Filtrar por preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os preços</SelectItem>
              <SelectItem value="under50">Até R$ 50</SelectItem>
              <SelectItem value="50to100">R$ 50 - R$ 100</SelectItem>
              <SelectItem value="100to200">R$ 100 - R$ 200</SelectItem>
              <SelectItem value="over200">Acima de R$ 200</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Nome A-Z</SelectItem>
              <SelectItem value="price-low">Menor preço</SelectItem>
              <SelectItem value="price-high">Maior preço</SelectItem>
              <SelectItem value="rating">Melhor avaliado</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode */}
          <div className="flex border rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-r-none"
            >
              <Grid size={16} />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-l-none"
            >
              <List size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Products */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <Filter size={64} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Nenhum produto encontrado
          </h3>
          <p className="text-gray-500">
            Tente ajustar os filtros ou buscar por outros termos.
          </p>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

