"use client";
import useStepStore from "@/store/useStepStore";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

interface FirstStepProps {
  stepData: {
    heading: string;
    description: string;
    inputs: {
      values: string[];
      placeholders: string[];
    };
  };
}

const FirstStep: React.FC<FirstStepProps> = ({ stepData }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const nextStep = useStepStore((state) => state.nextStep);

  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const passwordRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{2,}$/
  );

  // TODO: add validation for username that will check if such username already exists in database
  // TODO: add email validation for email that will check if such email already exists in database

  const handleEmailChange = (val: string) => {
    setEmail(val);

    if (!emailRegex.test(val)) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (val: string) => {
    setPassword(val);

    if (val.length < 8) {
      setPasswordError("Password must be 8 characters or more");
    } else if (!passwordRegex.test(val)) {
      setPasswordError(
        "Password must include at least 1 upper case letter\nPassword must include at least 1 lower case letter\nPassword must include at least 1 number\nPassword must include at least 1 special character"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (val: string) => {
    setConfirmPassword(val);
    if (val !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleContinue = () => {
    const isAllValid =
      username &&
      email &&
      password &&
      confirmPassword &&
      !usernameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError;

    if (isAllValid) {
      nextStep();
    } else {
      if (username === "") setUsernameError("This field cannot be empty");
      if (email === "") setEmailError("This field cannot be empty");
      if (password === "") setPasswordError("This field cannot be empty");
      if (confirmPassword === "")
        setConfirmPasswordError("This field cannot be empty");
    }
  };

  return (
    <div id="first-step" className="flex flex-col gap-3">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <label className="text-white pl-1 pb-1">
            {stepData.inputs.values[0]}
          </label>
          <input
            placeholder={stepData.inputs.placeholders[0]}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text-white px-4 py-2 outline outline-zinc-800 rounded-lg text-[15px] focus:outline-indigo-500 focus:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
          <p className="text-red-600 text-xs pt-1">{usernameError}</p>
        </div>
        <div className="flex flex-col">
          <label className="text-white pl-1 pb-1">
            {stepData.inputs.values[1]}
          </label>
          <input
            placeholder={stepData.inputs.placeholders[1]}
            type="text"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            className="text-white px-4 py-2 outline outline-zinc-800 rounded-lg text-[15px] focus:outline-indigo-500 focus:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
          <p className="text-red-600 text-xs pt-1">{emailError}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-white pl-1 pb-1">
          {stepData.inputs.values[2]}
        </label>
        <Input
          placeholder={stepData.inputs.placeholders[2]}
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          variant="bordered"
          classNames={{
            input: "text-white text-[15px]",
            inputWrapper: [
              "border-1",
              "border-zinc-800",
              "rounded-lg",
              "bg-transparent",
              "group-data-[focus=true]:border-indigo-500",
              "group-data-[focus=true]:shadow-[0_0_10px_rgba(99,102,241,0.5)]",
            ],
          }}
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeSlashIcon className="size-5 text-white pointer-events-none" />
              ) : (
                <EyeIcon className="size-5 text-white pointer-events-none" />
              )}
            </button>
          }
        />
        <p className="text-red-600 text-xs pt-1 whitespace-pre-line">
          {passwordError}
        </p>
      </div>
      <div className="flex flex-col">
        <label className="text-white pl-1 pb-1">
          {stepData.inputs.values[3]}
        </label>
        <Input
          placeholder={stepData.inputs.placeholders[3]}
          type={isConfirmPasswordVisible ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          variant="bordered"
          classNames={{
            input: "text-white text-[15px]",
            inputWrapper: [
              "border-1",
              "border-zinc-800",
              "rounded-lg",
              "bg-transparent",
              "group-data-[focus=true]:border-indigo-500",
              "group-data-[focus=true]:shadow-[0_0_10px_rgba(99,102,241,0.5)]",
            ],
          }}
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleConfirmPasswordVisibility}
            >
              {isConfirmPasswordVisible ? (
                <EyeSlashIcon className="size-5 text-white pointer-events-none" />
              ) : (
                <EyeIcon className="size-5 text-white pointer-events-none" />
              )}
            </button>
          }
        />
        <p className="text-red-600 text-xs pt-1">{confirmPasswordError}</p>
      </div>

      <Link
        href="/sign_in"
        className="text-zinc-400 text-sm ml-40 mt-2 hover:text-shadow-[0_0_8px_white] w-42 hover:text-white"
      >
        Already have an account?
      </Link>

      <Button
        onClick={handleContinue}
        className="text-white bg-indigo-500 rounded-lg py-3 px-5 flex flex-ro items-center mt-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] duration-300"
      >
        Continue
        <ArrowRightIcon className="size-4" />
      </Button>
    </div>
  );
};

export default FirstStep;
