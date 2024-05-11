import AppRoutes from "./AppRoutes";
import Header from "./components/templates/Header/Header";
import { SideBar } from "./components/templates/SideBar/SideBar";

const App = () => {
  return (
    <div className="flex gap-4 ">
      <SideBar />
      <div>
        <Header />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
