import { mockProducts } from '../data';
import './SalesReport.css'; // Reusing table styles

export default function ProductPerformance() {
    // Sort products by revenue (simulated, we'll just sort by price * random qty for demo, but wait, static data is better. Let's just generate a sorted array on the fly)

    const performanceData = mockProducts.map((p, index) => {
        const qtySold = p.isBestSeller ? 342 : Math.max(10, 150 - (index * 12));
        const revenue = qtySold * p.price;
        return { ...p, qtySold, revenue };
    }).sort((a, b) => b.revenue - a.revenue);

    return (
        <div className="sales-report-module">
            <div className="module-header">
                <h1 className="module-title font-heading">Product Performance</h1>
                <button className="btn-outline">Export Data</button>
            </div>

            <div className="card report-card">
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Qty Sold</th>
                            <th>Revenue Generated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {performanceData.map((item, index) => (
                            <tr key={item.id} style={{ backgroundColor: index === 0 ? 'rgba(176, 141, 87, 0.05)' : '' }}>
                                <td>
                                    <div className="d-flex align-center gap-3">
                                        <img src={item.image} alt={item.name} style={{ width: 40, height: 40, borderRadius: '8px', objectFit: 'cover' }} />
                                        <span className="fw-bold">{item.name}</span>
                                        {index === 0 && <span style={{ marginLeft: 8, padding: '4px 8px', backgroundColor: 'var(--color-accent)', color: 'white', fontSize: 12, borderRadius: 12, fontWeight: 700 }}>Top Seller</span>}
                                    </div>
                                </td>
                                <td>{item.category}</td>
                                <td>{item.qtySold}</td>
                                <td className="fw-bold text-primary">₱{item.revenue.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
