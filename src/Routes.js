import { useRoutes } from "react-router-dom";
import Searchbar from "./components/SearchBar/Searchbar";
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Swiper from "./components/Swiper/Swiper"

export default function Router() {
  let element = useRoutes([
    // {
    //   element: <Searchbar />,
    //   path: "Searchbar"
    // },
    {
      element: <Swiper />,
      path: "Swiper"
    },
    // {
    //   element: <Navbar />,
    //   path: "Navbar"
    // },
 
    // {
    //   element: <Home />,
    //   path: "/"
    // }
  ]);

  return element;
}
