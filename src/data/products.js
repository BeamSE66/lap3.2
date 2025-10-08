// src/data/products.js
export const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
  { id: 'clothing', name: 'เสื้อผ้า' },
  { id: 'books', name: 'หนังสือ' }
];

export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'electronics',
    price: 45900,
    originalPrice: 49900,
    discount: 8,
    image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
    description: 'สมาร์ทโฟนล่าสุดจาก Apple',
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: 'เสื้อยืดผ้าฝ้าย',
    category: 'clothing',
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
    description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
    inStock: true,
    rating: 4.2
  },
  {
    id: 3,
    name: 'หนังสือ React.js Guide',
    category: 'books',
    price: 650,
    originalPrice: 650,
    discount: 0,
    image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
    description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
    inStock: false,
    rating: 4.7
  },
  {
    id: 4,
    name: 'หูฟังไร้สาย',
    category: 'electronics',
    price: 1990,
    originalPrice: 2590,
    discount: 23,
    image: 'https://placehold.co/300x300/28a745/ffffff?text=Wireless+Earbuds',
    description: 'หูฟังบลูทูธคุณภาพเสียงคมชัด',
    inStock: true,
    rating: 4.3
  },
  {
    id: 5,
    name: 'กางเกงยีนส์แฟชั่น',
    category: 'clothing',
    price: 899,
    originalPrice: 1200,
    discount: 25,
    image: 'https://placehold.co/300x300/6610f2/ffffff?text=Jeans',
    description: 'กางเกงยีนส์ทรงสวยใส่สบาย',
    inStock: true,
    rating: 4.5
  },
  {
    id: 6,
    name: 'หนังสือ JavaScript Mastery',
    category: 'books',
    price: 890,
    originalPrice: 990,
    discount: 10,
    image: 'https://placehold.co/300x300/f03e3e/ffffff?text=JS+Book',
    description: 'เรียนรู้ JavaScript ตั้งแต่พื้นฐานถึงระดับสูง',
    inStock: true,
    rating: 4.9
  }
];
