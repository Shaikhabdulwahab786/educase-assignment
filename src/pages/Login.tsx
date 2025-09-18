import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import { fakeUsers } from "../data/fakeUsrs";

const Login = () => {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    const user = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) return alert("Invalid credentials");

    login("fake-token");
    navigate(`/users/${user.id}`);
  }
  return (
    <div className=" relative max-w-[375px] px-[20px] w-[375px] max-h-[812px] h-[100vh] bg-bg  lg:mb-10 m-auto">
      <form className=" h-full lg:mt-10  flex flex-col gap-2 relative" onSubmit={handleSubmit}>
        <div className="text-left mt-10 space-y-2">
        <h1 className=" w-[188px] text-dark font-rubik text-2xl/tight font-bold  tracking-tight">Signin to your <br /> PopX account</h1>
        <p className="text-gray-400 w-[232px] mb-4 font-rubik text-md/normal">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,</p>
        </div>
        <div className="relative ">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className={`mb-1
          peer w-full px-4 py-2
          border-2 rounded-md
          text-gray-700 text-base
          bg-bg
          transition-all duration-200 ease-in-out
          focus:outline-no
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
            Email Address
          </label>
        </div>
         <br />
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className={`
          peer w-full px-4 py-2
          border-2 rounded-md
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
          </label>
        </div>
        <br />
        <button className="py-2 px-4 w-full cursor-pointer font-medium font-rubik text-center text-white rounded bg-[#CBCBCB] hover:bg-[#CBCBCB]" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
