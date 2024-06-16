import React from "react";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

type Button = {
  label: string;
  url: string;
};

type EstimationSectionProps = {
  title: string;
  description: string;
  buttons: Button[];
};

const EstimationSection = ({
  title,
  description,
  buttons,
}: EstimationSectionProps) => {
  return (
    <div className="w-full flex flex-col items-center bg-customColor min-h-[250px] p-3 mt-20 mb-14 font-sans">
      <h2 className="text-[1.6rem] text-[#ffffff] font-[600] mt-8 text-center">
        {title}
      </h2>
      <p className="text-[1.1rem] text-[#dadada] mt-6">{description}</p>
      <div className="flex flex-row items-center gap-x-3 md:gap-x-5 lg:gap-x-8 mt-6 mb-5">
        {buttons && buttons.length > 0 &&
          buttons.map((button, index) => (
            <CustomButton
              key={index}
              bgColor="#fff"
              textColor="#0077cc"
              text={button.label}
              link={button.url}
            />
          ))}
      </div>
    </div>
  );
};

export default EstimationSection;
