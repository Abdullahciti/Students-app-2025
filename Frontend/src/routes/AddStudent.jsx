import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentsContext from "../context/StudentsContext";

const AddStudent = () => {
  const { baseUrl, refetch, setShowPopup, setPopupText } =
    useContext(StudentsContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [enrollmentDate, setEnrollmentDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/students`, {
        name,
        email,
        course,
        enrollmentDate,
      });
      if (response.status === 201) {
        setShowPopup(true);
        setPopupText("The new Student is created");
        refetch();
        navigate("/students");
      }
    } catch (err) {
      setShowPopup(true);
      setPopupText(`error adding the new student: ${err.message}`);
    }
  };

  return (
    <form className="w-full grid grid-cols-2 gap-x-6 gap-y-3">
      <div
        className={`col-span-2 font-bold text-2xl bg-white p-4 mb-4 rounded-md shadow-xl flex items-center justify-between`}
      >
        Add a new Student
      </div>
      <div className="col-span-1 grid-cols-1 w-full h-fit my-1.5 p-6 bg-altColor rounded-md">
        <h1>Name:</h1>
        <input
          id="name"
          type="text"
          aria-label="name"
          required
          onChange={(e) => setName(e.target.value)}
          className="w-full h-full p-1.5 py-3 my-1.5 col-span-1 outline-none bg-slate-300 border-none rounded-sm"
        />
      </div>
      <div className="col-span-1 w-full h-fit my-1.5 p-6 bg-altColor rounded-md">
        <h1>Email:</h1>
        <input
          id="email"
          type="email"
          aria-label="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-full p-1.5 py-3 my-1.5 col-span-1 outline-none bg-slate-300 border-none rounded-sm"
          required
        />
      </div>
      <div className="col-span-1 w-full h-fit my-1.5 p-6 bg-altColor rounded-md">
        <h1>Course:</h1>
        <input
          id="course"
          type="course"
          aria-label="course"
          onChange={(e) => setCourse(e.target.value)}
          className="w-full h-full p-1.5 py-3 my-1.5 col-span-1 outline-none bg-slate-300 border-none rounded-sm"
          required
        />
      </div>
      <div className="col-span-2 flex w-full h-fit my-1.5 p-6 rounded-md justify-end">
        <button
          className="w-fit p-1.5 px-6 text-xl bg-activeColor text-white"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddStudent;
