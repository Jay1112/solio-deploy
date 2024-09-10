import React from "react";
import LazyImage from "../../components/ui/LazyImage";
import NotFoundImage from "../../assets/not-found.png";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import NavLink from "./NavLink";

function Page404() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="w-full md:w-1/2 max-w-[400px] px-2 flex items-center justify-center flex-col animated animatedFadeInUp fadeInUp">
      <LazyImage
        src={NotFoundImage}
        width={300}
        height={200}
        alt={"not found page"}
        imageStyle="w-full h-auto"
      />
      <Button buttonStyle="primary-button px-4 py-1.5 text-lg inline-block mx-auto rounded-sm">
        {auth.isLoggedIn && <NavLink to="/dashboard/">Dashboard</NavLink>}
        {!auth.isLoggedIn && <NavLink to="/">Home</NavLink>}
      </Button>
    </div>
  );
}

export default Page404;
