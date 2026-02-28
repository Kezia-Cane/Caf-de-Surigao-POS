export const mockProducts = [
    { id: 'p1', name: 'Spanish Latte', description: 'Double shot espresso with condensed milk', price: 180, category: 'Coffee', isBestSeller: true, image: '/spanish_latte_1772290084817.png' },
    { id: 'p2', name: 'Cappuccino', description: 'Espresso with steamed milk and thick foam', price: 150, category: 'Coffee', isBestSeller: false, image: '/cappuccino_1772290100877.png' },
    { id: 'p3', name: 'Flat White', description: 'Double espresso with microfoamed milk', price: 160, category: 'Coffee', isBestSeller: false, image: '/flat_white_1772290158131.png' },
    { id: 'p4', name: 'Americano', description: 'Espresso shots topped with hot water', price: 120, category: 'Coffee', isBestSeller: false, image: '/americano.png' },
    { id: 'p5', name: 'Caramel Macchiato', description: 'Vanilla syrup, espresso, and caramel drizzle', price: 190, category: 'Drinks', isBestSeller: false, image: '/caramel_macchiato.png' },
    { id: 'p6', name: 'Cold Brew', description: '12-hour steeped cold brew coffee', price: 170, category: 'Drinks', isBestSeller: false, image: '/cold_brew.png' },
    { id: 'p7', name: 'Matcha Latte', description: 'Premium Uji matcha with steamed milk', price: 165, category: 'Drinks', isBestSeller: false, image: '/matcha_latte_1772290176104.png' },
    { id: 'p8', name: 'Butter Croissant', description: 'Flaky, buttery French styled pastry', price: 95, category: 'Snacks', isBestSeller: false, image: '/croissant.png' },
    { id: 'p9', name: 'Choco Croissant', description: 'Croissant filled with dark chocolate', price: 110, category: 'Snacks', isBestSeller: false, image: '/choco_croissant.png' },
    { id: 'p10', name: 'Blueberry Cake', description: 'Baked cheesecake with blueberry topping', price: 145, category: 'Dessert', isBestSeller: false, image: '/cheesecake.png' },
    { id: 'p11', name: 'Avocado Toast', description: 'Smashed avocado on sourdough bread', price: 195, category: 'Snacks', isBestSeller: false, image: '/avocado_toast.png' },
    { id: 'p12', name: 'Bacon & Egg Toast', description: 'Bacon, scrambled egg on thick toast', price: 185, category: 'Snacks', isBestSeller: false, image: '/egg_toast.png' },
    { id: 'p13', name: 'Brunch Plate', description: 'Eggs, toast, sausage, and side salad', price: 285, category: 'Snacks', isBestSeller: false, image: '/brunch_plate.png' },
];

export const CATEGORIES = ['All Menu', 'Favorites', 'Coffee', 'Drinks', 'Snacks', 'Dessert'];

export const mockStaff = [
    { id: 's1', name: 'Maria Santos', status: 'present' },
    { id: 's2', name: 'Juan Dela Cruz', status: 'late' },
    { id: 's3', name: 'Ana Reyes', status: 'absent' },
];

export const mockSalesStats = {
    todaySales: 48250,
    orders: 126,
    avgSale: 383,
    bestSeller: 'Spanish Latte'
};

export const mockHourlySales = [
    { time: '07:00', sales: 2500 },
    { time: '08:00', sales: 5200 },
    { time: '09:00', sales: 6800 },
    { time: '10:00', sales: 4100 },
    { time: '11:00', sales: 3900 },
    { time: '12:00', sales: 8500 },
    { time: '13:00', sales: 6100 },
    { time: '14:00', sales: 4200 },
    { time: '15:00', sales: 6950 },
];

export const mockCategoryStats = [
    { name: 'Coffee', value: 45 },
    { name: 'Iced Drinks', value: 25 },
    { name: 'Brunch', value: 20 },
    { name: 'Pastries', value: 10 },
];
