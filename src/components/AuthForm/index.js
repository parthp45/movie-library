import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import validate from "../../utills/validation";
const Authform = () => {
  const [message, setMessage] = useState("");
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passRef?.current?.value;
    if (!validate(email, password)) {
      alert("true");
    }
    setMessage(validate(email, password));
  };
  return (
    <div className={`${styles.formWrapper}`}>
      <form className="flex flex-col gap-2">
        <label className={`text-base font-bold`}>Email</label>
        <input
          type="email"
          ref={emailRef}
          name="email"
          className={`border border-gray-400 rounded-sm p-2 w-full bg-[#333]`}
        />
        <label className={`text-base font-bold`}>Password</label>
        <input
          ref={passRef}
          type="password"
          name="password"
          className={`border border-gray-400 rounded-sm p-2 w-full bg-[#333]`}
        />
        <span className="p-2 text-red-700 text-lg">{message}</span>
        <div className={`flex justify-center mt-3`}>
          <button
            className={`text-white text-base w-full text-center justify-center bg-[#e50914] py-2 px-4 flex items-center rounded-sm hover:bg-red-800`}
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Authform;
