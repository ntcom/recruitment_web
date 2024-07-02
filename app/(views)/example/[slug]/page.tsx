"use client";
import { usePathname } from "next/navigation";
import React from "react";

function DetailPage() {
  const pathname = usePathname();
  console.log(pathname);
  return <div>DetailPage</div>;
}

export default DetailPage;
