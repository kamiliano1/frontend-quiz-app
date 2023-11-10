import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
type RadioInputProps = {};

type RadioItemType = {
  setActiveRadio: React.Dispatch<React.SetStateAction<string>>;
  activeRadio: string;
};

const RadioItem = ({ setActiveRadio, activeRadio }: RadioItemType) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setActiveRadio("Fifth")}
      className={`flex items-center rounded-xl sm:rounded-[1.5rem] shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] bg-white text-darkNavy  p-3 lg:py-[18px] lg:px-5 border-[3px]  data-[state=checked]:bg-purple 
        ${activeRadio === "Fifth" ? "border-purple " : "border-white"}`}
    >
      {/* <input type="email" className="peer ..." />
        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p> */}
      <RadioGroup.Item
        className={`bg-lightGrey w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] after:content-['A'] after:text-headingXS sm:after:text-headingM after:text-greyNavy outline-none cursor-default rounded-lg ${
          isHover && "bg-purple bg-opacity-40  after:text-purple"
        }`}
        value="Fifth"
        id="r5"
      ></RadioGroup.Item>
      <label className=" text-headingS leading-none pl-4 sm:pl-8" htmlFor="r5">
        Fifth
      </label>
    </div>
  );
};

const RadioInput: React.FC<RadioInputProps> = () => {
  const [activeRadio, setActiveRadio] = useState("");
  return (
    <form>
      {activeRadio}
      <RadioGroup.Root
        className="flex flex-col gap-3"
        aria-label="View density"
        onValueChange={(state) => setActiveRadio(state)}
        defaultValue={activeRadio}
      >
        <div
          onClick={() => setActiveRadio("first")}
          className={`flex items-center rounded-xl sm:rounded-[1.5rem] shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] bg-white text-darkNavy  p-3 lg:py-[18px] lg:px-5 border-[3px]  
          ${activeRadio === "first" ? "border-purple " : "border-white"}`}
        >
          {/* <input type="email" className="peer ..." />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p> */}
          <RadioGroup.Item
            className="bg-lightGrey hover:bg-darkNavy w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] after:content-['A'] after:text-headingXS sm:after:text-headingM after:text-greyNavy outline-none cursor-default rounded-lg data-[state=checked]:bg-lightBluish  "
            value="first"
            id="r1"
          ></RadioGroup.Item>
          <label
            className=" text-headingS leading-none pl-4 sm:pl-8"
            htmlFor="r1"
          >
            first
          </label>
        </div>
        <RadioItem setActiveRadio={setActiveRadio} activeRadio={activeRadio} />
        {/* <div className="flex items-center rounded-xl sm:rounded-[1.5rem] shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] bg-white text-darkNavy  p-3 lg:py-[18px] lg:px-5 ">
          <RadioGroup.Item
            className="bg-lightGrey hover:bg-darkNavy w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] after:content-['A'] after:text-headingXS sm:after:text-headingM after:text-greyNavy outline-none cursor-default rounded-lg peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            value="Second"
            id="r2"
          ></RadioGroup.Item>
          <label
            className=" text-headingS leading-none pl-4 sm:pl-8 w-full"
            htmlFor="r2"
          >
            Second
          </label>
        </div> */}
        {/* <div className="flex items-center rounded-xl sm:rounded-[1.5rem] shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] bg-white text-darkNavy  p-3 lg:py-[18px] lg:px-5 peer">
          <RadioGroup.Item
            className="bg-lightGrey hover:bg-darkNavy w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] after:content-['A'] after:text-headingXS sm:after:text-headingM after:text-greyNavy outline-none cursor-default rounded-lg peer-aria-checked:border-[20px]"
            value="Third"
            id="r3"
          ></RadioGroup.Item>
          <label
            className=" text-headingS leading-none pl-4 sm:pl-8"
            htmlFor="r3"
          >
            Third
          </label>
          <AiOutlineCheckCircle className="text-[2rem] text-green ml-auto" />
        </div> */}
        <div className="flex items-center rounded-xl sm:rounded-[1.5rem] shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] bg-white text-darkNavy  p-3 lg:py-[18px] lg:px-5">
          <RadioGroup.Item
            className="bg-lightGrey hover:bg-darkNavy w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] after:content-['A'] after:text-headingXS sm:after:text-headingM after:text-greyNavy outline-none cursor-default rounded-lg data-[state=checked]:bg-lightBluish"
            value="Fourth"
            id="r4"
          ></RadioGroup.Item>
          <label
            className=" text-headingS leading-none pl-4 sm:pl-8"
            htmlFor="r4"
          >
            Fourth
          </label>
          <VscError className="text-[2rem] text-r ml-auto" />
        </div>
      </RadioGroup.Root>
    </form>
  );
};
export default RadioInput;
