import Clients from "./components/Zad1/Clients/Clients";
import ClientsAdd from "./components/Zad1/ClientsAdd";
import Navigation from "./components/Nav/Navigation";
import ClientsId from "./components/Zad1/ClientsId";

import ClientsIdEdit from "./components/Zad1/ClientsIdEdit";
import Orders from "./components/Zad1/Orders";
import OrdersAdd from "./components/Zad1/OrdersAdd";
import OrdersId from "./components/Zad1/OrdersId";
import Invoice from "./components/Zad1/Invoice";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

//Tworzymy klienta
const queryClient=new QueryClient()

// # Zadanie 1

// Stwórz routing aplikacji (bazując na poprzednich zadaniach). Potrzebne będą:
// * /clients -> podstrona z danymi kontaktowymi klientów
// * /clients/add -> podstrona na dodawanie klientów
// * /clients/:id -> podstrona na detale klienta,
// * /clients/:id/edit -> podstrona na edycję klienta,
// * /orders - > podstrona na wszystkie zamowienia,
// * /orders/:id -> podstrona na podgląd pojedynczego zamowienia,
// * /orders/add -> podstrona na dodawanie zamowien,
// * /invoices - > podstrona na faktury,

const clientData = [];

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<div>Main Page</div>} path="" />
          <Route
            exact
            path="/clients"
            element={<Clients clientData={clientData} />}
          ></Route>
          <Route
            exact
            path="/clients/add"
            element={<ClientsAdd clientData={clientData} />}
          ></Route>
          <Route
            exact
            path="/clients/:id"
            element={<ClientsId clientData={clientData} />}
          ></Route>
          <Route
            exact
            path="/clients/:id/edit"
            element={<ClientsIdEdit clientData={clientData} />}
          ></Route>

          <Route exact path="/orders" element={<Orders />}></Route>
          <Route exact path="/orders/:id" element={<OrdersId />}></Route>
          <Route exact path="/orders/add" element={<OrdersAdd clientData={clientData} />}></Route>
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
