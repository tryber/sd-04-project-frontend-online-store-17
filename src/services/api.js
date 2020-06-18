export async function getCategories() {
  fetch('https://api.mercadolibre.com/sites/MLB/categories').then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
