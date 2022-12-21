import React from "react";
import "./App.css";
import routes from "./Routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./Components/topBar/TopBar";
import Sidebar from "./Components/sidebar/Sidebar";

const App = () => {
  let router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  );
};

export default App;
