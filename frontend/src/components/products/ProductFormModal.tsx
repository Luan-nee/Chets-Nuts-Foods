import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

interface ProductFormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProductFormModal({ open, onClose }: ProductFormModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-card-foreground">
            Add New Product
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="sku" className="text-card-foreground">SKU</Label>
              <Input id="sku" placeholder="PRD-XXX" className="text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-card-foreground">Product Name</Label>
              <Input id="name" placeholder="Enter product name" className="text-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-card-foreground">Category</Label>
            <Select>
              <SelectTrigger className="text-foreground">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                <SelectItem value="electronics" className="text-popover-foreground">Electronics</SelectItem>
                <SelectItem value="hardware" className="text-popover-foreground">Hardware</SelectItem>
                <SelectItem value="tools" className="text-popover-foreground">Tools</SelectItem>
                <SelectItem value="raw-materials" className="text-popover-foreground">Raw Materials</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="stock" className="text-card-foreground">Current Stock</Label>
              <Input id="stock" type="number" placeholder="0" className="text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minimum" className="text-card-foreground">Minimum Stock</Label>
              <Input id="minimum" type="number" placeholder="0" className="text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="text-card-foreground">Price</Label>
              <Input id="price" type="number" step="0.01" placeholder="0.00" className="text-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-card-foreground">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter product description"
              rows={4}
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
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Add Product
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
