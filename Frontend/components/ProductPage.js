export function renderProductPage(shop, product) {
  return `
    <div class="min-h-screen bg-[#f5f3f0]">
      <nav class="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" class="text-lg font-medium">marketplace</a>
          <a href="/shop/${shop.id}" class="text-sm hover:text-neutral-500 transition-colors">Back to ${shop.name}</a>
        </div>
      </nav>

      <div class="pt-32 px-4 max-w-6xl mx-auto mb-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="aspect-square overflow-hidden rounded-2xl bg-white">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="py-8">
            <div class="mb-8">
              <p class="text-sm text-neutral-500 mb-2">From ${shop.name}</p>
              <h1 class="text-3xl font-medium text-neutral-900 mb-4">${product.name}</h1>
              <p class="text-2xl font-light text-neutral-900 mb-6">${product.price}</p>
              <p class="text-neutral-600">${product.description || 'Handcrafted with care and attention to detail. This piece represents the quality and craftsmanship you can expect from our shop.'}</p>
            </div>

            <div class="space-y-4">
              <button class="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-neutral-800 transition-colors">
                Add to Cart
              </button>
              <button class="w-full bg-[#e9e6e1] text-neutral-900 py-4 rounded-xl font-medium hover:bg-neutral-200 transition-colors">
                Buy Now
              </button>
            </div>

            <div class="mt-12 pt-8 border-t border-neutral-200">
              <h3 class="font-medium text-neutral-900 mb-4">About the Shop</h3>
              <p class="text-neutral-600 mb-4">${shop.description}</p>
              <a href="/shop/${shop.id}" class="text-sm font-medium hover:text-neutral-500 transition-colors">
                View all products →
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer class="border-t border-neutral-200">
        <div class="max-w-6xl mx-auto px-4 py-12 text-center text-sm text-neutral-600">
          <p>© 2024 marketplace. Supporting women entrepreneurs worldwide.</p>
        </div>
      </footer>
    </div>
  `
}