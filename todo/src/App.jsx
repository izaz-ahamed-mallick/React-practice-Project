import "./App.css";
import Todo from "./Components/Todo";
import AppStore from "./reduxStore/AppStore";
import { Provider } from "react-redux";

function App() {
    return (
        <div>
            <Provider store={AppStore}>
                <Todo />
            </Provider>
        </div>
    );
}

export default App;
