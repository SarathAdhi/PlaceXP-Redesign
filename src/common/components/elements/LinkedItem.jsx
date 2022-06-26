import React from "react";
import Link from "next/link";

export const LinkedItem = ({ href, className, onClick, children }) => {
  return (
    <Link href={href}>
      <a onClick={onClick} className={className}>
        {children}
      </a>
    </Link>
  );
};

export const LinkedItemStyled = ({ children, ...rest }) => {
  return (
    <LinkedItem
      {...rest}
      className="relative group rounded-md py-2 px-3 border-2 border-primary-900 text-primary-900 font-medium"
    >
      <span className="absolute left-0 bottom-0 rounded-md w-0 h-full bg-primary-200 z-0 group-hover:w-full duration-300 group-hover:transition-all"></span>
      <span className="relative z-10 font-semibold">{children}</span>
    </LinkedItem>
  );
};
