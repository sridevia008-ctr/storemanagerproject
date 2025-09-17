import { useCartDispatch } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";

export default function Product({ product }) {
  const cartItems = useCart();
  const dispatchToCart = useCartDispatch();

  const onCartToggle = () => {
    if (cartItems.some((item) => item.productName === product.productName)) {
      dispatchToCart({
        type: "removed",
        ...product,
      });
    } else {
      dispatchToCart({
        type: "added",
        ...product,
      });
    }
  };

  const isInCart = cartItems.some((item) => item.productName === product.productName);

  return (
    <div className="border border-gray-400 dark:border-blossom p-4 rounded text-center flex flex-col items-center bg-white dark:bg-shadow text-gray-800 dark:text-blossom transition-colors duration-300">
      <h1 className="font-bold text-xl">{product.productName}</h1>

      <div className="w-[250px] h-[250px] overflow-hidden border border-gray-300 dark:border-blossom rounded mt-2">
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-lg mt-2">Price: ₹ {product.price.toFixed(2)}</p>

      <button
        onClick={onCartToggle}
        className={`mt-2 rounded p-2 transition-colors duration-300 ${
          isInCart
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}