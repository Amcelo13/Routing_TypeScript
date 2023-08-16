  import React from "react";
  import { Route, Routes, BrowserRouter } from "react-router-dom";
  import Protected from "./Protected";
  import "./App.css";
  import Login from "./pages/Login";
  import Signup from "./pages/Signup";
  import Page404 from "./pages/Page404";
  import Profile from "./pages/Profile";
  import { useSelector } from 'react-redux';
  import Home from "./pages/Home";
  import ProductPage from "./pages/ProductPage";
  import CategoryPage from "./pages/CategoryPage";
  import CartPage from "./pages/CartPage/CartPage";

  interface RootState {
    users: {
      isLoggedIn: boolean;
    };
  }

  interface RouteDefinition {
    path: string;
    element: React.ReactNode;
  }

  function App() {
    const signed_state = useSelector((state: RootState) => state.users.isLoggedIn);

    const publicRoutes: RouteDefinition[] = [
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ];

    const privateRoutes: RouteDefinition[] = [
      { path: "/profile", element: <Profile /> },
      { path: "/categoryPage", element: <CategoryPage /> },
      { path: "/cartPage", element: <CartPage /> },
    ];

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productPage" element={<ProductPage />} />
            <Route path="/*" element={<Page404 />} />

            {privateRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<Protected signed_state={signed_state}>{route.element}</Protected>}
              />
            ))}

            {publicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<Protected signed_state={!signed_state}>{route.element}</Protected>}
              />
            ))}
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
