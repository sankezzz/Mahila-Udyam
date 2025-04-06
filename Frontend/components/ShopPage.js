export function renderShopPage(shop) {
  return `
    <div class="min-h-screen bg-[#f5f3f0]">
      <nav class="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" class="text-lg font-medium">marketplace</a>
          <a href="/" class="text-sm hover:text-neutral-500 transition-colors">Back to Shops</a>
        </div>
      </nav>

      <div class="pt-32 px-4 max-w-6xl mx-auto">
        <div class="bg-white rounded-2xl overflow-hidden border border-neutral-200 mb-12">
          <div class="aspect-[3/1] overflow-hidden">
            <img 
              src="${shop.image}" 
              alt="${shop.name}" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-8">
            <h1 class="text-3xl font-medium text-neutral-900 mb-2">${shop.name}</h1>
            <p class="text-lg text-neutral-500 mb-4">By ${shop.owner}</p>
            <p class="text-neutral-600 max-w-2xl">${shop.description}</p>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-2xl font-light mb-8">All Products</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            ${shop.products.map(product => `
              <a href="/shop/${shop.id}/product/${product.id}" class="group">
                <div class="bg-white rounded-xl overflow-hidden border border-neutral-200 transition-all group-hover:shadow-lg">
                  <div class="aspect-square overflow-hidden">
                    <img 
                      src="${product.image}" 
                      alt="${product.name}" 
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-medium text-neutral-900">${product.name}</h3>
                    <p class="text-neutral-500">${product.price}</p>
                  </div>
                </div>
              </a>
            `).join('')}
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