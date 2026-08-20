// Lista de produtos com fotos, categorias e contagem inicial de curtidas
const products = [
  { id: 1, name: 'Pó Traslúcido Velvet', category: 'Pó', price: 'R$ 59,90', likes: 142, img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500' },
  { id: 2, name: 'Base Fluida Silk Touch', category: 'Base', price: 'R$ 89,90', likes: 215, img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=500' },
  { id: 3, name: 'Corretivo Alta Cobertura', category: 'Corretivo', price: 'R$ 45,90', likes: 98, img: 'https://images.unsplash.com/photo-1599733589046-10c005739ef9?w=500' },
  { id: 4, name: 'Blush Cremoso Peach', category: 'Blush', price: 'R$ 49,90', likes: 310, img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500' },
  { id: 5, name: 'Gloss Efeito Plump', category: 'Gloss', price: 'R$ 39,90', likes: 184, img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500' },
  { id: 6, name: 'Sérum Hidratante Glow', category: 'Skincare', price: 'R$ 99,90', likes: 420, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500' }
];

// Função para renderizar os cards na tela
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.map(product => `
    <article class="card">
      <img src="${product.img}" alt="${product.name}" class="card-img">
      <div class="card-body">
        <span class="category">${product.category}</span>
        <h2 class="card-title">${product.name}</h2>
        <div class="card-footer">
          <span class="price">${product.price}</span>
          <button class="like-btn" onclick="toggleLike(${product.id}, this)">
            ♥ <span class="like-count">${product.likes}</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Função para adicionar ou remover curtida ao clicar
function toggleLike(id, button) {
  const product = products.find(p => p.id === id);
  const countSpan = button.querySelector('.like-count');
  
  if (button.classList.contains('liked')) {
    product.likes--;
    button.classList.remove('liked');
  } else {
    product.likes++;
    button.classList.add('liked');
  }
  
  countSpan.textContent = product.likes;
}

// Executa a renderização ao carregar a página
renderProducts();
