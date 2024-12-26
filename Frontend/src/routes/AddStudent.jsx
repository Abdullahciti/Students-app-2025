/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupMessage from "../components/PopupMessage";

const AddStudent = ({ baseUrl }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/students`, {
        name,
        email,
        course,
        status,
        enrollmentDate,
      });
      if (response.status === 201) {
        setShow(true);
        setShowText("The new Student is created");
      }
    } catch (err) {
      console.log(err);
      setShowText(err.message);
    } finally {
      navigate("/students");
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
      <div className="col-span-1 w-full h-fit my-1.5 p-6 bg-altColor rounded-md">
        <h1>Status:</h1>
        <select
          required
          id="status"
          name="status"
          aria-label="status"
          className="w-full h-full p-1.5 py-3 my-1.5 col-span-1 outline-none bg-slate-300 border-none rounded-sm"
        >
          <option type="status" onChange={(e) => setStatus(e.target.value)}>
            actvie
          </option>
          <option type="status" onChange={(e) => setStatus(e.target.value)}>
            inactvie
          </option>
        </select>
      </div>
      <div className="col-span-2 flex w-full h-fit my-1.5 p-6 rounded-md justify-end">
        <button
          className="w-fit p-1.5 px-6 text-xl bg-activeColor text-white"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      {show && <PopupMessage popupText={showText} />}
    </form>
  );
};

export default AddStudent;
