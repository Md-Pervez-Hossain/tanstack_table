import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../FormContext/FormContext";

const Page1 = ({ register }) => {
  const { name, setName } = useContext(FormContext);

  useEffect(() => {
    const storedName = localStorage.getItem("formName");
    console.log(storedName);
    if (storedName) {
      setName(storedName);
    }
  }, [setName]);

  useEffect(() => {
    localStorage.setItem("formName", name);
  }, [name]);

  return (
    <div>
      <form>
        <div className="flex flex-col">
          <label className="text-[18px] font-[500] mb-3">Your Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Your Name"
            className="border border-[#999] px-4 py-3 rounded mb-5"
          />
        </div>
      </form>
    </div>
  );
};

export default Page1;
