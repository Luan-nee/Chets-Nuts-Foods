import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface ProductFormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProductFormModal({
  open,
  onClose,
}: ProductFormModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-card-foreground">
            Añadir nuevo producto
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
                placeholder="CFE001A"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nombre-producto" className="text-card-foreground">
                Nombre del producto
              </Label>
              <Input
                id="nombre-producto"
                placeholder="Ingrese el nombre del producto"
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
                type="number"
                placeholder="0"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock-minimo" className="text-card-foreground">
                Stock mínimo
              </Label>
              <Input
                id="stock-minimo"
                type="number"
                placeholder="0"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="precio-venta" className="text-card-foreground">
                Precio de venta
              </Label>
              <Input
                id="precio-venta"
                type="number"
                step="0.01"
                placeholder="0.00"
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
              placeholder="Ingrese la descripción del producto"
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
}
