import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
