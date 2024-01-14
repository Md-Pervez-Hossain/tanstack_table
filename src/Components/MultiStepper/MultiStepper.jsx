import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Done from "./Done";
import FormContext from "../FormContext/FormContext";

const MultiStepper = () => {
  const [page, setPage] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { name, email, address } = useContext(FormContext);

  const onSubmit = (data) => {
    setValue("name", data.name);
    setValue("email", data.email);
    setValue("address", data.address);
    setPage((prevPage) => prevPage + 1);
  };

  const handleSubmitData = () => {
    localStorage.removeItem("formName");
    localStorage.removeItem("formEmail");
    localStorage.removeItem("formAddress");
    alert("Data Submitted");
  };

  return (
    <div>
      <h2 className="text-center">Multi-step Form</h2>
      <div className="flex justify-end">
        <p> Page {page}/4</p>
        {/* Display errors */}
      </div>
      {errors.name && <p>{errors.name.message}</p>}
      {errors.email && <p>{errors.email.message}</p>}
      {errors.address && <p>{errors.address.message}</p>}

      {page === 1 && <Page1 register={register} />}
      {page === 2 && <Page2 register={register} />}
      {page === 3 && <Page3 register={register} />}
      <div className="flex items-center justify-between gap-16">
        {page > 1 && page < 4 && (
          <button
            className={`bg-green-500 py-2 px-4 text-white rounded-md`}
            onClick={() => {
              const prevPage = page - 1;
              setPage(prevPage);
            }}
          >
            Back
          </button>
        )}

        {page < 4 && (
          <button
            className={`bg-green-500 py-2 px-4 text-white rounded-md`}
            onClick={handleSubmit(onSubmit)}
          >
            Next
          </button>
        )}
      </div>

      {page === 4 && <Done name={name} email={email} address={address} />}
      {page === 4 && (
        <button
          onClick={handleSubmitData}
          className={`bg-green-500 py-2 px-4 text-white rounded-md`}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default MultiStepper;
