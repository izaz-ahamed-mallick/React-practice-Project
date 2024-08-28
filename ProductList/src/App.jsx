import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Products/Cart/Cart";
import Header from "./Components/Common/Header";
import { Provider } from "react-redux";
import AppStore from "./reduxStore/AppStore";

function App() {
    const queryClient = new QueryClient();
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Provider store={AppStore}>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </QueryClientProvider>
        </div>
    );
}

export default App;
