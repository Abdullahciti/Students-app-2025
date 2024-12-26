/* eslint-disable react/prop-types */
import Card from "./cards/Card";
import { IoIosPeople } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { PiDiscDuotone } from "react-icons/pi";
import { ImStatsDots } from "react-icons/im";
import RecentStudents from "./RecentStudents";
import useAxiosFetch from "../../hooks/useAxiosFetch";

const Cards = ({ baseUrl }) => {
  const {
    data: students,
    fetchError,
    isLoading,
  } = useAxiosFetch(`${baseUrl}/students`);
  let activeCourses = 0;
  activeCourses = students.filter((item) => {
    item.course ? (item.course == "active" ? activeCourses : "") : 0;
  });

  const gradStudents = students ? students.length / 3 : 0;

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-10 gap-y-5">
      {fetchError && <div>Loading...</div>}
      {isLoading && <div>Loading...</div>}
      {!fetchError && !isLoading && students && (
        <>
          <Card
            icon={<IoIosPeople />}
            text={"all students"}
            value={students ? students.length : 0}
          />
          <Card
            icon={<PiDiscDuotone />}
            text={"active courses"}
            value={activeCourses.length}
          />
          <Card
            icon={<FaGraduationCap />}
            text={"Graduated"}
            value={
              gradStudents == 0
                ? 0
                : `${Math.round(gradStudents)} from ${students.length}`
            }
          />
          <Card
            icon={<ImStatsDots />}
            text={"succeed"}
            value={
              gradStudents == 0
                ? 0
                : `${Math.round((gradStudents / students.length) * 100)}%`
            }
          />
          <RecentStudents baseUrl={baseUrl} />
        </>
      )}
    </div>
  );
};

export default Cards;
