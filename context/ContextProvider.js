import { useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
  const [istranslated, setIstranslated] = useState(false);
  const [join, setJoin] = useState("");
  const [form, setForm] = useState({});
  // const [message, setMessage] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const toggleFunc = () => {
    setIstranslated(!istranslated);
  };

  const setToggle = () => {
    setIstranslated(!istranslated);
  };

  const inputEvent = (event) => {
    setJoin(event.target.value);
    setForm(...prev);
    // setFullname(event.target.value);
    // setEmail(event.target.value);
    // setMessage(event.target.value);
  };

  const joinclub = (event) => {
    event.preventDefault;
    setJoin(event.target.value);
    // setFullname(event.target.value);
    // setEmail(event.target.value);
    // setMessage(event.target.value);
  };

  return (
    <Context.Provider
      value={{
        setToggle,
        toggleFunc,
        istranslated,
        setIstranslated,
        join,
        joinclub,
        setJoin,
        inputEvent,
        // fullname,
        // email,
        // message,
        form,
        setForm,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
