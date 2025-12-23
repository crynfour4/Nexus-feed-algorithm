import useStepStore from "@/store/useStepStore";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FinalStep from "./FinalStep";

const SignUpForm = () => {
  const currentStep = useStepStore((state) => state.currentStep);

  const firstStep = {
    heading: "Create Your Account",
    description: "Enter unique username, email and strong password",
    inputs: {
      values: ["Username", "Email", "Password", "Confirm password"],
      placeholders: [
        "johndoe01",
        "JohnDoe@example.com",
        "Strong_password1",
        "Strong_password1",
      ],
    },
  };

  const secondStep = {
    heading: "Personal Information",
    description: "Tell us a bit more about yourself",
    inputs: {
      values: ["First Name", "Last Name", "Date of Birth", "City", "Country"],
      placeholders: ["John", "Doe", "", "New York", ""],
    },
  };

  const thirdStep = {
    heading: "Profile Picture",
    description: "Add a profile picture to personalize your account",
    inputs: {
      values: [],
      placeholders: [],
    },
  };

  return (
    <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 flex flex-col items-center">
      <p className="text-white text-2xl font-semibold pb-2">
        {currentStep === 1
          ? firstStep.heading
          : currentStep === 2
          ? secondStep.heading
          : currentStep === 3
          ? thirdStep.heading
          : null}
      </p>
      <p className="text-zinc-400 pb-6 text-[15.5px]">
        {currentStep === 1
          ? firstStep.description
          : currentStep === 2
          ? secondStep.description
          : currentStep === 3
          ? thirdStep.description
          : null}
      </p>
      <div>
        {currentStep === 1 ? (
          <FirstStep stepData={firstStep} />
        ) : currentStep === 2 ? (
          <SecondStep stepData={secondStep} />
        ) : currentStep === 3 ? (
          <ThirdStep stepData={thirdStep} />
        ) : currentStep === 4 ? (
            <FinalStep/>
        ) : null}
      </div>
    </div>
  );
};

export default SignUpForm;
