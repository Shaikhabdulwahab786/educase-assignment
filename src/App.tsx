import {  Outlet } from "react-router-dom";
import { isAuthenticated} from "./utils/auth";
import "./App.css";
import User from "./components/Userdetails";

const App = () => {
  return !isAuthenticated() ? <Outlet /> : <User/>;
};

export default App;
