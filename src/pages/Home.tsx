import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();

  function handleLogIn() {
    navigate("/login");
  }
  function handleSignup() {
    navigate("/signup");
  }
  return (
    <section className=" relative p-0  overflow-hidden" >
      <div className=" bg-bg border-[0.2px] lg:mt-10 lg:mb-5 border-gray-200 m-auto max-w-[375px] w-[375px] h-[812px] max-h-[812px] relative flex justify-items-center flex-col items-center">
        <div className=" absolute top-[549px] left-[20px] text-left flex gap-[10px] flex-col ">
          <h1 className=" text-dark font-rubik  text-[28px] font-medium tracking-tight">Welcome to PopX</h1>
          <p className=" font-rubik text-gray-400  text-[18px] w-[231px] h-[48px] text-left leading-tight ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className=" w-full absolute top-[669px] left-[20px] flex flex-col gap-2.5">
          <button className=" bg-primary font-rubik w-[335px] h-[46px] rounded-[6px] px-2 text-white  text-[16px] font-medium text-center cursor-pointer tracking-normal hover:bg-indigo-600" 
           onClick={handleSignup}
          >Create Account</button>
          <button className="bg-primary-light hover:bg-purple-200 text-[16px] font-rubik w-[335px] h-[46px] rounded-[6px] px-2 text-dark font-medium text-center cursor-pointer tracking-tight" 
          onClick={handleLogIn}
          >Already Registered? Login</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
