import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface ProductFromViewProps {
  open: boolean;
  onClose: () => void;
}

const ProductFromView = ({ open, onClose }: ProductFromViewProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-card-foreground">
            Eliminar un producto
          </DialogTitle>
          <DialogDescription>
            ¿Está seguro de eliminar este producto?
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
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
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFromView;
