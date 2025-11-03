import { Producto } from "../../types/Producto";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface ProductFromUpdateProps {
  productData: Producto;
  open: boolean;
  onClose: () => void;
}

const ProductFromUpdate = ({
  productData,
  open,
  onClose,
}: ProductFromUpdateProps) => {
  const [formData, setFormData] = useState(productData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const isNumericField = ["stock", "stock-minimo", "precio-venta"].includes(
      id
    );
    const newValue = isNumericField ? Number(value) : value;
    setFormData((prevData) => {
      const keyMap: {
        [key: string]: keyof ProductFromUpdateProps["productData"];
      } = {
        codigo_producto: "codigo_producto",
        nombre: "nombre",
        descripcion: "descripcion",
        stock: "stock",
        stock_minimo: "stock_minimo",
        precio_venta: "precio_venta",
        fecha_vencimiento: "fecha_vencimiento",
      };

      const key = keyMap[id];
      if (!key) return prevData;

      return {
        ...prevData,
        [key]: newValue,
      };
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí es donde llamarías a tu API o función para guardar los cambios
    console.log("Datos a enviar para actualizar:", formData);
    // onClose(); // Cerrar el modal después de guardar
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-card-foreground">
            Editar datos del producto
          </DialogTitle>
          <DialogDescription>
            Modifica los campos para editar el producto.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="codigo" className="text-card-foreground">
                Código
              </Label>
              <Input
                id="codigo"
                value={formData.codigo_producto}
                onChange={handleChange}
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nombre-producto" className="text-card-foreground">
                Nombre del producto
              </Label>
              <Input
                id="nombre-producto"
                value={formData.nombre}
                onChange={handleChange}
                className="text-foreground"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="stock" className="text-card-foreground">
                Stock
              </Label>
              <Input
                id="stock"
                value={formData.stock}
                onChange={handleChange}
                type="number"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock-minimo" className="text-card-foreground">
                Stock mínimo
              </Label>
              <Input
                id="stock-minimo"
                value={formData.stock_minimo}
                onChange={handleChange}
                type="number"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="precio-venta" className="text-card-foreground">
                Precio de venta
              </Label>
              <Input
                id="precio-venta"
                value={formData.precio_venta}
                onChange={handleChange}
                type="number"
                step="0.01"
                className="text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-card-foreground">
              Descripción
            </Label>
            <Textarea
              id="description"
              value={formData.descripcion}
              onChange={handleChange}
              rows={4}
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fecha-vencimiento" className="text-card-foreground">
              Fecha de vencimiento
            </Label>
            <Input
              id="fecha-vencimiento"
              value={formData.fecha_vencimiento}
              onChange={handleChange}
              type="date"
              className="text-foreground"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Agregar producto
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFromUpdate;
