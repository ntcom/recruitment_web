import React from "react";
interface Props {
  label: string;
  htmlFor: string;
}
function Label({ label, htmlFor }: Props) {
  return (
    <label
      className="text-[#7f7e7e] text-[16px] mb-[15px] inline-block"
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
}

export default Label;
