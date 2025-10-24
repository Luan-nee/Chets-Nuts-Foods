import { useState } from 'react';
import { SearchIcon, PlusIcon, EditIcon, Trash2Icon, EyeIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import ProductFormModal from '../products/ProductFormModal';
import { useAppStore } from '../../stores/appStore';

const mockProducts = [
  { id: 1, sku: 'PRD-001', name: 'Widget A', category: 'Electronics', stock: 150, minimum: 50, price: 29.99 },
  { id: 2, sku: 'PRD-002', name: 'Component B', category: 'Hardware', stock: 85, minimum: 30, price: 15.50 },
  { id: 3, sku: 'PRD-003', name: 'Part C', category: 'Electronics', stock: 22, minimum: 40, price: 42.00 },
  { id: 4, sku: 'PRD-004', name: 'Tool D', category: 'Tools', stock: 200, minimum: 100, price: 89.99 },
  { id: 5, sku: 'PRD-005', name: 'Material E', category: 'Raw Materials', stock: 500, minimum: 200, price: 5.25 },
];

export default function ProductsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const { productModalOpen, setProductModalOpen } = useAppStore();

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-4xl font-semibold text-foreground">
            Productos
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Administre sus productos de inventario
          </p>
        </div>
          <Button
          onClick={() => setProductModalOpen(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <PlusIcon className="mr-2 h-5 w-5" strokeWidth={2} />
          Nuevo producto
        </Button>
      </div>

      <Card className="border-border bg-card">
        <CardContent className="pt-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" strokeWidth={2} />
              <Input
                type="search"
                placeholder="Buscar por nombre o SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-foreground"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full text-foreground md:w-48">
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                <SelectItem value="all" className="text-popover-foreground">Todas las categorías</SelectItem>
                <SelectItem value="Electronics" className="text-popover-foreground">Electrónica</SelectItem>
                <SelectItem value="Hardware" className="text-popover-foreground">Hardware</SelectItem>
                <SelectItem value="Tools" className="text-popover-foreground">Herramientas</SelectItem>
                <SelectItem value="Raw Materials" className="text-popover-foreground">Materias primas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-4 text-left text-sm font-medium text-card-foreground">
                    SKU
                  </th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-card-foreground">
                    Nombre
                  </th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-card-foreground">
                    Categoría
                  </th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-card-foreground">
                    Stock
                  </th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-card-foreground">
                    Precio
                  </th>
                    <th className="px-4 py-4 text-right text-sm font-medium text-card-foreground">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-border transition-colors hover:bg-muted"
                  >
                    <td className="px-4 py-4 font-mono text-sm text-card-foreground">
                      {product.sku}
                    </td>
                    <td className="px-4 py-4 text-base text-card-foreground">
                      {product.name}
                    </td>
                    <td className="px-4 py-4 text-base text-card-foreground">
                      {product.category}
                    </td>
                    <td className="px-4 py-4 text-base">
                      <span
                        className={
                          product.stock < product.minimum
                            ? 'text-warning'
                            : 'text-success'
                        }
                      >
                        {product.stock}
                      </span>
                      <span className="text-muted-foreground">
                        {' '}
                        / {product.minimum}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-base text-card-foreground">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <EyeIcon className="h-5 w-5" strokeWidth={2} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <EditIcon className="h-5 w-5" strokeWidth={2} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-transparent text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2Icon className="h-5 w-5" strokeWidth={2} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-base text-muted-foreground">
                    No se encontraron productos que coincidan con sus criterios
                  </p>
            </div>
          )}
        </CardContent>
      </Card>

      <ProductFormModal
        open={productModalOpen}
        onClose={() => setProductModalOpen(false)}
      />
    </div>
  );
}
