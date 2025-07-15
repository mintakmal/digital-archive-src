import { Header } from '@/components/header';
import { AdminDashboard } from '@/components/admin/admin-dashboard';
import { AdminGuard } from '@/components/admin/admin-guard';

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AdminGuard>
        <AdminDashboard />
      </AdminGuard>
    </div>
  );
}