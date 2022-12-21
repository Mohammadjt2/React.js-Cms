import Home from "./Pages/home/Home";
import UsersList from "./Pages/users/UserList";
import NewUser from "./Pages/newUser/NewUser";
import Products from "./Pages/products/Products";
import Product from "./Pages/product/Product";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
];

export default routes;
