import Home from "./components/Home";
import Clients from "./components/Zad1/Clients/Clients";
import ClientsAdd from "./components/Zad1/ClientsAdd";
import Navigation from "./components/Nav/Navigation";
import ClientsId from "./components/Zad1/ClientsId";
import ThemeButton from "./components/ThemeContext/ThemeButton";
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
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useThemeContext } from "./components/ThemeContext/ThemeContext";
//Tworzymy klienta
import { AlertContext } from "./components/NotificationContext/AlertContext";



const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    staleTime: Infinity,
  },
});

function App() {
  const { isDarkTheme } = useThemeContext();
  const alert = useAlert();

  return (
    <div className={isDarkTheme ? "AppDark" : "App"}>
      <ErrorBoundary fallback={<div>ErrorBoundary</div>}>
        <Suspense fallback={<div>Lazy suspense</div>}>
          <AlertContext value={alert}>
          <QueryClientProvider client={queryClient}>
            <ThemeButton/>
            <AccountMenu />
            <FakeRegisterComponent />
            <FakeLoginComponent />
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route
                  element={
                    <div>
                      <Home />
                    </div>
                  }
                  path=""
                />
                <Route exact path="/clients" element={<Clients />}></Route>
                <Route
                  exact
                  path="/clients/add"
                  element={<ClientsAdd />}
                ></Route>
                <Route
                  exact
                  path="/clients/:id"
                  element={<ClientsId />}
                ></Route>
                <Route
                  exact
                  path="/clients/:id/edit"
                  element={<ClientsIdEdit />}
                ></Route>
                <Route exact path="/orders" element={<Orders />}></Route>
                <Route exact path="/orders/:id" element={<OrdersId />}></Route>
                <Route exact path="/orders/add" element={<OrdersAdd />}></Route>

                <Route
                  exact
                  path="/invoices"
                  element={
                    <ProtectedWrapper>
                      <Invoice />
                    </ProtectedWrapper>
                  }
                ></Route>
              </Routes>
            </BrowserRouter>
            </QueryClientProvider>
            </AlertContext>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
