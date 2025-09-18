import { useLoaderData } from "react-router-dom";
import type { UserData } from "../data/fakeUsrs";

export default function User() {
  const user = useLoaderData() as UserData;

  return (
    <div className=" max-w-[375px] lg:mt-10 w-[375px] max-h-[812px] lg:h-[90vh] h-screen bg-[#F7F8F9] m-auto">
      <div className=" w-full p-5 text-left py-6 mb-2 bg-[#FFFFFF]">
        <h1 className="font-rubik text-lg ">Account Settings</h1>
      </div>
      <div className="flex flex-col px-5 gap-5">
        <div className="flex gap-5">
          <div className=" relative">
          <img className="w-19 h-19 rounded-full" src="/img1.png" alt="Image" />
          <img className="w-5 h-5 absolute top-2/3 -right-1 rounded-full" src="/icon.png" alt="Image" />
          </div>
          <div className="flex flex-col text-left">
          <strong>{user.name}</strong>
          <p>{user.email}</p>
        </div>
        </div>
        <p className=" text-left text-sm tracking-normal">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
      <hr className="  top-1 left-1 border-dashed border-[#CBCBCB] my-4" />
    </div>
  );
}
