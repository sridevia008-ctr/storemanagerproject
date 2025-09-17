import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddProduct from './component/AddProduct';
import ProductCatalog from './component/Product/ProductCatalog';
import Layout from './Layout';
import Cart from './component/Cart/Cart';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';
import Inventory from './component/Inventory/Inventory';
import { InventoryProvider } from './context/InventoryContext';
import { SalesProvider } from './context/SalesContext';
import Sales from './component/Sales/Sales';

// ✅ Theme context import
import { ThemeProvider } from './component/ThemeContext/ThemeContext';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <ProductCatalog /> },
      { path: "/add-product", element: <AddProduct /> },
      { path: "/inventory", element: <Inventory /> },
      { path: "/cart", element: <Cart /> },
      { path: "/sales", element: <Sales /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

const App = () => {
  return (
    <ThemeProvider>
      <InventoryProvider>
        <CartProvider>
          <SalesProvider>
            {/* ✅ Apply theme-aware styling here */}
            <div className="min-h-screen bg-white dark:bg-midnight text-gray-800 dark:text-blossom transition-colors duration-300">
              <RouterProvider router={router} />
            </div>
          </SalesProvider>
        </CartProvider>
      </InventoryProvider>
    </ThemeProvider>
  );
}

export default App;