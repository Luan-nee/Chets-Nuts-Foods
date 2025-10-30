import { useState } from "react";
import {
  SearchIcon,
  PlusIcon,
  EditIcon,
  Trash2Icon,
  EyeIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import ProductFormModal from "../products/ProductFormModal";
import ProductFormView from "../products/ProductFromView";
import ProductFormUpdate from "../products/ProductFormUpdate";
import ProductFormDelete from "../products/ProductFormDelete";
import { useAppStore } from "../../stores/appStore";

const data = [
  {
    id: 145,
    nombre: "Café Gourmet Blend Oscuro",
    descripcion:
      "Mezcla selecta de granos arábica tostados oscuros. Ideal para espresso o prensa francesa.",
    stock: 580,
    precio_venta: 15.99,
    codigo_producto: "CFE001A",
    stock_minimo: 100,
    fecha_registro: "2024-09-01",
    fecha_vencimiento: "2025-12-31",
  },
  {
    id: 146,
    nombre: "Té Verde Sencha Orgánico",
    descripcion:
      "Hojas de té verde japonés, de sabor fresco y herbáceo. Empaque de 50g.",
    stock: 1200,
    precio_venta: 9.5,
    codigo_producto: "TVE002B",
    stock_minimo: 250,
    fecha_registro: "2024-10-15",
    fecha_vencimiento: "2026-06-20",
  },
];

export default function ProductsView() {
  const [searchQuery, setSearchQuery] = useState("");
  const { productModalOpen, setProductModalOpen } = useAppStore();
  const { productFormViewOpen, setProductFormViewOpen } = useAppStore();
  const { productFormUpdateOpen, setProductFormUpdateOpen } = useAppStore();
  const { productFormDeleteOpen, setProductFormDeleteOpen } = useAppStore();

  const [selectedProductId, setSelectedProductId] = useState<number>(0);

  const filteredProducts = data.filter((product) => {
    const matchesSearch =
      product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.codigo_producto.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
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
              <SearchIcon
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                strokeWidth={2}
              />
              <Input
                type="search"
                placeholder="Buscar por nombre o SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-foreground"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-4 text-left text-sm font-medium text-card-foreground">
                    Código
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-medium text-card-foreground">
                    Nombre
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
                {filteredProducts.map((product, index) => (
                  <tr
                    key={product.id}
                    className="border-b border-border transition-colors hover:bg-muted"
                  >
                    <td className="px-4 py-4 font-mono text-sm text-card-foreground">
                      {product.codigo_producto}
                    </td>
                    <td className="px-4 py-4 text-base text-card-foreground">
                      {product.nombre}
                    </td>
                    <td className="px-4 py-4 text-base">
                      <span
                        className={
                          product.stock < product.stock_minimo
                            ? "text-warning"
                            : "text-success"
                        }
                      >
                        {product.stock}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        / {product.stock_minimo}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-base text-card-foreground">
                      ${product.precio_venta.toFixed(2)}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex justify-end space-x-2">
                        <Button
                          onClick={() => {
                            setSelectedProductId(index);
                            setProductFormViewOpen(true);
                          }}
                          variant="ghost"
                          size="icon"
                          className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <EyeIcon className="h-5 w-5" strokeWidth={2} />
                        </Button>
                        <Button
                          onClick={() => {
                            // setSelectedProductId(product.id);
                            setProductFormUpdateOpen(true);
                          }}
                          variant="ghost"
                          size="icon"
                          className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <EditIcon className="h-5 w-5" strokeWidth={2} />
                        </Button>
                        <Button
                          onClick={() => {
                            // setSelectedProductId(product.id);
                            setProductFormDeleteOpen(true);
                          }}
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

      <ProductFormView
        productData={data[selectedProductId]}
        open={productFormViewOpen}
        onClose={() => setProductFormViewOpen(false)}
      />

      <ProductFormUpdate
        productData={data[selectedProductId]}
        open={productFormUpdateOpen}
        onClose={() => setProductFormUpdateOpen(false)}
      />

      <ProductFormDelete
        open={productFormDeleteOpen}
        onClose={() => setProductFormDeleteOpen(false)}
      />
    </div>
  );
}
