import { useState } from 'react';
import './App.css';
import { Coffee, LayoutDashboard, BarChart3, Package, Users } from 'lucide-react';
import OrderScreen from './components/OrderScreen';
import Dashboard from './components/Dashboard';
import SalesReport from './components/SalesReport';
import ProductPerformance from './components/ProductPerformance';
import StaffAttendance from './components/StaffAttendance';

const navItems = [
  { id: 'order', label: 'New Order', icon: Coffee },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'staff', label: 'Staff', icon: Users },
];

function App() {
  const [activeTab, setActiveTab] = useState('order');

  return (
    <div className="app-container">
      {/* Tablet Frame */}
      <div className="tablet-device">
        <div className="tablet-screen">

          {/* Main App Layout */}
          <div className="pos-layout">

            {/* Sidebar Navigation */}
            <nav className="sidebar">
              <div className="sidebar-header">
                <h2 className="cafe-name text-primary font-heading">Café de Surigao</h2>
              </div>
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <item.icon size={24} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Main Content Area */}
            <main className="main-content">
              {activeTab === 'order' && <OrderScreen />}
              {activeTab === 'dashboard' && <Dashboard />}
              {activeTab === 'reports' && <SalesReport />}
              {activeTab === 'products' && <ProductPerformance />}
              {activeTab === 'staff' && <StaffAttendance />}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
