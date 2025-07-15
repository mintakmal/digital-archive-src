import { Header } from '@/components/header';
import { UserProfile } from '@/components/user-profile';
import { AuthGuard } from '@/components/auth-guard';

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AuthGuard>
        <UserProfile />
      </AuthGuard>
    </div>
  );
}