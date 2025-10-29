import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { InputPassword } from "../ui/input-password";

export default function SettingsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-semibold text-foreground">
          Configuración
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Administre las preferencias de la aplicación
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Configuración del perfil
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-card-foreground">
                Nombre completo
              </Label>
              <Input
                id="name"
                defaultValue="John Doe"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-card-foreground">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-card-foreground">
                Empresa
              </Label>
              <Input
                id="company"
                defaultValue="InvenTrack Inc."
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ruc" className="text-card-foreground">
                Ruc
              </Label>
              <Input
                type="number"
                id="ruc"
                defaultValue="10345678901"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clave-sol" className="text-card-foreground">
                Clave-sol
              </Label>
              {/* <Input
                type="password"
                id="clave-sol"
                defaultValue="clavesoldefault"
                className="text-foreground"
              /> */}
              <InputPassword
                id="clave-sol"
                defaultValue="clavesoldefault"
                className="text-foreground"
              />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Guardar cambios
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Notificaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-card-foreground">
                  Alertas de stock bajo
                </Label>
                <p className="text-sm text-muted-foreground">
                  Reciba notificaciones cuando los productos estén por debajo
                  del mínimo
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator className="bg-border" />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-card-foreground">
                  Actualizaciones de guías
                </Label>
                <p className="text-sm text-muted-foreground">
                  Reciba actualizaciones sobre el estado de las guías de
                  remisión
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator className="bg-border" />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-card-foreground">
                  Informes por correo
                </Label>
                <p className="text-sm text-muted-foreground">
                  Resumen semanal de la actividad de inventario
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Configuración del inventario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="default-minimum" className="text-card-foreground">
                Stock mínimo por defecto
              </Label>
              <Input
                id="default-minimum"
                type="number"
                defaultValue="50"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency" className="text-card-foreground">
                Moneda
              </Label>
              <Input
                id="currency"
                defaultValue="USD"
                className="text-foreground"
              />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Actualizar configuración
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Seguridad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="current-password"
                className="text-card-foreground"
              >
                Contraseña actual
              </Label>
              <Input
                id="current-password"
                type="password"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-card-foreground">
                Nueva contraseña
              </Label>
              <Input
                id="new-password"
                type="password"
                className="text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="confirm-password"
                className="text-card-foreground"
              >
                Confirmar contraseña
              </Label>
              <Input
                id="confirm-password"
                type="password"
                className="text-foreground"
              />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Cambiar contraseña
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
