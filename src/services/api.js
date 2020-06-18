export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = response.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
