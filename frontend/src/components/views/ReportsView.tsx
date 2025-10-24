import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/* 
  {
    "mes": "Ene",
    "entrada": 450,
    "salida": 380
  }
*/
const stockMovementData = [
  { month: 'Jan', inbound: 450, outbound: 380 },
  { month: 'Feb', inbound: 520, outbound: 420 },
  { month: 'Mar', inbound: 480, outbound: 510 },
  { month: 'Apr', inbound: 600, outbound: 480 },
  { month: 'May', inbound: 550, outbound: 520 },
  { month: 'Jun', inbound: 620, outbound: 580 },
];

// porcentaje de productos en cada categoría
const categoryData = [
  { name: 'Electronics', value: 35 },
  { name: 'Hardware', value: 25 },
  { name: 'Tools', value: 20 },
  { name: 'Raw Materials', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['hsl(192, 72%, 42%)', 'hsl(192, 45%, 56%)', 'hsl(220, 15%, 32%)', 'hsl(148, 45%, 42%)', 'hsl(210, 10%, 68%)'];

export default function ReportsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-semibold text-foreground">
          Informes
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Analice las tendencias y el rendimiento del inventario
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
              <CardTitle className="text-xl font-semibold text-card-foreground">
              Movimiento de stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stockMovementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 15%, 90%)" />
                <XAxis dataKey="month" stroke="hsl(210, 15%, 20%)" />
                <YAxis stroke="hsl(210, 15%, 20%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(0, 0%, 100%)',
                    border: '1px solid hsl(210, 15%, 90%)',
                    borderRadius: '8px',
                    color: 'hsl(210, 15%, 20%)',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="inbound"
                  stroke="hsl(192, 72%, 42%)"
                  strokeWidth={2}
                  name="Entradas"
                />
                <Line
                  type="monotone"
                  dataKey="outbound"
                  stroke="hsl(192, 45%, 56%)"
                  strokeWidth={2}
                  name="Salidas"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
              <CardTitle className="text-xl font-semibold text-card-foreground">
              Categorías de producto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(0, 0%, 100%)',
                    border: '1px solid hsl(210, 15%, 90%)',
                    borderRadius: '8px',
                    color: 'hsl(210, 15%, 20%)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Métricas clave
            </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted p-6">
              <p className="text-sm text-muted-foreground">Promedios de envíos por día</p>
                <p className="mt-2 text-3xl font-semibold text-card-foreground">
                24.5 días
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted p-6">
              <p className="text-sm text-muted-foreground">Valor total de ventas hoy</p>
              <p className="mt-2 text-3xl font-semibold text-card-foreground">
                $458,920
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted p-6">
              <p className="text-sm text-muted-foreground">Guías emitidas hoy</p>
              <p className="mt-2 text-3xl font-semibold text-card-foreground">
                156
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
