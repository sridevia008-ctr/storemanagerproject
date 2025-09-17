import { useState } from "react";
import { useInventoryDispatch } from "../../context/InventoryContext";

const Product = ({ product, alertValue }) => {
  const [addStock, setAddStock] = useState(0);
  const inventoryDispatch = useInventoryDispatch();

  const isDepleted = product.stock < alertValue;

  return (
    <div
      className={`px-3 py-2 rounded text-center flex flex-col items-center transition-colors duration-300
        ${isDepleted
          ? "border-2 border-red-800 bg-red-100 dark:bg-red-900 dark:border-red-400"
          : "border border-gray-400 dark:border-blossom bg-white dark:bg-shadow text-gray-800 dark:text-blossom"
        }`}
    >
      <h1 className="font-bold text-xl">{product.productName}</h1>

      <div className="w-[250px] h-[250px] overflow-hidden border border-gray-300 dark:border-blossom rounded mt-2">
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-lg mt-2">Price: ₹ {product.price.toFixed(2)}</p>

      <div>
        <p>Stock Available: {product.stock}</p>
      </div>

      <div className="mt-2">
        Add Stock:{" "}
        <input
          onChange={(e) => setAddStock(e.target.value)}
          className="border border-gray-400 dark:border-blossom rounded p-1 bg-white dark:bg-midnight text-gray-800 dark:text-blossom transition"
          value={addStock}
          type="number"
          name="new-stock-qty"
          id="new-stock-qty"
        />
      </div>

      <div>
        <button
          onClick={() => {
            setAddStock(0);
            inventoryDispatch({
              type: "STOCK_ADDED",
              productName: product.productName,
              stock: addStock,
            });
          }}
          className="bg-green-500 hover:bg-green-600 rounded p-1 text-white mt-2 transition"
        >
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default Product;