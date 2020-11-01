import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../containers/Header";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="app-layout">
        <div className="container-fluid">{children}</div>
      </main>
    </>
  );
};
export default withRouter(AppLayout);