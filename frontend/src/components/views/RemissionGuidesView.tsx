import { useState } from 'react';
import { SearchIcon, PlusIcon, EyeIcon, DownloadIcon, PrinterIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import RemissionGuideDrawer from '../guides/RemissionGuideDrawer';
import { useAppStore } from '../../stores/appStore';

const mockGuides = [
  {
    id: 'RG-2024-001',
    customer: 'Acme Corp',
    destination: 'New York, NY',
    date: '2024-01-15',
    status: 'Delivered',
    items: 12,
  },
  {
    id: 'RG-2024-002',
    customer: 'TechStart Inc',
    destination: 'San Francisco, CA',
    date: '2024-01-14',
    status: 'In Transit',
    items: 8,
  },
  {
    id: 'RG-2024-003',
    customer: 'Global Supplies',
    destination: 'Chicago, IL',
    date: '2024-01-14',
    status: 'Pending',
    items: 15,
  },
  {
    id: 'RG-2024-004',
    customer: 'BuildCo',
    destination: 'Austin, TX',
    date: '2024-01-13',
    status: 'Delivered',
    items: 20,
  },
];

export default function RemissionGuidesView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const { guideDrawerOpen, setGuideDrawerOpen } = useAppStore();

  const filteredGuides = mockGuides.filter((guide) => {
    const matchesSearch =
      guide.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || guide.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-4xl font-semibold text-foreground">
            Remission Guides
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Track and manage product shipments
          </p>
        </div>
        <Button
          onClick={() => setGuideDrawerOpen(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <PlusIcon className="mr-2 h-5 w-5" strokeWidth={2} />
          New Guide
        </Button>
      </div>

      <Card className="border-border bg-card">
        <CardContent className="pt-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" strokeWidth={2} />
              <Input
                type="search"
                placeholder="SearchIcon by ID or customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-foreground"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full text-foreground md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                <SelectItem value="all" className="text-popover-foreground">All Status</SelectItem>
                <SelectItem value="Pending" className="text-popover-foreground">Pending</SelectItem>
                <SelectItem value="In Transit" className="text-popover-foreground">In Transit</SelectItem>
                <SelectItem value="Delivered" className="text-popover-foreground">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredGuides.map((guide) => (
              <div
                key={guide.id}
                className="flex flex-col gap-4 rounded-lg border border-border bg-muted p-6 transition-all hover:shadow-md md:flex-row md:items-center md:justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-base font-medium text-card-foreground">
                      {guide.id}
                    </p>
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
                  <p className="mt-2 text-lg font-medium text-card-foreground">
                    {guide.customer}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{guide.destination}</span>
                    <span>•</span>
                    <span>{guide.date}</span>
                    <span>•</span>
                    <span>{guide.items} items</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <EyeIcon className="h-5 w-5" strokeWidth={2} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <PrinterIcon className="h-5 w-5" strokeWidth={2} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <DownloadIcon className="h-5 w-5" strokeWidth={2} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-base text-muted-foreground">
                No remission guides found matching your criteria
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <RemissionGuideDrawer
        open={guideDrawerOpen}
        onClose={() => setGuideDrawerOpen(false)}
      />
    </div>
  );
}
