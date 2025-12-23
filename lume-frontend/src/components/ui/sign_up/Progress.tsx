import useStepStore from "@/store/useStepStore";
import {
  UserIcon,
  IdentificationIcon,
  CameraIcon,
  CheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Divider } from "@heroui/react";

const Progress = () => {
  const currentStep = useStepStore((state) => state.currentStep);

  const validateStep = (step: number) => {
    if (currentStep === step) {
      return "size-10 text-white bg-indigo-500 rounded-full p-2";
    } else if (currentStep > step) {
      return " size-10 text-indigo-400 border-2 border-indigo-400 bg-indigo-950/50 rounded-full p-[6px]";
    } else {
      return "size-10 text-indigo-200 border border-indigo-200/50 rounded-full p-2";
    }
  };

  return (
    <div className="flex flex-row items-center gap-2 pb-8 pr-23">
      <div>
        {currentStep > 1 ? (
          <CheckCircleIcon className={validateStep(1)} />
        ) : (
          <UserIcon className={validateStep(1)} />
        )}
      </div>
      <Divider
        className={
          currentStep > 1
            ? "bg-indigo-400 w-full max-w-8 h-[0.5]"
            : "bg-indigo-200/50 w-full max-w-8 h-[0.2]"
        }
      />
      <div>
        {currentStep > 2 ? (
          <CheckCircleIcon className={validateStep(2)} />
        ) : (
          <IdentificationIcon className={validateStep(2)} />
        )}
      </div>
      <Divider
        className={
          currentStep > 2
            ? "bg-indigo-400 w-full max-w-8 h-[0.1]"
            : "bg-indigo-200/50 w-full max-w-8 h-[0.2]"
        }
      />
      <div>
        {currentStep > 3 ? (
          <CheckCircleIcon className={validateStep(3)} />
        ) : (
          <CameraIcon className={validateStep(3)} />
        )}
      </div>
      <Divider
        className={
          currentStep > 3
            ? "bg-indigo-400 w-full max-w-8 h-[0.1]"
            : "bg-indigo-200/50 w-full max-w-8 h-[0.2]"
        }
      />
      <div>
        <CheckIcon className={validateStep(4)} />
      </div>
    </div>
  );
};

export default Progress;
