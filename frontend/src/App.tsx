import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import AppShell from './components/layout/AppShell';
import DashboardView from './components/views/DashboardView';
import ProductsView from './components/views/ProductsView';
import RemissionGuidesView from './components/views/RemissionGuidesView';
import ReportsView from './components/views/ReportsView';
import SettingsView from './components/views/SettingsView';

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/guides" element={<RemissionGuidesView />} />
          <Route path="/reports" element={<ReportsView />} />
          <Route path="/settings" element={<SettingsView />} />
        </Routes>
      </AppShell>
      <Toaster />
    </Router>
  );
}

export default App;
