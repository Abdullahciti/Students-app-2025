/* eslint-disable react/prop-types */
import Table from "./cards/Table";

// Components
import RSHeader from "./recent students/RSHeader";
const RecentStudents = ({ students, isLoading, fetchError }) => {
  return (
    <div className="w-full my-5 p-4 bg-white shadow-2xl rounded-xl lg:col-span-2 col-span-1">
      <RSHeader />
      <div className="relative overflow-x-auto my-5 w-full">
        {isLoading && (
          <h1 className="w-full py-8 text-xl font-semibold text-center">
            Loading...
          </h1>
        )}
        {fetchError && (
          <h1 className="w-full py-8 text-xl font-semibold text-center">
            {fetchError}
          </h1>
        )}
        {!isLoading && !fetchError && students && <Table students={students} />}
      </div>
    </div>
  );
};

export default RecentStudents;
