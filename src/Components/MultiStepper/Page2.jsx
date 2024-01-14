import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../FormContext/FormContext";

const Page2 = ({ register }) => {
  const { email, setEmail } = useContext(FormContext);
  useEffect(() => {
    const storedName = localStorage.getItem("formEmail");
    console.log(storedName);
    if (storedName) {
      setEmail(storedName);
    }
  }, [setEmail]);

  useEffect(() => {
    localStorage.setItem("formEmail", email);
  }, [email]);
  return (
    <div>
      <form>
        <div className="flex flex-col">
          <label className="text-[18px] font-[500] mb-3">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="border border-[#999] px-4 py-3 rounded mb-5"
          />
        </div>
      </form>
    </div>
  );
};

export default Page2;
