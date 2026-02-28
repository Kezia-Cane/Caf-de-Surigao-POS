import './SalesReport.css';

const mockSalesData = [
    { date: '2026-02-28', total: 48250, cash: 18250, card: 30000 },
    { date: '2026-02-27', total: 42100, cash: 15100, card: 27000 },
    { date: '2026-02-26', total: 45600, cash: 16000, card: 29600 },
    { date: '2026-02-25', total: 39800, cash: 12800, card: 27000 },
    { date: '2026-02-24', total: 51200, cash: 20200, card: 31000 },
];

export default function SalesReport() {
    return (
        <div className="sales-report-module">
            <div className="module-header">
                <h1 className="module-title font-heading">Sales Report</h1>
                <div className="header-actions">
                    <button className="btn-outline">Print Report</button>
                    <button className="btn-primary">Export CSV</button>
                </div>
            </div>

            <div className="card report-card">
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Total Sales</th>
                            <th>Cash Transactions</th>
                            <th>Card Transactions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockSalesData.map(row => (
                            <tr key={row.date}>
                                <td>{row.date}</td>
                                <td className="fw-bold text-primary">₱{row.total.toLocaleString()}</td>
                                <td>₱{row.cash.toLocaleString()}</td>
                                <td>₱{row.card.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
