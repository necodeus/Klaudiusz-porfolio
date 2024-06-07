import Link from "next/link";
import React from "react";

type CustomButtonProps = {
  text: string;
  link: string;
  bgColor: string;
  textColor: string;
}

export default (props: CustomButtonProps) => {
  const {
    text,
    link,
    bgColor,
    textColor,
  } = props;

  return (
    <Link href={link} passHref>
      <button
        style={{ background: bgColor, color: textColor }}
        className="mt-2 p-3 lg:p-4 h-13 rounded-2xl hover:text-customColor hover:scale-105 transition-all duration-200 "
      >
        <span className="text-[0.8rem] font-sans md:text-[0.9rem] lg:text-[1.2rem] xl:text-[16px] font-bold">
          {text}
        </span>
      </button>
    </Link>
  );
};
