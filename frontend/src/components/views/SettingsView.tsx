import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';

export default function SettingsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-semibold text-foreground">
          Settings
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Manage your application preferences
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-card-foreground">Full Name</Label>
              <Input id="name" defaultValue="John Doe" className="text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-card-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-card-foreground">Company</Label>
              <Input id="company" defaultValue="InvenTrack Inc." className="text-foreground" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-card-foreground">Low Stock Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when products are below minimum
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator className="bg-border" />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-card-foreground">Guide Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates on remission guide status
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator className="bg-border" />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-card-foreground">Email Reports</Label>
                <p className="text-sm text-muted-foreground">
                  Weekly summary of inventory activity
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Inventory Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="default-minimum" className="text-card-foreground">
                Default Minimum Stock
              </Label>
              <Input
                id="default-minimum"
                type="number"
                defaultValue="50"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency" className="text-card-foreground">Currency</Label>
              <Input id="currency" defaultValue="USD" className="text-foreground" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Update Settings
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-card-foreground">
                Current Password
              </Label>
              <Input id="current-password" type="password" className="text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-card-foreground">
                New Password
              </Label>
              <Input id="new-password" type="password" className="text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-card-foreground">
                Confirm Password
              </Label>
              <Input id="confirm-password" type="password" className="text-foreground" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Change Password
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
