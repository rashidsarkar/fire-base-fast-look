import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function MainLayout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
