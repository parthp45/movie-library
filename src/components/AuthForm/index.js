import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../utills/fibrebase";
import validate from "../../utills/validation";
import styles from "./styles.module.css";
import { addUser } from "../../utills/userSlice";
import { useDispatch } from "react-redux";
const Authform = () => {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const message = validate(formData.email, formData.password);
    setMessage(message);
    if (message) return;
    if (!form) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: formData.name,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({ uid, displayName, email }));
            })
            .catch((error) => {
              setMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            setMessage("Email already exits");
            setFormData({
              ...formData,
              email: "",
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/wrong-password") {
            setMessage("Wrong Password");
            setFormData({
              ...formData,
              password: "",
            });
          }
          if (errorCode === "auth/user-not-found") {
            setMessage("User not found. Please Sign Up.");
            setFormData({
              ...formData,
              email: "",
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleForm = () => {
    setFormData({
      email: "",
      password: "",
      name: "",
    });
    setMessage("");
    setForm(!form);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={`${styles.formWrapper}`}>
      <h1 className="text-center text-white font-medium text-2xl">
        {!form ? "Sign Up" : "Login"}
      </h1>
      <form className="flex flex-col gap-2">
        {!form && (
          <>
            <label className={`text-base font-bold`}>Name</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              value={formData.name}
              name="name"
              className={`border border-gray-400 rounded-sm p-2 w-full bg-[#333]`}
            />
          </>
        )}
        <label className={`text-base font-bold`}>Email</label>
        <input
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          className={`border border-gray-400 rounded-sm p-2 w-full bg-[#333]`}
        />
        <label className={`text-base font-bold mt-4`}>Password</label>
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          value={formData.password}
          name="password"
          className={`border border-gray-400 rounded-sm p-2 w-full bg-[#333]`}
        />
        <span className="p-2 text-[#e50914] text-lg">{message}</span>
        <div className={`flex justify-center mt-3`}>
          <button
            className={`text-white text-base w-full text-center justify-center bg-[#e50914] py-2 px-4 flex items-center rounded-sm hover:bg-red-800  ${
              loading ? "pointer-events-none" : "pointer-events-auto"
            }`}
            onClick={(e) => handleLogin(e)}
          >
            {loading
              ? !form
                ? "Signing In..."
                : "Logging In..."
              : !form
              ? "Sign Up"
              : "Log In"}
          </button>
        </div>
        <p>
          {!form ? "Already Signed In?" : "New to Movies?"}
          <span
            role="button"
            className=" ml-2 cursor-pointer hover:text-[#e50914]"
            onClick={() => handleForm()}
          >
            {!form ? "Login Here!" : "Sign up Here!"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Authform;
