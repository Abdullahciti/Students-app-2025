function ErrorPage() {
  return (
    <div className="bg-mainColor w-screen h-screen flex">
      <div className="h-screen bg-transparent p-4 flex flex-col items-start lg:w-11/12 w-7/12 bg-black">
        <h1 className="text-4xl w-fit mx-auto mt-16 text-black font-bold">
          Sorry, an unexpected error has occurred.
        </h1>
      </div>
    </div>
  );
}

export default ErrorPage;
