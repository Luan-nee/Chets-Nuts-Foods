import { PackageIcon, AlertTriangleIcon, FileTextIcon, TrendingUpIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const statsCards = [
  {
    title: 'Total Stock',
    value: '12,458',
    subtitle: 'Units in inventory',
    icon: PackageIcon,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    link: '/products',
  },
  {
    title: 'Low Inventory',
    value: '23',
    subtitle: 'Products below minimum',
    icon: AlertTriangleIcon,
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    link: '/products',
  },
  {
    title: 'Recent Guides',
    value: '47',
    subtitle: 'Issued this month',
    icon: FileTextIcon,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    link: '/guides',
  },
  {
    title: 'Top Products',
    value: '156',
    subtitle: 'High turnover items',
    icon: TrendingUpIcon,
    color: 'text-success',
    bgColor: 'bg-success/10',
    link: '/reports',
  },
];

const recentGuides = [
  { id: 'RG-2024-001', customer: 'Acme Corp', date: '2024-01-15', status: 'Delivered' },
  { id: 'RG-2024-002', customer: 'TechStart Inc', date: '2024-01-14', status: 'In Transit' },
  { id: 'RG-2024-003', customer: 'Global Supplies', date: '2024-01-14', status: 'Pending' },
];

const lowStockProducts = [
  { sku: 'PRD-001', name: 'Widget A', current: 15, minimum: 50 },
  { sku: 'PRD-045', name: 'Component B', current: 8, minimum: 30 },
  { sku: 'PRD-089', name: 'Part C', current: 22, minimum: 40 },
];

export default function DashboardView() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-semibold text-foreground">
          Dashboard
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Overview of your inventory and recent activity
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className="cursor-pointer border-border bg-card transition-all duration-200 ease-in hover:shadow-md"
              onClick={() => navigate(stat.link)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium text-card-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} strokeWidth={2} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold text-card-foreground">
                  {stat.value}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.subtitle}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.map((product) => (
                <div
                  key={product.sku}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted p-4"
                >
                  <div>
                    <p className="font-mono text-sm font-medium text-card-foreground">
                      {product.sku}
                    </p>
                    <p className="text-base text-card-foreground">{product.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      Current: {product.current}
                    </p>
                    <p className="text-sm text-warning">
                      Min: {product.minimum}
                    </p>
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => navigate('/products')}
              >
                View All Products
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Recent Remission Guides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted p-4"
                >
                  <div>
                    <p className="font-mono text-sm font-medium text-card-foreground">
                      {guide.id}
                    </p>
                    <p className="text-base text-card-foreground">{guide.customer}</p>
                    <p className="text-sm text-muted-foreground">{guide.date}</p>
                  </div>
                  <div>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        guide.status === 'Delivered'
                          ? 'bg-success/10 text-success'
                          : guide.status === 'In Transit'
                          ? 'bg-secondary/10 text-secondary'
                          : 'bg-warning/10 text-warning'
                      }`}
                    >
                      {guide.status}
                    </span>
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => navigate('/guides')}
              >
                View All Guides
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
