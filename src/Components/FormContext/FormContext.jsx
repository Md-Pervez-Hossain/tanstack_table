import { React, createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <FormContext.Provider
        value={{
          name,
          email,
          address,
          error,
          setError,
          setName,
          setEmail,
          setAddress,
        }}
      >
        {children}
      </FormContext.Provider>
    </div>
  );
};

export default FormContext;
