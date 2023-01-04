import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useContext } from "react";
import { CategoriesContext } from "./contexts/categories.context";

const App = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="shop/*" element={<Shop />}>
          {Object.keys(categoriesMap).map((title) => (
            <Route key={title} path={title} element={<Home />} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
