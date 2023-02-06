import {Routes, Route} from 'react-router'
import routes from "../router/router";
import Announcement from "./announcement/Announcement";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const DefaultLayout = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
