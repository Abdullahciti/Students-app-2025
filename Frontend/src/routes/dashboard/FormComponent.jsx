/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const FormComponent = ({ addStatus, setAddStatus, formData, setFormData }) => {
  const formRef = useRef(null);
  const [activeValue, setActiveValue] = useState("active");
  const [err, setErr] = useState(null);


  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setAddStatus(false);
      }
    };

    if (addStatus) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addStatus, setAddStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={addNewStudent} // Trigger addNewStudent on form submit
      className="w-9/12 p-8 bg-[#eee] grid md:grid-cols-4 grid-cols-1 gap-6"
      ref={formRef}
    >
      <h1 className="col-span-4 text-center p-3 bg-mainColor text-xl my-4">
        Please fill the new student data
      </h1>
      <div className="flex flex-col justify-between md:col-span-2 col-span-4">
        <h2 className="text-xl my-1.5">Enter student name</h2>
        <input
          className="p-1.5 pl-2 outline-none border focus:border-gray-800 rounded-md"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
      <div className="flex flex-col justify-between md:col-span-2 col-span-4">
        <h2 className="text-xl my-1.5">Enter your course</h2>
        <input
          className="p-1.5 pl-2 outline-none border focus:border-gray-800 rounded-md"
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course"
          required
        />
      </div>
      <div className="flex flex-col justify-between md:col-span-2 col-span-4">
        <h2 className="text-xl my-1.5">Enter your email</h2>
        <p className="text-sm">{`(Please note that this will be hidden due to privacy)`}</p>
        <input
          className="p-1.5 pl-2 outline-none border focus:border-gray-800 rounded-md"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="flex flex-col justify-between md:col-span-2 col-span-4">
        <h2 className="text-xl my-1.5">Are you active in any course now?</h2>
        <select name="select" className="text-lg p-1.5 pl-2 outline-none border focus:border-gray-800 rounded-md" onChange={(e) => setActiveValue(e.current.value)} required>
          <option value="yes" className="">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <button
        type="submit"
        className="col-span-4 text-center bg-activeColor w-fit mx-auto py-2 px-5 text-white"
      >
        Save
      </button>
      {err && <h1 className="col-span-4 text-red-500">{err}</h1>}
    </form>
  );
};

export default FormComponent;
