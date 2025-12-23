'use client'
import useStepStore from "@/store/useStepStore";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button, DateInput, DateValue, Select, SelectItem } from "@heroui/react";
import { useState } from "react";

interface SecondStepProps {
  stepData: {
    heading: string;
    description: string;
    inputs: {
      values: string[];
      placeholders: string[];
    };
  };
}

const SecondStep: React.FC<SecondStepProps> = ({ stepData }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<DateValue | null>(null);
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [dateOfBirthError, setDateOfBirthError] = useState<string>("");
  const [cityError, setCityError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");

  const nextStep = useStepStore((state) => state.nextStep);
  const prevStep = useStepStore((state) => state.prevStep);

  const handleContinue = () => {
    setFirstNameError("");
    setLastNameError("");
    setDateOfBirthError("");
    setCityError("");
    setCountryError("");

    const isAllValid =
      firstName &&
      lastName &&
      dateOfBirth &&
      city &&
      country &&
      !firstNameError &&
      !lastNameError &&
      !dateOfBirthError &&
      !cityError &&
      !countryError;

    if (isAllValid) {
      nextStep();
    } else {
      if (firstName === "") setFirstNameError("This field cannot be empty");
      if (lastName === "") setLastNameError("This field cannot be empty");
      if (dateOfBirth === null) setDateOfBirthError("This field cannot be empty");
      if (city === "")
        setCityError("This field cannot be empty");
      if (country === "") setCountryError("This field cannot be empty")
    }
  };

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Switzerland",
    "Austria",
    "Belgium",
    "Ireland",
    "Portugal",
    "Poland",
    "Czech Republic",
    "Japan",
    "South Korea",
    "China",
    "India",
    "Brazil",
    "Mexico",
    "Argentina",
    "Chile",
    "Colombia",
    "South Africa",
    "Nigeria",
    "Egypt",
    "United Arab Emirates",
    "Saudi Arabia",
    "Israel",
    "Singapore",
    "Malaysia",
    "Thailand",
    "Vietnam",
    "Philippines",
    "Indonesia",
    "New Zealand",
    "Russia",
    "Ukraine",
    "Turkey",
    "Greece",
    "Romania",
    "Hungary",
  ];

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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="text-white px-4 py-2 outline outline-zinc-800 rounded-lg text-[15px] focus:outline-indigo-500 focus:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
          <p className="text-red-600 text-xs pt-1">{firstNameError}</p>
        </div>
        <div className="flex flex-col">
          <label className="text-white pl-1 pb-1">
            {stepData.inputs.values[1]}
          </label>
          <input
            placeholder={stepData.inputs.placeholders[1]}
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="text-white px-4 py-2 outline outline-zinc-800 rounded-lg text-[15px] focus:outline-indigo-500 focus:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
          <p className="text-red-600 text-xs pt-1">{lastNameError}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-white pl-1 pb-1">
          {stepData.inputs.values[2]}
        </label>
        <DateInput
          variant="bordered"
          value={dateOfBirth}
          onChange={setDateOfBirth}
          classNames={{
            inputWrapper:
              "outline outline-zinc-800 rounded-lg focus-within:outline-indigo-500 focus-within:shadow-[0_0_10px_rgba(99,102,241,0.5)]",
            segment: [
              "text-white",
              "text-[15px]",
              "data-[placeholder=true]:text-zinc-500",
              "focus:bg-zinc-800 focus:text-white",
              "data-[invalid=true]:text-white",
            ],

            input: "text-white",
          }}
        />
        <p className="text-red-600 text-xs pt-1">{dateOfBirthError}</p>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-col flex-1">
          <label className="text-white pl-1 pb-1">
            {stepData.inputs.values[3]}
          </label>
          <input
            placeholder={stepData.inputs.placeholders[3]}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text-white px-4 py-2 outline outline-zinc-800 rounded-lg text-[15px] focus:outline-indigo-500 focus:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
          <p className="text-red-600 text-xs pt-1">{cityError}</p>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-white pl-1 pb-1">
            {stepData.inputs.values[4]}
          </label>
          <Select
            placeholder="Select your country"
            variant="bordered"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            classNames={{
              trigger: [
                "bg-transparent border border-zinc-800 rounded-lg",
                "transition-all duration-200",
                "focus-within:!border-indigo-500",
                "focus-within:shadow-[0_0_10px_rgba(99,102,241,0.5)]",
                "data-[open=true]:!border-indigo-500",
                "data-[open=true]:shadow-[0_0_10px_rgba(99,102,241,0.5)]",
              ].join(" "),
              value:
                "text-neutral-500 text-[15px] font-medium group-data-[has-value=true]:text-white",
              popoverContent:
                "bg-zinc-950 border border-zinc-800 text-neutral-300 rounded-xl overflow-hidden",
              listbox: "scrollbar-hide",
            }}
            listboxProps={{
              className: "scrollbar-hide",
              itemClasses: {
                base: [
                  "rounded-md",
                  "text-neutral-300",
                  "data-[hover=true]:text-white",
                  "data-[hover=true]:bg-zinc-900",
                  "data-[selectable=true]:focus:bg-zinc-900",
                  "data-[selected=true]:bg-zinc-800",
                ],
              },
            }}
            className="w-full"
          >
            {countries.map((country) => (
              <SelectItem key={country} textValue={country}>
                {country}
              </SelectItem>
            ))}
          </Select>
          <p className="text-red-600 text-xs pt-1">{countryError}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 w-full">
        <Button
          onClick={prevStep}
          className="text-neutral-500 bg-zinc-900 outline outline-zinc-800 rounded-lg py-3 px-5 flex flex-row items-center mt-6 w-1/3"
        >
          <ArrowLeftIcon className="size-4" />
          Back
        </Button>
        <Button
          onClick={handleContinue}
          className="text-white bg-indigo-500 rounded-lg py-3 px-5 flex flex-row items-center mt-6 w-2/3 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] duration-300"
        >
          Continue
          <ArrowRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
