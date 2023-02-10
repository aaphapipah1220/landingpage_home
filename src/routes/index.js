import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Content from "../component/Home/Content";
import Data from "../component/Data";
import Formulir from "../component/Formulir";
import Report from "../component/Report";
import TicketItem from "../component/Landingpages/TicketItem";
import ContentList from "../component/Home/ContentList";
import DetailPageWrapper from "../pages/Home/DetailPage";

import LoginAdminPage from "../pages/Login/LoginAdminPage";
import CreateTicketPage from "../pages/Landingpage/CreateTicketPage";
import CreateTicketFeedbackPage from "../pages/Landingpage/CreateTicketFeedbackPage";
import TicketItemPage from "../pages/Landingpage/TicketItemPage";
import LandingPage from "../pages/Landingpage/LandingPage";
import jwtDecode from "jwt-decode";
import Aside from "../component/Aside";

function onLogout() {
  sessionStorage.clear();
  window.location.replace("/login");
}

class ListPages extends React.Component {
  routeGuard = (Component) => {
    if (sessionStorage.getItem("accessToken")) {
      let token = sessionStorage.getItem("accessToken");
      const { exp } = jwtDecode(token);
      const expirationTime = exp * 1000 - 60000;
      if (Date.now() >= expirationTime) {
        return <Redirect to="/login"></Redirect>;
      } else {
        return <Component />;
      }
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  };

  routeLP = (Component) => {
    if (sessionStorage.getItem("accessToken")) {
      return <Redirect to="/dashboard"></Redirect>;
    } else {
      return <Component />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return this.routeLP(LandingPage);
              }}
            ></Route>
            <Route
              path="/login"
              render={() => {
                return this.routeLP(LoginAdminPage);
              }}
            ></Route>
            <Route
              path="/create-ticket-visitor"
              render={() => {
                return this.routeLP(CreateTicketPage);
              }}
            ></Route>
            <Route
              path="/create-ticket-feedback"
              render={() => {
                return this.routeLP(CreateTicketFeedbackPage);
              }}
            ></Route>
            <Route
              path="/ticket-item-page"
              render={() => {
                return this.routeLP(TicketItemPage);
              }}
            ></Route>
            <Route
              path="/ticket-item"
              render={() => {
                return this.routeLP(TicketItem);
              }}
            ></Route>
            <Route
              path="/home"
              render={() => {
                return this.routeGuard(Content);
              }}
            ></Route>
            <Route
              path="/form"
              render={() => {
                return this.routeGuard(Formulir);
              }}
            ></Route>
            <Route
              path="/table"
              render={() => {
                return this.routeGuard(Data);
              }}
            ></Route>
            <Route
              path="/report"
              render={() => {
                return this.routeGuard(Report);
              }}
            ></Route>
            <Route
              path="/content-list"
              render={() => {
                return this.routeGuard(ContentList);
              }}
            ></Route>
            <Route
              path="/ticket/:id"
              render={() => {
                return this.routeGuard(DetailPageWrapper);
              }}
            ></Route>
            <Route
              path="/aside"
              logout={onLogout}
              render={() => {
                return this.routeGuard(Aside);
              }}
            ></Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

// return (
//     <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />

//         <Route path="/home" element={<Content />} />
//         <Route path="/data" element={<Data />} />
//         <Route path="/form" element={<Formulir />} />
//         <Route path="/report" element={<Report />} />
//     </Routes>
// );

export default ListPages;
