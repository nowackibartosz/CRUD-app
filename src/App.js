import Clients from "./components/Zad1/Clients/Clients";
import ClientsAdd from "./components/Zad1/ClientsAdd";
import Navigation from "./components/Nav/Navigation";
import ClientsId from "./components/Zad1/ClientsId";

import ClientsIdEdit from "./components/Zad1/ClientsIdEdit";
import Orders from "./components/Zad1/Orders/Orders";
import OrdersAdd from "./components/Zad1/OrdersAdd";
import OrdersId from "./components/Zad1/OrdersId";
import Invoice from "./components/Zad1/Invoice";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import FakeLoginComponent from "./components/FakeLoginComponent/FakeLoginComponent";
import FakeRegisterComponent from "./components/FakeRegisterComponent/FakeRegisterComponent";
import AccountMenu from "./components/menu/Menu";
import ProtectedWrapper from "./components/ProtectedWrapper/ProtectedWrapper";

//Tworzymy klienta
const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    staleTime: Infinity,
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AccountMenu />
        <FakeRegisterComponent />
        <FakeLoginComponent />

        <BrowserRouter>
          <Navigation />

          <Routes>
            <Route element={<div>Main Page</div>} path="" />
            <Route exact path="/clients" element={<Clients />}></Route>
            <Route exact path="/clients/add" element={<ClientsAdd />}></Route>
            <Route exact path="/clients/:id" element={<ClientsId />}></Route>
            <Route
              exact
              path="/clients/:id/edit"
              element={<ClientsIdEdit />}
            ></Route>

            <Route exact path="/orders" element={<Orders />}></Route>
            <Route exact path="/orders/:id" element={<OrdersId />}></Route>
            <Route exact path="/orders/add" element={<OrdersAdd />}></Route>

            <Route exact path="/invoices" element={<Invoice />}></Route>
          </Routes>

          {/* <Route path="/business"/>
          <Route path="/business">
            <Route index element={<div>Business</div>} />
            <Route element={<div>Business/clients</div>} path="clients" />
            <Route path="orders">
              <Route index element={<div>Business/orders</div>} />
              <Route path=":orderId" element={<div>Business/order/id</div>} />
            </Route>
          </Route>
          <Route element={<div>404</div>} path="*" /> */}
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
