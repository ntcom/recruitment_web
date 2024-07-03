"use client";
import cn from "@/core/utils/cn";
import React, { useState } from "react";

function Candidate() {
  const [tabSelected, setTabSelected] = useState(1);
  const buttons = [
    {
      id: 1,
      name: "My Profile",
    },
    {
      id: 2,
      name: "Change Password",
    },
    {
      id: 3,
      name: "Save Jobs",
    },
  ];
  return (
    <div className="mt-[100px]">
      <div className="container">
        <div className="flex gap-3">
          <div>Avatar</div>
          <div className="flex gap-3">
            {buttons.map((button) => {
              return (
                <button key={button.id} onClick={() => setTabSelected(button.id)} className={cn("p-[10px_15px] text-[14px] text-[#333] !border-2", {
                  "app-button-basic border-primary-main": button.id === tabSelected,
                  "border-button": button.id !== tabSelected,
                })}>
                  <span className="relative z-[1]">{button.name}</span>
                </button>
              );
            })}
            <button className="border-button p-[10px_15px] text-[14px] text-[#333] !border-2"><span className="relative z-[1]">Log out</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
