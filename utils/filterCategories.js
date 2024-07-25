import categories from "@/assets/categories";
export default function getFilteredCategories(categoryIds) {
  const filteredCategories = categories.filter((category) =>
    categoryIds.includes(category.id)
  );
  return filteredCategories;
}
