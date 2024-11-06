import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/Home";
import Ramen from "./components/pages/backend/ramen/Ramen";
import Transaction from "./components/pages/backend/transaction/Transaction";
import Toppings from "./components/pages/backend/toppings/Toppings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./components/store/storeContext";
import SidesDessert from "./components/pages/backend/dessert/SidesDessert";
import Drinks from "./components/pages/frontend/drinks/Drinks";
import Settings from "./components/pages/backend/settings/Settings";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/admin/ramen' element={<Ramen />} />
            <Route path='/admin/toppings' element={<Toppings />} />
            <Route path='/admin/sides-dessert' element={<SidesDessert />} />
            <Route path='/admin/drinks' element={<Drinks />} />
            <Route path='/admin/transaction' element={<Transaction />} />
            <Route path='/admin/settings' element={<Settings />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
