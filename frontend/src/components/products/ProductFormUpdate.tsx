import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface ProductFromUpdateProps {
  productData: {
    id: number;
    codigo_producto: string;
    nombre: string;
    descripcion: string;
    stock: number;
    stock_minimo: number;
    precio_venta: number;
    fecha_registro: string;
    fecha_vencimiento: string;
  };
  open: boolean;
  onClose: () => void;
}

const ProductFromUpdate = ({
  productData,
  open,
  onClose,
}: ProductFromUpdateProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-card-foreground">
            Editar datos del producto
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="codigo" className="text-card-foreground">
                Código
              </Label>
              <Input
                id="codigo"
                value={productData.codigo_producto}
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nombre-producto" className="text-card-foreground">
                Nombre del producto
              </Label>
              <Input
                id="nombre-producto"
                value={productData.nombre}
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
                value={productData.stock}
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
                value={productData.stock_minimo}
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
                value={productData.precio_venta}
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
              value={productData.descripcion}
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
              value={productData.fecha_vencimiento}
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
