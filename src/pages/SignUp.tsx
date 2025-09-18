import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import { addFakeUser } from "../data/fakeUsrs";

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  preference: RadioNodeList;
}

interface MyFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
const SignUp = () => {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<MyFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const preference = form.elements.preference.value;
    const id = Date.now(); // unique numeric ID
    addFakeUser({ id, name, email, password });
    console.log(preference);
    login("fake-token");
    alert("successfully signup");
    navigate(`/users/${id}`);
  }
  return (
    <div className=" relative max-w-[375px] px-[20px] w-[375px] max-h-[812px] lg:h-[95vh] h-screen  lg:mt-10 lg:mb-5  bg-bg  flex flex-col gap-20 m-auto">
      <form
        className=" relative overflow-hidden  h-full mt-10"
        onSubmit={handleSubmit}
      >
        <h2 className=" font-rubik text-2xl/tight mb-8 text-left tracking-tight font-bold">
          Create your <br /> PopX account
        </h2>
        <div className="relative ">
          {/* Input Field */}
          <input
            type="text"
            name="name"
            className={`
          peer w-full px-4 py-2
          border-2 rounded-sm
          text-gray-700 text-base
          bg-bg
          transition-all duration-200 ease-in-out
          focus:outline-none
            border-gray-300 hover:border-gray-400
        `}
            required
          />

          {/* Floating Label with Border Cut Effect */}
          <label
            className={`
          absolute left-5 pr-3.5  bg-bg
          transition-all duration-200 ease-in-out
          pointer-events-none
            -top-2.5 text-xs font-medium text-purple-600
        `}
          >
            Full Name
            <span className="text-red-500 ml-1">*</span>
          </label>
        </div>
        <br />
        <div className="relative ">
          <input
            type="email"
            name="email"
            className={`
          peer w-full px-4 py-2
          border-2 rounded-sm
          text-gray-700 text-base
          bg-bg
          transition-all duration-200 ease-in-out
          focus:outline-none
          
            border-gray-300 hover:border-gray-400
        `}
            required
          />
          <label
            className={`
          absolute left-5 pr-3 bg-bg
          transition-all duration-200 ease-in-out
          pointer-events-none
            -top-2.5 text-xs font-medium text-purple-600
        `}
          >
            Email
            <span className="text-red-500 ml-1">*</span>
          </label>
        </div>
        <br />
        <div className="relative ">
          <input
            type="text"
            className={`
          peer w-full px-4 py-2
          border-2 rounded-sm
          text-gray-700 text-base
          bg-bg
          transition-all duration-200 ease-in-out
          focus:outline-none
          
            border-gray-300 hover:border-gray-400
        `}
            required
          />
          <label
            className={`
          absolute left-5 pr-3 bg-bg
          transition-all duration-200 ease-in-out
          pointer-events-none
            -top-2.5 text-xs font-medium text-purple-600
        `}
          >
            Phone Number
            <span className="text-red-500 ml-1">*</span>
          </label>
        </div>
        <br />
        <div className="relative">
          <input
            type="text"
            className={`
          peer w-full px-4 py-2
          border-2 rounded-sm
          text-gray-700 text-base
          bg-bg
          transition-all duration-200 ease-in-out
          focus:outline-none
          
            border-gray-300 hover:border-gray-400
        `}
            required
          />
          <label
            className={`
          absolute left-5 pr-3 bg-bg
          transition-all duration-200 ease-in-out
          pointer-events-none
            -top-2.5 text-xs font-medium text-purple-600
        `}
          >
            Company Name
            <span className="text-red-500 ml-1">*</span>
          </label>
        </div>
        <br />
        <div className="relative mb-6">
          <input
            type="password"
            name="password"
            className={`
          peer w-full px-4 py-2
          border-2 rounded-sm
          text-gray-700 text-base
          bg-bg
          transition-all duration-200 ease-in-out
          focus:outline-none
          
            border-gray-300 hover:border-gray-400
        `}
            required
          />
          <label
            className={`
          absolute left-5 pr-2  bg-bg
          transition-all duration-200 ease-in-out
          pointer-events-none
            -top-2.5 text-xs font-medium text-purple-600
        `}
          >
            Password
            <span className="text-red-500 ml-1">*</span>
          </label>
        </div>
        <br />
        <div className="flex relative flex-row items-center gap-3">
          <label
            className={` absolute  -top-7 font-rubik font-light  text-dark tracking-tight text-[14px] text-left
            
        `}
          >
            Are you an Agency?
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="option1"
              name="preference"
              value="option1"
              className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
              required
            />
            <label
              htmlFor="option1"
              className="ml-2 font-rubik text-gray-700 cursor-pointer"
            >
              Yes
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="option2"
              name="preference"
              value="option2"
              className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="option2"
              className="ml-2 text-gray-700 font-rubik cursor-pointer"
            >
              No
            </label>
          </div>
        </div>
        <button
          className="py-2 px-4 absolute left-0 lg:bottom-4 bottom-5 w-full font-medium font-rubik text-center cursor-pointer text-white rounded bg-primary"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
