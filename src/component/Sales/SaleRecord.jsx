const SaleRecord = ({ sale, saleId }) => {
  return (
    <div className="border border-gray-300 dark:border-blossom shadow-sm dark:shadow-none rounded-lg p-4 bg-white dark:bg-midnight text-gray-800 dark:text-blossom transition-colors duration-300">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Sale #{saleId + 1}</h2>
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {new Date(sale.datetime).toLocaleString()}
        </span>
      </div>

      <p className="mb-2">
        <strong>Total Sale Value:</strong> ₹{sale.saleValue.toFixed(2)}
      </p>

      <p className="mb-2">
        <strong>Cart Details:</strong>
      </p>

      <ul className="list-disc list-inside pl-4 text-gray-700 dark:text-gray-200">
        {sale.products.map((product) => (
          <li key={product.productName}>
            {product.productName} ({product.quantity}) – ₹
            {(product.price * product.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaleRecord;