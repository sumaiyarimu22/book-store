import { Provider } from "react-redux";
import BooksContainer from "./components/BooksContainer";
import Navication from "./components/Navication";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navication />
      <BooksContainer />
    </Provider>
  );
};

export default App;
