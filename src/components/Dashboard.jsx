import { mockSalesStats, mockHourlySales, mockCategoryStats } from '../data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

const COLORS = ['#4A3428', '#B08D57', '#8E6F45', '#C5A880'];

export default function Dashboard() {
    return (
        <div className="dashboard-module">
            <h1 className="module-title font-heading">Dashboard Overview</h1>

            {/* Top Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card card">
                    <p className="stat-label">Today's Sales</p>
                    <h2 className="stat-value text-primary">₱{mockSalesStats.todaySales.toLocaleString()}</h2>
                </div>
                <div className="stat-card card">
                    <p className="stat-label">Total Orders</p>
                    <h2 className="stat-value">{mockSalesStats.orders}</h2>
                </div>
                <div className="stat-card card">
                    <p className="stat-label">Average Sale</p>
                    <h2 className="stat-value">₱{mockSalesStats.avgSale.toLocaleString()}</h2>
                </div>
                <div className="stat-card card">
                    <p className="stat-label">Best Seller</p>
                    <h2 className="stat-value text-accent">{mockSalesStats.bestSeller}</h2>
                </div>
            </div>

            {/* Charts List */}
            <div className="charts-grid">
                <div className="chart-card card">
                    <h3 className="chart-title">Hourly Sales Trend</h3>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={mockHourlySales} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `₱${val}`} dx={-10} />
                                <Tooltip cursor={{ fill: 'transparent' }} formatter={(value) => [`₱${value}`, 'Sales']} />
                                <Line type="monotone" dataKey="sales" stroke="var(--color-primary)" strokeWidth={4} dot={{ r: 6, fill: "var(--color-primary)" }} activeDot={{ r: 8, fill: "var(--color-accent)" }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card card">
                    <h3 className="chart-title">Sales by Category</h3>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={mockCategoryStats}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {mockCategoryStats.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Custom Legend */}
                        <div className="pie-legend">
                            {mockCategoryStats.map((entry, index) => (
                                <div key={entry.name} className="legend-item">
                                    <div className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                    <span className="legend-label">{entry.name} ({entry.value}%)</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
