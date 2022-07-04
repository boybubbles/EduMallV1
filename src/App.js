/** @format */

import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./assets/scss/styles.scss";
// eslint-disable-next-line
import "swiper/css/bundle";
import "./App.css";
import Details from "./pages/HomePages/Home/CourseDetails/Details";
import Home from "./pages/HomePages/Home/home";
import CourseInfo from "./pages/HomePages/Home/CourseDetails/CourseInfo";
import Checkout from "./pages/HomePages/Checkout/Checkout";
import Cart from "./pages/HomePages/cart/Cart";
import Default from "./pages/LandingPage/Default";
import { USER_LOGIN } from "./ulti/setting";
import { IsUserRedirect, ProtectedRoute } from "./Helpers/routes";
import UserInfo from "./pages/HomePages/User/UserInfo";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  let user = JSON.parse(localStorage.getItem(USER_LOGIN));

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <IsUserRedirect exact path="/" loggedInPath="/home" user={user}>
            <Default />
          </IsUserRedirect>
          <ProtectedRoute user={user} exact path="/cart">
            <HomeTemplate Component={Cart} />
          </ProtectedRoute>
          <ProtectedRoute user={user} exact path="/home">
            <HomeTemplate Component={Home} />
          </ProtectedRoute>
          <ProtectedRoute user={user} exact path="/home/user">
            <HomeTemplate Component={UserInfo} />
          </ProtectedRoute>
          <ProtectedRoute user={user} exact path="/checkout">
            <HomeTemplate Component={Checkout} />
          </ProtectedRoute>
          <ProtectedRoute user={user} exact path="/details/:category">
            <HomeTemplate Component={Details} />
          </ProtectedRoute>
          <ProtectedRoute
            user={user}
            exact
            path="/details/:category/:courseName"
          >
            <HomeTemplate Component={CourseInfo} />
          </ProtectedRoute>
          <ProtectedRoute
            user={user}
            exact
            path="/details/:category/search/:keyword"
          >
            <HomeTemplate Component={Details} />
          </ProtectedRoute>
          <ProtectedRoute user={user}>
            <HomeTemplate Component={PageNotFound} />
          </ProtectedRoute>
        </Switch>

        {/* <HomeTemplate path="/design" Component={Design} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
