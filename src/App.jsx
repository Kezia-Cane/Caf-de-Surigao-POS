import { useState, useEffect } from 'react';
import './App.css';
import { Coffee, LayoutDashboard, BarChart3, Package, Users } from 'lucide-react';
import Lottie from 'lottie-react';
import coffeeBeansAnimation from './assets/Coffee Beans.json';
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
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isModuleLoading, setIsModuleLoading] = useState(false);

  useEffect(() => {
    // Simulate initial app loading sequence
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setIsModuleLoading(true);
    setActiveTab(tabId);
    // Simulate module loading
    setTimeout(() => {
      setIsModuleLoading(false);
    }, 1200);
  };

  return (
    <div className="app-container">
      {/* Tablet Frame */}
      <div className="tablet-device">
        <div className="tablet-screen">

          {isInitialLoading ? (
            <div className="initial-loading-screen">
              <div className="lottie-container-large">
                <Lottie animationData={coffeeBeansAnimation} loop={true} />
              </div>
              <h2 className="loading-text font-heading text-primary">Café de Surigao OS</h2>
              <p className="loading-subtext">Brewing your experience...</p>
            </div>
          ) : (
            <div className="pos-layout fade-in">
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
                        onClick={() => handleTabChange(item.id)}
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
                {isModuleLoading ? (
                  <div className="module-loading-screen">
                    <div className="lottie-container-small">
                      <Lottie animationData={coffeeBeansAnimation} loop={true} />
                    </div>
                  </div>
                ) : (
                  <div className="module-content fade-in" style={{ height: '100%' }}>
                    {activeTab === 'order' && <OrderScreen />}
                    {activeTab === 'dashboard' && <Dashboard />}
                    {activeTab === 'reports' && <SalesReport />}
                    {activeTab === 'products' && <ProductPerformance />}
                    {activeTab === 'staff' && <StaffAttendance />}
                  </div>
                )}
              </main>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
