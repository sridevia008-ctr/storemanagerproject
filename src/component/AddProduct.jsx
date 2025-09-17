import { useInventoryDispatch } from "../context/InventoryContext";

export default function AddProduct() {
  const dispatchToInventory = useInventoryDispatch();

  const onAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      productName: e.target.productName.value,
      imageUrl: e.target.imageUrl.value,
      price: parseFloat(e.target.price.value),
      tags: e.target.tags.value.split(",").map((tag) => tag.trim()),
      stock: e.target.stock.value,
    };

    dispatchToInventory({
      type: "NEW_PRODUCT",
      ...newProduct,
    });

    e.target.reset();
    alert("Product added successfully!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-midnight text-gray-800 dark:text-blossom shadow-lg dark:shadow-none rounded-lg mt-6 mb-4 transition-colors duration-300">
      <h1 className="font-bold text-4xl text-center mb-6 text-gray-700 dark:text-blossom">
        Add New Product
      </h1>

      <form onSubmit={onAddProduct} className="space-y-4">
        {[
          { id: "productName", label: "Product Name", type: "text", placeholder: "Enter product name" },
          { id: "imageUrl", label: "Product Image URL", type: "text", placeholder: "Enter image URL" },
          { id: "price", label: "Price", type: "number", placeholder: "Enter price", step: "0.01" },
          { id: "stock", label: "Stock", type: "number", placeholder: "Enter stock", step: "0.01" },
          { id: "tags", label: "Tags (comma-separated)", type: "text", placeholder: "Enter tags, separated by commas" },
        ].map(({ id, label, type, placeholder, step }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {label}
            </label>
            <input
              id={id}
              type={type}
              step={step}
              placeholder={placeholder}
              required
              className="w-full p-2 border border-gray-300 dark:border-blossom rounded bg-white dark:bg-shadow text-gray-800 dark:text-blossom focus:ring focus:ring-green-300 focus:outline-none transition"
            />
          </div>
        ))}

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}