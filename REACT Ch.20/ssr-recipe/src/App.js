import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" component={RedPage} />
        <Route path="/blue" component={BluePage} />
      </Routes>
    </div>
  );
};

export default App;
