import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuIcon, SearchIcon, BellIcon, PlusIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useAppStore } from '../../stores/appStore';

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { setProductModalOpen, setGuideDrawerOpen } = useAppStore();

  const getQuickActionLabel = () => {
    if (location.pathname === '/products') return 'New Product';
    if (location.pathname === '/guides') return 'New Guide';
    return 'Quick Action';
  };

  const handleQuickAction = () => {
    if (location.pathname === '/products') {
      setProductModalOpen(true);
    } else if (location.pathname === '/guides') {
      setGuideDrawerOpen(true);
    }
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-card px-8">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <MenuIcon className="h-6 w-6" strokeWidth={2} />
        </Button>

        <div className="relative hidden md:block">
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" strokeWidth={2} />
          <Input
            type="search"
            placeholder="SearchIcon products, guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-80 pl-10 text-foreground"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {(location.pathname === '/products' || location.pathname === '/guides') && (
          <Button
            onClick={handleQuickAction}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <PlusIcon className="mr-2 h-5 w-5" strokeWidth={2} />
            {getQuickActionLabel()}
          </Button>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="relative bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <BellIcon className="h-6 w-6" strokeWidth={2} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="bg-transparent hover:bg-accent">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
            <DropdownMenuItem className="text-popover-foreground hover:bg-accent hover:text-accent-foreground">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-popover-foreground hover:bg-accent hover:text-accent-foreground">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-popover-foreground hover:bg-accent hover:text-accent-foreground">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
