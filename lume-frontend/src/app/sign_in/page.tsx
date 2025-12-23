"use client";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const handleEmailChange = (val: string) => {
    setEmail(val);

    if (!emailRegex.test(val)) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  };

  const validateContinue = () => {
    const isAllValid =
      email !== "" &&
      password !== "" &&
      emailError === "" &&
      passwordError === "";

    if (isAllValid) {
      // TODO: after successful login redirect user to feed page
      setEmail("");
      setPassword("");
    } else {
      if (email === "") setEmailError("This field cannot be empty");
      if (password === "") setPasswordError("This field cannot be empty");
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-950 flex justify-center">
      <div className="w-183 h-screen bg-radial from-indigo-950 to-70% to-zinc-950 flex flex-col items-center justify-center">
        <div className="flex flex-row gap-3 items-center pb-8">
          <span className="bg-indigo-500 rounded-lg p-1">
            <SparklesIcon className="text-white size-7" />
          </span>
          <Link href="/" className="text-white font-semibold text-2xl">
            Lume
          </Link>
        </div>
        <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 flex flex-col items-center w-110">
          <p className="text-white text-2xl font-semibold pb-2">Login</p>
          <p className="text-zinc-400 pb-6 text-[15.5px]">
            Welcome back, we've missed you!
          </p>
          <form className="flex flex-col items-center w-full">
            <div className="flex flex-col w-full">
              <label className="text-white pl-1 pb-1">Email</label>
              <Input
                type="text"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className="text-white px-2 py-1 outline outline-zinc-800 rounded-lg text-[15px] focus:outline-indigo-500 focus:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              />
              <p className="text-xs text-red-600 mt-1">{emailError}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="text-white pl-1 pb-1 mt-2">Password</label>
              <Input
                type="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-white px-2 py-1 outline outline-zinc-800 rounded-lg text-[15px] focus:outline-indigo-500 focus:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              />
              <p className="text-xs text-red-600 mt-1">{passwordError}</p>
            </div>

            <div className="flex flex-row justify-center gap-10 mb-3 m-3">
              <Link
                href="/sign_up"
                className="text-zinc-400 text-sm mt-2 mb-1 hover:text-shadow-[0_0_8px_white] w-27 hover:text-white"
              >
                No account yet?
              </Link>
              {/* TODO: create reset_password page */}
              <Link
                href="#"
                className="text-zinc-400 text-sm mt-2 mb-1 hover:text-shadow-[0_0_8px_white] w-29 hover:text-white"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              onClick={validateContinue}
              className="w-full text-white bg-indigo-500 rounded-lg py-3 px-5 mt-3 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] duration-300"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
