import { useState } from 'react';
import { mockStaff } from '../data';
import { Camera, LogIn, LogOut } from 'lucide-react';
import './StaffAttendance.css';

export default function StaffAttendance() {
    const [staffList, setStaffList] = useState(mockStaff);
    const [selectedStaff, setSelectedStaff] = useState('');
    const [showCamera, setShowCamera] = useState(false);
    const [actionType, setActionType] = useState(''); // 'in' or 'out'

    const handleAction = (type) => {
        if (!selectedStaff) return alert("Select staff member first");
        setActionType(type);
        setShowCamera(true);
    };

    const confirmAction = () => {
        setStaffList(prev => prev.map(s =>
            s.id === selectedStaff ? { ...s, status: actionType === 'in' ? 'present' : 'absent' } : s
        ));
        setShowCamera(false);
        setSelectedStaff('');
        setActionType('');
    };

    return (
        <div className="staff-attendance-module">
            <h1 className="module-title font-heading">Staff Attendance</h1>

            <div className="attendance-grid">
                {/* Left: Action Panel */}
                <div className="card action-panel">
                    <h3 className="panel-title">Time Clock</h3>

                    <select
                        className="staff-select"
                        value={selectedStaff}
                        onChange={(e) => setSelectedStaff(e.target.value)}
                    >
                        <option value="">Select Staff Name...</option>
                        {staffList.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>

                    {showCamera ? (
                        <div className="mock-camera">
                            <div className="camera-viewfinder">
                                <Camera size={48} color="#ccc" />
                                <p>Mock Camera Screen</p>
                            </div>
                            <button className="btn-primary w-full" onClick={confirmAction}>
                                Take Selfie & Confirm {actionType === 'in' ? 'Time In' : 'Time Out'}
                            </button>
                            <button className="btn-outline w-full mt-2" onClick={() => setShowCamera(false)}>Cancel</button>
                        </div>
                    ) : (
                        <div className="action-buttons-large">
                            <button className="btn-success large-action-btn" onClick={() => handleAction('in')}>
                                <LogIn size={32} /> Time In
                            </button>
                            <button className="btn-error large-action-btn" onClick={() => handleAction('out')}>
                                <LogOut size={32} /> Time Out
                            </button>
                        </div>
                    )}
                </div>

                {/* Right: Status List */}
                <div className="card status-panel">
                    <h3 className="panel-title">Current Status</h3>
                    <div className="staff-list">
                        {staffList.map(staff => (
                            <div key={staff.id} className="staff-status-row">
                                <span className="staff-name fw-bold">{staff.name}</span>
                                <span className={`status-badge stat-${staff.status}`}>
                                    {staff.status === 'present' ? '🟢 Present' : staff.status === 'late' ? '🟡 Late' : '⚪ Absent'}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="summary-stats mt-4">
                        <h4 className="mb-2">Shift Summary</h4>
                        <div className="stats-row">
                            <div className="s-box">
                                <div className="s-val">8</div>
                                <div className="s-lbl">Orders Handled</div>
                            </div>
                            <div className="s-box">
                                <div className="s-val">₱415</div>
                                <div className="s-lbl">Avg Sale</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
