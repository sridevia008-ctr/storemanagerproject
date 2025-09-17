import { useState } from "react";
import ProductList from "./ProductList";
import { useInventory } from "../../context/InventoryContext";

export default function ProductCatalog() {
  const inventory = useInventory();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = inventory.filter(
    (item) =>
      item.stock > 0 &&
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-1 mb-2 bg-gray-100 dark:bg-midnight text-gray-800 dark:text-blossom transition-colors duration-300">
      <h1 className="mx-2 mt-1 font-bold text-2xl">Product Catalog</h1>

      <div className="m-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 dark:border-blossom hover:border-gray-400 dark:hover:border-blossom p-2 rounded w-full bg-white dark:bg-shadow text-gray-800 dark:text-blossom transition"
        />
      </div>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p className="m-2 text-gray-500 dark:text-gray-300">No products found.</p>
      )}
    </div>
  );
}