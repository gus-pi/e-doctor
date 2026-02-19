import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AdminDashboardClient from './AdminDashboardClient';

const AdminPage = async () => {
    const user = await currentUser();

    if (!user) redirect('/');

    const adminEmail = process.env.ADMIN_EMAIL;
    const userEmail = user.primaryEmailAddress?.emailAddress;

    if (!adminEmail || userEmail !== adminEmail) redirect('/dashboard');

    return <AdminDashboardClient />;
};
export default AdminPage;
