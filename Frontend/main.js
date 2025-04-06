import './style.css'
import Navigo from 'navigo'
import { renderShop } from './components/Shop.js'
import { renderShopPage } from './components/ShopPage.js'
import { renderProductPage } from './components/ProductPage.js'

const shops = [
  {
    id: 1,
    name: "Vinetta's Articraft ",
    owner: "Vinetta Patil",
    description: "Handmade jewelry and accessories crafted with love",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600",
    products: [
      { 
        id: 1,
        name: "Beaded Necklace", 
        price: 45, 
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600",
        description: "Handcrafted beaded necklace featuring natural stones and sterling silver accents. Each piece is unique and carefully assembled."
      },
      { 
        id: 2,
        name: "Leather Earrings", 
        price: 25, 
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600",
        description: "Lightweight and stylish leather earrings, perfect for any occasion. Made from genuine leather with hypoallergenic hooks."
      }
    ]
  },
  {
    id: 2,
    name: "Green Thumb Gardens",
    owner: "Sheela Sharma",
    description: "Sustainable plant shop featuring rare houseplants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600",
    products: [
      { 
        id: 1,
        name: "Monstera Deliciosa", 
        price: 35, 
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600",
        description: "Healthy Monstera Deliciosa in a 6-inch pot. Known for its distinctive leaves, this tropical plant brings life to any space."
      },
      { 
        id: 2,
        name: "Succulent Set", 
        price: 20, 
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=600",
        description: "Set of 3 assorted succulents in ceramic pots. Perfect for beginners and requires minimal maintenance."
      }
    ]
  },
  {
    id: 3,
    name: "Sweet Treats Bakery",
    owner: "Shalini Patil",
    description: "Artisanal baked goods made from family recipes",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=600",
    products: [
      { 
        id: 1,
        name: "Chocolate Croissants", 
        price: 4, 
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600",
        description: "Flaky, buttery croissants filled with rich chocolate. Baked fresh daily using premium European butter."
      },
      { 
        id: 2,
        name: "Artisan Bread", 
        price: 7, 
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600",
        description: "Crusty artisan sourdough bread made with our century-old starter. Each loaf is naturally fermented for 24 hours."
      }
    ]
  }
];

const router = new Navigo('/')

const renderHomePage = () => {
  document.querySelector('#app').innerHTML = `
    <div class="min-h-screen bg-[#f5f3f0]">
      <nav class="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span class="text-lg font-Large">Mahila Udyam</span>
          <a href="#shops" class="text-sm hover:text-neutral-500 transition-colors">Explore</a>
        </div>
      </nav>

      <header class="pt-32 pb-20 px-4 relative">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-5xl font-light tracking-tight text-neutral-900 mb-6">
            Discover exceptional women-led businesses
          </h1>
          <p class="text-lg text-neutral-600 mb-16 leading-relaxed">
            Supporting local entrepreneurs who create unique products with passion and purpose
          </p>
          <a href="#shops" class="btn-primary">
            View Shops
          </a>
        </div>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-neutral-300"></div>
      </header>

      <section id="shops" class="max-w-6xl mx-auto px-4 py-20">
        <h2 class="text-2xl font-light text-center text-neutral-900 mb-16">Featured Shops</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${shops.map(shop => renderShop(shop)).join('')}
        </div>
      </section>

      <footer class="border-t border-neutral-200 mt-20">
        <div class="max-w-6xl mx-auto px-4 py-12 text-center text-sm text-neutral-600">
          <p>© 2024 marketplace. Supporting women entrepreneurs worldwide.</p>
        </div>
      </footer>
    </div>
  `
}

router
  .on('/', renderHomePage)
  .on('/shop/:id', ({ data: { id } }) => {
    const shop = shops.find(s => s.id === parseInt(id))
    if (shop) {
      document.querySelector('#app').innerHTML = renderShopPage(shop)
    } else {
      router.navigate('/')
    }
  })
  .on('/shop/:shopId/product/:productId', ({ data: { shopId, productId } }) => {
    const shop = shops.find(s => s.id === parseInt(shopId))
    if (shop) {
      const product = shop.products.find(p => p.id === parseInt(productId))
      if (product) {
        document.querySelector('#app').innerHTML = renderProductPage(shop, product)
      } else {
        router.navigate(`/shop/${shopId}`)
      }
    } else {
      router.navigate('/')
    }
  })
  .resolve()