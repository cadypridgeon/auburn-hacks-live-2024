import React from "react";
import { Inclusive_Sans } from "next/font/google";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
const inclusive_Sans = Inclusive_Sans({ weight: "400", subsets: ["latin"] });

interface SocialButtonProps {
  name: string;
  icon: any;
  link: string;
  className?: string;
}

const SocialButton = ({ name, icon, link, className }: SocialButtonProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Link href={link} target="blank">
        <p
          className={twMerge(
            "bg-opacity-25 bg-slate-300 rounded-full p-3 hover:bg-slate-400 hover:bg-opacity-25 transition",
            className
          )}
        >
          {icon}
        </p>
      </Link>
      <p className={inclusive_Sans.className}>{name}</p>
    </div>
  );
};

export default SocialButton;
