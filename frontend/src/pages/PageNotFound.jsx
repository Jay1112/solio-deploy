import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Page404 from "../components/layout/Page404";

function PageNotFound() {
  return (
    <DefaultLayout>
      <Page404 />
    </DefaultLayout>
  );
}

export default PageNotFound;
