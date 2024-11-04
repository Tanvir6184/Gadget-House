import { createBrowserRouter } from "react-router-dom";
import MainFile from "./Main-layout-Files/MainFile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainFile></MainFile>,
  },
]);

export default routes;
