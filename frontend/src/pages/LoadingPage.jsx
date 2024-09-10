import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Spinner from "../components/ui/Spinner";

function LoadingPage() {
  return (
    <DefaultLayout>
      <Spinner message="fetching user session..." />
    </DefaultLayout>
  );
}

export default LoadingPage;
