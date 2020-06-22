export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = response.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const category = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const categoryJson = category.json();
  return categoryJson;
}
