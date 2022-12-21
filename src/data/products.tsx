export interface ProductType {
  id: string;
  name: string;
  img_src: string;
  price: number;
  discount: number;
  prime_discount: number;
  quantity: string | number;
  category: string;
  featured: boolean;
  status: string;
  stock: number;
}

export interface NFTProductType {
  id: string;
  nft_id: string;
  primes: number;
  price: number;
  img_src: string;
}

export const products = [
  {
    id: 'prod_1',
    name: 'Green lime',
    img_src: '/products/lime.png',
    price: 3000,
    discount: 40,
    prime_discount: 100,
    quantity: '7ps',
    category: 'fruits',
    featured: true,
    status: 'Best seller',
    stock: 20
  },
  {
    id: 'prod_2',
    name: 'Red apples',
    img_src: '/products/Apples-img.png',
    price: 750,
    discount: 33,
    prime_discount: 30,
    quantity: '5ps',
    category: 'fruits',
    featured: true,
    status: 'none',
    stock: 20

  },
  {
    id: 'prod_3',
    name: 'Banana',
    img_src: '/products/Banana-img.png',
    price: 3000,
    discount: 25,
    prime_discount: 200,
    quantity: '10ps',
    category: 'fruits',
    featured: true,
    status: 'Best seller',
    stock: 25
  },
  {
    id: 'prod_4',
    name: 'Oranges',
    img_src: '/products/Orange-img.png',
    price: 750,
    discount: 33,
    prime_discount: 15,
    quantity: '10ps',
    category: 'fruits',
    featured: true,
    status: 'none',
    stock: 200
  },
  {
    id: 'prod_5',
    name: 'Red tomato',
    img_src: '/products/Tomato-img.png',
    price: 3000,
    discount: 30,
    prime_discount: 200,
    quantity: '1kg',
    category: 'fruits',
    featured: true,
    status: 'Sale',
    stock: 7
  },
  {
    id: 'prod_6',
    name: 'Green lime',
    img_src: '/products/lime.png',
    price: 3000,
    discount: 40,
    prime_discount: 100,
    quantity: 20,
    category: 'fruits',
    featured: true,
    status: 'Best seller',
    stock: 3
  },
  {
    id: 'prod_7',
    name: 'Pepper',
    img_src: '/products/Pepper-img.png',
    price: 3000,
    discount: 20,
    prime_discount: 300,
    quantity: '3ps',
    category: 'fruits',
    featured: true,
    status: 'none',
    stock: 100
  },
  {
    id: 'prod_8',
    name: 'Pineapple',
    img_src: '/products/Pineapples-img.png',
    price: 4000,
    discount: 10,
    prime_discount: 700,
    quantity: '3ps',
    category: 'fruits',
    featured: true,
    status: 'none',
    stock: 7
  },
  {
    id: 'prod_10',
    name: 'Beef',
    img_src: '/products/Beef-img.png',
    price: 2000,
    discount: 0,
    prime_discount: 20,
    quantity: '1kg',
    category: 'meat',
    featured: false,
    status: 'New',
    stock: 67
  },
  {
    id: 'prod_11',
    name: 'Curry chicken soup',
    img_src: '/products/Curry-chicken-soup-img.png',
    price: 3000,
    discount: 20,
    prime_discount: 500,
    quantity: '2kg',
    category: 'meals and soups',
    featured: false,
    status: 'Sale',
    stock: 15
  },
  {
    id: 'prod_12',
    name: 'Cheese rice',
    img_src: '/products/Cheese-rice-img.png',
    price: 2000,
    discount: 20,
    prime_discount: 200,
    quantity: '2kg',
    category: 'meals and soups',
    featured: false,
    status: 'none',
    stock: 10
  },
  {
    id: 'prod_13',
    name: 'Cookies',
    img_src: '/products/Cookies-img.png',
    price: 2000,
    discount: 10,
    prime_discount: 200,
    quantity: '10ps',
    category: 'snacks',
    featured: false,
    status: 'Best seller',
    stock: 100
  },
  {
    id: 'prod_14',
    name: 'Slice bread',
    img_src: '/products/Bread-img.png',
    price: 2000,
    discount: 0,
    prime_discount: 200,
    quantity: '12inch',
    category: 'grain',
    featured: false,
    status: 'none',
    stock: 20
  },

]


export const nft_products = [
  {
    id: 'nft-1',
    nft_id: '#1345',
    primes: 5,
    price: 5000,
    img_src: '/NFT-imgs/NFT-img-1.png',
  },
  {
    id: 'nft-2',
    nft_id: '#1346',
    primes: 0,
    price: 4700,
    img_src: '/NFT-imgs/NFT-img-2.png',
  },
  {
    id: 'nft-3',
    nft_id: '#0045',
    primes: 5,
    price: 4999,
    img_src: '/NFT-imgs/NFT-img-3.png',
  },
  {
    id: 'nft-4',
    nft_id: '#1032',
    primes: 3,
    price: 4899,
    img_src: '/NFT-imgs/NFT-img-4.png',
  },
  {
    id: 'nft-5',
    nft_id: '#0045',
    primes: 0,
    price: 5000,
    img_src: '/NFT-imgs/NFT-img-5.png',
  },
  {
    id: 'nft-6',
    nft_id: '#0045',
    primes: 0,
    price: 5000,
    img_src: '/NFT-imgs/NFT-img-6.png',
  },
  {
    id: 'nft-7',
    nft_id: '#1245',
    primes: 7,
    price: 5000,
    img_src: '/NFT-imgs/NFT-img-7.png',
  },
  {
    id: 'nft-8',
    nft_id: '#1246',
    primes: 0,
    price: 4700,
    img_src: '/NFT-imgs/NFT-img-8.png',
  },
  {
    id: 'nft-9',
    nft_id: '#1045',
    primes: 2,
    price: 5000,
    img_src: '/NFT-imgs/NFT-img-9.png',
  },
  {
    id: 'nft-10',
    nft_id: '#1046',
    primes: 8,
    price: 3000,
    img_src: '/NFT-imgs/NFT-img-10.png',
  },
  {
    id: 'nft-11',
    nft_id: '#2045',
    primes: 2,
    price: 2400,
    img_src: '/NFT-imgs/NFT-img-11.png',
  },
  {
    id: 'nft-12',
    nft_id: '#2046',
    primes: 10,
    price: 5400,
    img_src: '/NFT-imgs/NFT-img-12.png',
  },
  {
    id: 'nft-13',
    nft_id: '#2048',
    primes: 2,
    price: 2000,
    img_src: '/NFT-imgs/NFT-img-13.png',
  },
  {
    id: 'nft-14',
    nft_id: '#1036',
    primes: 1,
    price: 2000,
    img_src: '/NFT-imgs/NFT-img-14.png',
  },
  {
    id: 'nft-15',
    nft_id: '#6039',
    primes: 8,
    price: 10000,
    img_src: '/NFT-imgs/NFT-img-15.png',
  },
]