import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksUserContainer from './components/HooksUserContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <UserContainer /> */}
     <HooksUserContainer />
    </div>
    </Provider>
  );
}

export default App;
