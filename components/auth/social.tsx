"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex items-center justify-center w-full gap-x-2 px-5">
      <button
        className="btn w-1/2 btn-outline flex justify-center"
        onClick={() => {}}
      >
        <FcGoogle className="h-6 w-6" />
      </button>
      <button
        className="btn w-1/2 btn-outline flex justify-center"
        onClick={() => {}}
      >
        <FaGithub className="h-6 w-6" />
      </button>
    </div>
  );
};
