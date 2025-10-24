import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, PackageIcon, FileTextIcon, BarChart3Icon, SettingsIcon, UserIcon, LogOutIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  mobileMenuOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboardIcon },
  { path: '/products', label: 'Products', icon: PackageIcon },
  { path: '/guides', label: 'Remission Guides', icon: FileTextIcon },
  { path: '/reports', label: 'Reports', icon: BarChart3Icon },
  { path: '/settings', label: 'Settings', icon: SettingsIcon },
];

export default function Sidebar({ isOpen, isMobile, mobileMenuOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const sidebarContent = (
    <div className="flex h-full flex-col bg-tertiary text-tertiary-foreground">
      <div className="flex h-20 items-center justify-between px-6">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <PackageIcon className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
          </div>
          <span className="font-headline text-xl font-semibold text-tertiary-foreground">
            InvenTrack
          </span>
        </div>
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="bg-transparent text-tertiary-foreground hover:bg-tertiary-foreground/10"
          >
            <XIcon className="h-6 w-6" strokeWidth={2} />
          </Button>
        )}
      </div>

      <Separator className="bg-tertiary-foreground/20" />

      <nav className="flex-1 space-y-2 px-4 py-6">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                className={`w-full justify-start space-x-3 px-4 py-6 text-base font-normal ${
                  isActive
                    ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
                    : 'bg-transparent text-tertiary-foreground hover:bg-tertiary-foreground/10 hover:text-tertiary-foreground'
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
                <span>{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="space-y-2 px-4 pb-6">
        <Separator className="mb-4 bg-tertiary-foreground/20" />
        <Button
          variant="ghost"
          className="w-full justify-start space-x-3 bg-transparent px-4 py-6 text-base font-normal text-tertiary-foreground hover:bg-tertiary-foreground/10 hover:text-tertiary-foreground"
        >
          <UserIcon className="h-5 w-5" strokeWidth={2} />
          <span>Profile</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start space-x-3 bg-transparent px-4 py-6 text-base font-normal text-tertiary-foreground hover:bg-tertiary-foreground/10 hover:text-tertiary-foreground"
        >
          <LogOutIcon className="h-5 w-5" strokeWidth={2} />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    if (!mobileMenuOpen) return null;
    
    return (
      <>
        <div 
          className="fixed inset-0 z-40 bg-gray-900/50"
          onClick={onClose}
        />
        <aside className="fixed inset-y-0 left-0 z-50 w-72 transition-transform duration-200 ease-in-out">
          {sidebarContent}
        </aside>
      </>
    );
  }

  return (
    <aside 
      className={`transition-all duration-200 ease-in-out ${
        isOpen ? 'w-72' : 'w-0'
      } overflow-hidden`}
    >
      {sidebarContent}
    </aside>
  );
}
