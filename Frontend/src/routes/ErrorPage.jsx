import { Link } from "react-router-dom";
import NavbarLg from "../NavbarLg";
import NavbarSm from "./NavbarSm";

function ErrorPage() {
  return (
    <div className="bg-mainColor w-screen h-screen flex">
      <NavbarLg />
      <NavbarSm />
      <div className="h-screen bg-transparent p-4 flex flex-col items-start lg:w-11/12 w-7/12 bg-black">
        <h1 className="text-4xl w-fit mx-auto mt-16 text-black font-bold">
          Sorry, an unexpected error has occurred or you have missed the right
          path.
        </h1>
        <div className="w-full flex items-center justify-center text-4xl mx-auto mt-16 text-black font-bold">
          go back to{" "}
          <Link
            to={"/"}
            className="pl-3 underline text-activeColor decoration-activeColor capitalize"
          >
            home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
