import { Dialog, DialogContent } from "../ui/dialog";
import { cn } from "../../lib/utils";

interface ProductFromViewProps {
  open: boolean;
  onClose: () => void;
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
}

const colors = {
  "primary-teal": "bg-teal-500",
  "secondary-blue": "text-blue-600",
  "bg-stock": "bg-indigo-50",
  "bg-min-stock": "bg-red-50",
  "bg-price": "bg-green-50",
};

const ClockIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-primary-teal"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

const ProductFromView = ({
  open,
  onClose,
  productData,
}: ProductFromViewProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-gray-100 max-w-2xl text-card-foreground p-0 border-0 shadow-lg">
        <div className="font-sans flex items-start justify-center">
          {/* Tarjeta de Visualización de Datos */}
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300">
            {/* Encabezado de la Tarjeta */}
            <div
              className={cn(colors["primary-teal"], "text-white p-6 md:p-8")}
            >
              <h1 className="text-3xl font-extrabold mb-1">
                {productData.nombre}
              </h1>
              <p className="text-teal-100 text-sm opacity-90">
                ID: {productData.id} | Código: {productData.codigo_producto}
              </p>
            </div>

            {/* Cuerpo y Detalles del Producto */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Sección de Descripción */}
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Descripción del Producto
                </h2>
                <p className="text-gray-600 leading-relaxed italic">
                  {productData.descripcion}
                </p>
              </div>

              {/* Sección de Inventario y Precios (Grid) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Stock Actual */}
                <div
                  className={cn(
                    colors["bg-stock"],
                    "p-4 rounded-xl shadow-inner border border-indigo-100"
                  )}
                >
                  <p className="text-sm font-medium text-indigo-700">
                    Stock Actual
                  </p>
                  <p className="text-2xl font-bold text-indigo-900 mt-1">
                    {productData.stock}
                  </p>
                </div>

                {/* Stock Mínimo */}
                <div
                  className={cn(
                    colors["bg-min-stock"],
                    "p-4 rounded-xl shadow-inner border border-red-100"
                  )}
                >
                  <p className="text-sm font-medium text-red-700">
                    Stock Mínimo
                  </p>
                  <p className="text-2xl font-bold text-red-900 mt-1">
                    {productData.stock_minimo}
                  </p>
                </div>

                {/* Precio de Venta */}
                <div
                  className={cn(
                    colors["bg-price"],
                    "p-4 rounded-xl shadow-inner border border-green-100 col-span-2 md:col-span-1"
                  )}
                >
                  <p className="text-sm font-medium text-green-700">
                    Precio de Venta
                  </p>
                  <p className="text-2xl font-bold text-green-900 mt-1">{`S/ ${productData.precio_venta.toFixed(
                    2
                  )}`}</p>
                </div>
              </div>

              {/* Sección de Fechas (Lista de Detalles) */}
              <div className="pt-4 border-t">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  Trazabilidad
                </h2>

                <dl className="space-y-2">
                  {/* Fecha de Registro */}
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <dt className="font-medium text-gray-500 flex items-center">
                      <CalendarIcon />
                      Fecha de Registro
                    </dt>
                    <dd className="text-gray-800 font-semibold">
                      {productData.fecha_registro}
                    </dd>
                  </div>

                  {/* Fecha de Vencimiento */}
                  <div className="flex justify-between items-center">
                    <dt className="font-medium text-gray-500 flex items-center">
                      <ClockIcon />
                      Fecha de Vencimiento
                    </dt>
                    <dd className="text-red-600 font-bold">
                      {productData.fecha_vencimiento}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}
      </DialogContent>
    </Dialog>
  );
};

export default ProductFromView;
