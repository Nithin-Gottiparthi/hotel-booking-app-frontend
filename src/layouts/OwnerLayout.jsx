// Owner Layout with Sidebar and Header

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/owner/Sidebar';
import OwnerNavbar from '../components/owner/OwnerNavbar';

export default function OwnerLayout() {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <OwnerNavbar />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
