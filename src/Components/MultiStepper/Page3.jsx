import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../FormContext/FormContext";

const Page3 = ({ register }) => {
  const { address, setAddress } = useContext(FormContext);
  useEffect(() => {
    const storedName = localStorage.getItem("formAddress");
    console.log(storedName);
    if (storedName) {
      setAddress(storedName);
    }
  }, [setAddress]);
  useEffect(() => {
    localStorage.setItem("formAddress", address);
  }, [address]);
  return (
    <div>
      <form>
        <div className="flex flex-col">
          <label className="text-[18px] font-[500] mb-3">Address</label>
          <input
            {...register("address", {
              required: "Address is required",
            })}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Your Address"
            className="border border-[#999] px-4 py-3 rounded mb-5"
          />
        </div>
      </form>
    </div>
  );
};

export default Page3;
