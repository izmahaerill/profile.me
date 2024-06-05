import React from "react";
import Navigation from "@/components/navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="px-72 pt-24">{children}</main>
    </>
  );
}
