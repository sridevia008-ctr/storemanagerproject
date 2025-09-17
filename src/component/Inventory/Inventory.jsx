import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";
import Product from "./Product";

const Inventory = () => {
  const inventory = useInventory();
  const [alertValue, setAlertValue] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [showOnlyDepleted, setShowOnlyDepleted] = useState(false);

  const lowerCaseSearchQuery = searchQuery.toLowerCase();
  const filteredInventory = inventory.filter((product) => {
    const matchesSearchQuery = product.productName.toLowerCase().includes(lowerCaseSearchQuery);
    const isDepleted = product.stock < alertValue;
    return showOnlyDepleted ? (matchesSearchQuery && isDepleted) : matchesSearchQuery;
  });

  return (
    <div className="m-2 mb-4 flex flex-col items-center bg-white dark:bg-midnight text-gray-800 dark:text-blossom p-4 rounded transition-colors duration-300">
      <h1 className="font-bold text-2xl mx-2">Inventory</h1>

      <div className="m-2 mb-3 w-full max-w-md flex items-center gap-2">
        <input
          type="text"
          placeholder="Search inventory..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 dark:border-blossom hover:border-gray-400 dark:hover:border-blossom p-2 rounded flex-grow bg-white dark:bg-shadow text-gray-800 dark:text-blossom transition"
        />

        <div className="flex items-center">
          <label htmlFor="alert-value" className="mr-2 ml-8">Alert Value</label>
          <input
            id="alert-value"
            className="border border-gray-300 dark:border-blossom p-2 hover:border-gray-400 dark:hover:border-blossom rounded w-20 bg-white dark:bg-shadow text-gray-800 dark:text-blossom transition"
            value={alertValue}
            type="number"
            onChange={(e) => setAlertValue(e.target.value)}
          />

          <label className="ml-8" htmlFor="show-only-depleted">Show Only Depleted</label>
          <input
            className="ml-3 w-[35px] h-[35px] accent-starlight dark:accent-blossom"
            id="show-only-depleted"
            type="checkbox"
            checked={showOnlyDepleted}
            onChange={() => setShowOnlyDepleted(!showOnlyDepleted)}
          />
        </div>
      </div>

      {filteredInventory.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {filteredInventory.map((product) => (
            <Product key={product.productName} product={product} alertValue={alertValue} />
          ))}
        </div>
      ) : (
        <p className="m-2 text-gray-500 dark:text-gray-300">No inventory items found.</p>
      )}
    </div>
  );
};

export default Inventory;
