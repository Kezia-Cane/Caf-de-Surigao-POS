import { useState } from 'react';
import { usePOS } from '../POSContext';
import { mockProducts, CATEGORIES } from '../data';
import { Search, Grid, List, Plus, Minus, Trash2, ChevronRight, CheckCircle } from 'lucide-react';
import './OrderScreen.css';

export default function OrderScreen() {
    const { cart, addToCart, updateQuantity, removeFromCart, subtotal, tax, total, clearCart } = usePOS();
    const [activeCategory, setActiveCategory] = useState('All Menu');
    const [searchQuery, setSearchQuery] = useState('');
    const [orderType, setOrderType] = useState('Dine In');
    const [isPaying, setIsPaying] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = () => {
        if (cart.length) setIsPaying(true);
    };

    const completePayment = () => {
        setPaymentSuccess(true);
    };

    const newOrder = () => {
        clearCart();
        setPaymentSuccess(false);
        setIsPaying(false);
    };

    const filteredProducts = mockProducts.filter(p => {
        const matchesCategory = activeCategory === 'All Menu' || activeCategory === 'Favorites' ? true : p.category === activeCategory;
        const matchesFavorites = activeCategory === 'Favorites' ? p.isBestSeller : true;
        return matchesCategory && matchesFavorites;
    });

    const getProductQuantity = (productId) => {
        const item = cart.find(c => c.id === productId);
        return item ? item.quantity : 0;
    };

    const calculateDiscount = () => {
        return 0; // Placeholder for discount logic
    };

    return (
        <div className="order-screen">

            {/* Main Area: Menu & Products */}
            <div className="main-area">

                {/* Header section */}
                <div className="menu-header">
                    <h1 className="font-heading menu-title">Menu</h1>
                </div>

                {/* Horizontal Categories */}
                <div className="horizontal-categories">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="products-grid">
                    {filteredProducts.map(product => {
                        const qtyInCart = getProductQuantity(product.id);
                        return (
                            <div key={product.id} className="modern-product-card">
                                <div className="mpc-image-wrapper">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="mpc-info">
                                    <h3 className="mpc-name">{product.name}</h3>
                                    <p className="mpc-desc">{product.description}</p>
                                </div>
                                <div className="mpc-footer">
                                    <span className="mpc-price">₱ {product.price.toLocaleString()}</span>

                                    {qtyInCart > 0 ? (
                                        <div className="qty-controls-inline">
                                            <button className="inline-qty-btn" onClick={() => updateQuantity(product.id, -1)}><Minus size={14} /></button>
                                            <span className="inline-qty-val">{qtyInCart}</span>
                                            <button className="inline-qty-btn btn-primary" onClick={() => updateQuantity(product.id, 1)}><Plus size={14} /></button>
                                        </div>
                                    ) : (
                                        <button className="add-btn btn-primary" onClick={() => addToCart(product)}>
                                            <Plus size={20} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Sidebar: Order Details */}
            <div className="order-sidebar">

                {/* Order Details Header */}
                <div className="os-section os-header">
                    <h2 className="os-title font-heading">Order Details</h2>
                    <div className="order-type-toggle">
                        <button
                            className={`toggle-btn ${orderType === 'Dine In' ? 'active' : ''}`}
                            onClick={() => setOrderType('Dine In')}
                        >Dine In</button>
                        <button
                            className={`toggle-btn ${orderType === 'Takeaway' ? 'active' : ''}`}
                            onClick={() => setOrderType('Takeaway')}
                        >Takeaway</button>
                    </div>

                    <div className="os-info-grid">
                        <div className="os-info-row">
                            <span className="os-info-lbl">Order ID</span>
                            <span className="os-info-val text-primary fw-bold">PR3004</span>
                        </div>
                        <div className="os-info-row">
                            <span className="os-info-lbl">Customer Name</span>
                            <span className="os-info-val text-muted">(Optional)</span>
                        </div>
                    </div>
                </div>

                {/* Order Items List */}
                <div className="os-section os-items-container">
                    <div className="os-items-header">
                        <h3 className="os-subtitle">Order Items</h3>
                        <button className="clear-btn" onClick={clearCart}>Clear All Items</button>
                    </div>

                    <div className="os-items-list">
                        {cart.length === 0 ? (
                            <p className="empty-cart-msg">No items in the order yet.</p>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="os-item-row">
                                    <img src={item.image} alt={item.name} className="os-item-thumbnail" />
                                    <div className="os-item-center">
                                        <span className="os-item-name">{item.name}</span>
                                        <span className="os-item-note">Note: None</span>
                                        <div className="os-item-qty-row">
                                            <button className="small-qty-btn" onClick={() => updateQuantity(item.id, -1)}><Minus size={12} /></button>
                                            <span className="small-qty-val">{item.quantity}</span>
                                            <button className="small-qty-btn primary-bg" onClick={() => updateQuantity(item.id, 1)}><Plus size={12} /></button>
                                        </div>
                                    </div>
                                    <div className="os-item-right">
                                        <button className="item-del-btn" onClick={() => removeFromCart(item.id)}>
                                            <Trash2 size={16} />
                                        </button>
                                        <span className="os-item-price">₱ {(item.price * item.quantity).toLocaleString()}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Order Totals & Actions */}
                <div className="os-section os-totals">
                    <div className="os-total-row">
                        <span>Subtotal</span>
                        <span className="fw-bold">₱ {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="os-total-row">
                        <span>Tax (12%)</span>
                        <span className="fw-bold">₱ {tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="os-total-row grand-total">
                        <span>Total Bill</span>
                        <span className="text-primary">₱ {total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>

                    {!isPaying && !paymentSuccess && (
                        <div className="action-row" style={{ marginTop: '16px' }}>
                            <button className="btn-hold">Hold</button>
                            <button className="btn-proceed" onClick={handlePayment}>Proceed Payment</button>
                        </div>
                    )}

                    {isPaying && !paymentSuccess && (
                        <div className="payment-options">
                            <p className="payment-prompt" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '12px' }}>Select Payment Method</p>
                            <div className="action-row">
                                <button className="btn-hold" onClick={completePayment}>Cash</button>
                                <button className="btn-proceed" onClick={completePayment}>Card</button>
                            </div>
                        </div>
                    )}

                    {paymentSuccess && (
                        <div className="payment-success" style={{ textAlign: 'center', marginTop: '16px' }}>
                            <CheckCircle size={48} className="text-success" style={{ margin: '0 auto 12px' }} />
                            <h3 className="text-success" style={{ marginBottom: '16px' }}>Payment Successful</h3>
                            <div className="action-row">
                                <button className="btn-hold" style={{ flex: 1 }} onClick={newOrder}>New Order</button>
                                <button className="btn-proceed" style={{ flex: 1 }}>Print Receipt</button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
