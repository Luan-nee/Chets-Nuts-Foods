import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { PlusIcon, Trash2Icon } from 'lucide-react';

interface RemissionGuideDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function RemissionGuideDrawer({ open, onClose }: RemissionGuideDrawerProps) {
  const [activeTab, setActiveTab] = useState('destination');
  const [products, setProducts] = useState<Array<{ sku: string; quantity: number }>>([]);

  const addProduct = () => {
    setProducts([...products, { sku: '', quantity: 0 }]);
  };

  const removeProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-card-foreground">
            Crear guía de remisión
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 bg-muted">
            <TabsTrigger value="destination" className="text-card-foreground">
              Destino
            </TabsTrigger>
            <TabsTrigger value="products" className="text-card-foreground">
              Productos
            </TabsTrigger>
            <TabsTrigger value="confirm" className="text-card-foreground">
              Confirmar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="destination" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="customer" className="text-card-foreground">Nombre del cliente</Label>
              <Input id="customer" placeholder="Ingrese el nombre del cliente" className="text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-card-foreground">Destino</Label>
              <Input id="destination" placeholder="Ingrese la dirección de destino" className="text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="carrier" className="text-card-foreground">Transportista</Label>
              <Input id="carrier" placeholder="Ingrese el nombre del transportista" className="text-foreground" />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => setActiveTab('products')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Siguiente: Añadir productos
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-1 space-y-2">
                    <Label className="text-card-foreground">SKU del producto</Label>
                    <Input
                      placeholder="PRD-XXX"
                      value={product.sku}
                      onChange={(e) => {
                        const newProducts = [...products];
                        newProducts[index].sku = e.target.value;
                        setProducts(newProducts);
                      }}
                      className="text-foreground"
                    />
                  </div>
                  <div className="w-32 space-y-2">
                    <Label className="text-card-foreground">Cantidad</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={product.quantity}
                      onChange={(e) => {
                        const newProducts = [...products];
                        newProducts[index].quantity = parseInt(e.target.value) || 0;
                        setProducts(newProducts);
                      }}
                      className="text-foreground"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeProduct(index)}
                      className="bg-transparent text-destructive hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2Icon className="h-5 w-5" strokeWidth={2} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={addProduct}
              className="w-full border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <PlusIcon className="mr-2 h-5 w-5" strokeWidth={2} />
              Agregar producto
            </Button>

            <div className="flex justify-between">
                <Button
                variant="outline"
                onClick={() => setActiveTab('destination')}
                className="border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Atrás
              </Button>
              <Button
                onClick={() => setActiveTab('confirm')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Siguiente: Confirmar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="confirm" className="space-y-6">
            <div className="rounded-lg border border-border bg-muted p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Revisar detalles de la guía
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cliente:</span>
                  <span className="text-card-foreground">Acme Corp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destino:</span>
                  <span className="text-card-foreground">New York, NY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transportista:</span>
                  <span className="text-card-foreground">FedEx</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Productos totales:</span>
                  <span className="text-card-foreground">{products.length}</span>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setActiveTab('products')}
                className="border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Atrás
              </Button>
              <Button
                onClick={onClose}
                className="bg-success text-success-foreground hover:bg-success/90"
              >
                Crear guía
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
