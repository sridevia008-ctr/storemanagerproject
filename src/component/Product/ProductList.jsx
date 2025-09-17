import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4 bg-white dark:bg-midnight text-gray-800 dark:text-blossom transition-colors duration-300 p-2 rounded">
      {products.map((product) => (
        <Product key={product.productName} product={product} />
      ))}
    </div>
  );
}