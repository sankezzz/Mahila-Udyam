export function renderShop(shop) {
  return `
    <div class="group">
      <div class="bg-white rounded-2xl overflow-hidden border border-neutral-200 transition-all duration-300 hover:shadow-lg">
        <div class="aspect-[4/3] overflow-hidden">
          <img 
            src="${shop.image}" 
            alt="${shop.name}" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div class="p-6">
          <div class="mb-6">
            <h3 class="text-lg font-medium text-neutral-900 mb-1">${shop.name}</h3>
            <p class="text-sm text-neutral-500 mb-2">By ${shop.owner}</p>
            <p class="text-sm text-neutral-600">${shop.description}</p>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-xs uppercase tracking-wider text-neutral-400">Featured Products</h4>
            <div class="grid grid-cols-2 gap-3">
              ${shop.products.map(product => `
                <div class="bg-[#f5f3f0] rounded-xl p-3 transition-colors hover:bg-neutral-100">
                  <div class="aspect-square mb-2 overflow-hidden rounded-lg">
                    <img 
                      src="${product.image}" 
                      alt="${product.name}" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h5 class="text-sm font-medium text-neutral-900">${product.name}</h5>
                  <p class="text-sm text-neutral-500">${product.price}</p>
                </div>
              `).join('')}
            </div>
          </div>
          
          <a href="/shop/${shop.id}" class="block mt-6 w-full bg-[#f5f3f0] text-neutral-900 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors text-center">
            Visit Shop
          </a>
        </div>
      </div>
    </div>
  `
}