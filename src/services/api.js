export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = response.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const category = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
    );
    const categoryJson = category.json();
    return categoryJson;
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const json = response.json();
  return json;
}
