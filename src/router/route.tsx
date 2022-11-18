import { createBrowserRouter } from "react-router-dom";
import Addmony from "../pages/Addmony";
import Home from './../pages/Home';

export const Route = createBrowserRouter([{
    path: "/",
    element: <Home />,

}, {
    path: "/addMony",
    element: <Addmony />
},
{
  path: "/updatemony/:monyId",
  element: <Addmony/>,
},
])

