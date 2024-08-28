import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./Components/Home";

function App() {
    const queryClient = new QueryClient();
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        </div>
    );
}

export default App;
